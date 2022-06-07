import { identify, trackEvent } from './hubspot';
import { recaptcha } from './recaptcha';
import { UserInfo } from '../declarations';

export interface SignupForm {
  name?: string;
  email?: string;
  username?: string;
  password?: string;
}

export interface LoginForm {
  email?: string;
  password?: string;
}

const makeApiError = (message, exc?, reason?) => ({
  message,
  error: exc,
  reason
});

export const login = async (email, password, source, loginEventId ="000006636951") => {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.has("source")) {
      source = params.get("source");
    } else if (params.has("client_id")) {
      source = params.get("client_id");
    }

    const recaptchaCode = await recaptcha('login');
    const ret = await fetch('/oauth/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        source,
        recaptcha: recaptchaCode
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (ret.status === 401) {
      throw 'Incorrect Email or Password';
    }

    await ret.json();

    window.dataLayer.push({ event: 'login' });
    identify(email);
    trackEvent({ id: loginEventId });

    return location.search;
    //return oauthAuthorize();
  } catch (e) {
    const reason = typeof e === 'string' ? e : '';
    throw makeApiError('Unable to log in', e, reason);
  }
}

export const oauthAuthorize = () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has("client_id")) {
    window.location.assign(`/oauth/authorize${window.location.search}`);
  } else {
    window.location.assign(`${window.DASHBOARD_URL}/login${window.location.search}`);
  }
}

export const signup = async (form: SignupForm, source: string, signupEventId="000006040735") => {
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.has("source")) {
      source = params.get("source");
    } else if (params.has("client_id")) {
      source = params.get("client_id");
    }

    const recaptchaCode = await recaptcha('signup');

    const ret = await fetch('/oauth/signup', {
      method: 'POST',
      body: JSON.stringify({
        ...form,
        source,
        recaptcha: recaptchaCode
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });

    const data = await ret.json();

    if (data.error) {
      return data;
    }

    window.dataLayer.push({ event: 'sign_up' });
    identify(form.email);
    trackEvent({ id: signupEventId });

    return data;
  } catch (e) {
    throw makeApiError('Unable to create account', e);
  }
}

export const getUser = async (): Promise<UserInfo> => {
  try {
    const ret = await fetch('/oauth/userinfo');
    if (!ret.ok) {
      return null;
    }
    return await ret.json() as UserInfo;
  } catch (e) {
    return null;
  }
}
