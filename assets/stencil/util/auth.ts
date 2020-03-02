// const API_BASE = 'https://api.ionicjs.com';
const API_BASE = 'https://staging.ionicframework.com';

import { trackClick } from './analytics';
import { hubspotTrack } from './hubspot';

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

const makeApiError = (message, exc?) => ({
  message,
  error: exc
});

const apiUrl = (url) => `${API_BASE}${url}`;

export const login = async (email, password, source) => {
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

    const data = await ret.json();

    trackClick('Log in', 'btn-login-submit');

    hubspotTrack(data.email, { id: "000006636951" });

    return location.search;
    //return oauthAuthorize();
  } catch (e) {
    throw makeApiError('Unable to log in', e);
  }
}

const oauthAuthorize = () => {
  var params = new URLSearchParams(location.search);
  if (!params.has("client_id")) {
    params.set("response_type", "token");
    params.set("scope", "openid profile email");
    params.set("client_id", "dash");
    params.set("nonce", Math.random().toString(36).substring(2));
  }

  window.location.assign(`${apiUrl('/oauth/authorize')}?${params.toString()}`);
}

export const signup = async (form: SignupForm) => {
  try {
    const ret = await fetch(apiUrl('/oauth/signup'), {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });

    if (ret.status !== 201) {
      throw makeApiError('Unable to create account');
    }

    const data = await ret.json();
    const token = data.token;
    console.log('Signed up', token);

    /*
    window.c('Get started', 'btn-get-started-signup-submit');
    var _hsq = window._hsq = window._hsq || [];
    _hsq.push(["identify", {
      email: response.data.user.email,
      id: response.data.user.id
    }]);
    _hsq.push(["trackEvent", {
      id: "000006040735"
    }]);

    setCookie('_ionic_token', response.data.token);
    setCookie('_ionic_user_id', response.data.user.id);

    var href = 'https://dashboard.ionicframework.com/select-plan?plan=starter';
    var hsutk = window.getCookie('hubspotutk');
    if (hsutk) {
      href += '&hsid=' + encodeURIComponent(hsutk);
    }
    window.location = href;
    */
  } catch (e) {
    throw makeApiError('Unable to create account', e);
  }
}