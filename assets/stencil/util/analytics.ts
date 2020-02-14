declare var window: any;

export const trackClick = (eventCategory, eventLabel, eventEl?, eventValue?) => {
  window.c(eventCategory, eventLabel, eventEl, eventValue);
};
