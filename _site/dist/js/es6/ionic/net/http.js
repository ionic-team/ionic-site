import * as util from 'ionic/util';
export class Http {
  static fetch(url, options) {
    return fetch(url, options).then((response) => {
      if (response.status === 200 || response.status === 0) {
        if (response.headers.get('Content-Type') === 'application/json') {
          return response.json();
        }
        return response.text();
      } else {
        return Promise.reject(response, new Error(response.statusText));
      }
    }).catch((err) => {
      return Promise.reject(err);
    });
  }
  static _method(method, url, data, options, sendsJson) {
    options = util.defaults(options, {
      method: method,
      headers: {'Accept': 'application/json,text/plain,*/*'},
      body: (typeof data === 'string') ? data : JSON.stringify(data)
    });
    if (sendsJson) {
      options.headers['Content-Type'] = 'application/json';
    }
    return Http.fetch(url, options);
  }
  static get(url, options = {}) {
    return Http._method('get', url, {}, options);
  }
  static post(url, data = {}, options = {}) {
    return Http._method('post', url, data, options, true);
  }
  static put(url, data = {}, options = {}) {
    return Http._method('put', url, data, options, true);
  }
  static delete(url, data = {}, options = {}) {
    return Http._method('delete', url, data, options, true);
  }
  static patch(url, data = {}, options = {}) {
    return Http._method('patch', url, data, options, true);
  }
}
