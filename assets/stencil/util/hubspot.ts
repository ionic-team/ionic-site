declare var window: any;

interface HubspotTrackEventArgs {
  id: string;
}

export const trackEvent = (trackEventData: HubspotTrackEventArgs) => {
  var _hsq = (window._hsq = window._hsq || []);
  _hsq.push(["trackEvent", trackEventData]);
}

export const identify = (email, id = null) => {
  var _hsq = (window._hsq = window._hsq || []);
  _hsq.push(["identify", { email, id }]);
}