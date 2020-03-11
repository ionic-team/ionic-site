declare var window: any;

export const trackClick = (eventCategory, eventLabel, eventEl?, eventValue?) => {
  window.c(eventCategory, eventLabel, eventEl, eventValue);
};

export const getUtmParams = () => {
  const search = location.search;
  if (!search) {
    return {};
  }

  return search
    .substring(1)
    .split('&')
    .map(arg => arg.split('='))
    .filter(arg => arg[0].indexOf('utm_') === 0)
    .reduce((args, arg) => { args[arg[0]] = arg[1]; return args }, {});
}