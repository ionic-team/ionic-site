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
    const ret = await fetch('/oauth/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        source
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (ret.status === 401) {
      throw 'Incorrect Email or Password';
    }

    await ret.json();

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
  var params = new URLSearchParams(location.search);
  if (!params.has("client_id")) {
    params.set("response_type", "token");
    params.set("scope", "openid profile email");
    params.set("client_id", "dash");
    params.set("nonce", Math.random().toString(36).substring(2));
  }

  window.location.assign(`/oauth/authorize?${params.toString()}`);
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
