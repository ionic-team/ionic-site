export const setCookie = (name, value) => {
  const days = 365;
  const dt = new Date();
  dt.setTime(dt.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "; expires=" + dt.toUTCString();
  document.cookie = name + "=" + value + "; domain=ionicframework.com; expires=" + expires + ";";
}

export const getCookie = (name) => {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}