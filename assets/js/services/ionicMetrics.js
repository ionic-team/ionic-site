IonicSiteModule
.service('ionicMetrics', ['$cookies', '$http', function($cookies, $http) {
  this.track = function(eventName, metricName) {
    // in-house funnel metrics
    var guid = $cookies.get('ionic-metrics');
    if (!guid) {
      guid = window.guid();
      $cookies.put('ionic-metrics', guid);
    }
    metricName = metricName ? metricName : 'ionic_site_products_funnel';
    var now = new Date();
    return $http.post('https://api.ionicjs.com/events/metrics', {
      metrics: [{
        name: metricName,
        timestamp: now.toISOString(),
        session_id: guid,
        value: {
          event: eventName
        }
      }],
      sent_at: now.toISOString()
    })
  }
}])