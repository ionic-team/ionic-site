declare var window: any;

export const hubspotTrack = (email, trackEventData) => {
  var _hsq = (window._hsq = window._hsq || []);
  _hsq.push(["identify", { email }]);
  _hsq.push(["trackEvent", trackEventData]);
}