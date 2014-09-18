---
layout: post
title:  "Cookie-based Authentication in AngularJS"
date:   "2014-09-15 8:00:00"
categories: angularjs
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: true
---

Single Page Apps are ruling the world and AngularJS is leading the charge. But many of the lessons we learned in the Web 2.0 era no longer apply, and few are as drastically different as authentication.

Depending on where you build and release your AngularJS app, there are different ways to handle authentication and I hope this post clears some of that up.

### CORS

CORS is an oft-misunderstood feature of new browsers that is configured by a remote server. CORS stands for Cross-Origin-Resource-Sharing, and was designed to make it possible to access services outside of the current origin (or domain) of the current page.

<!-- more -->

Like many browser features, CORS works because we all agree that it works. So all major browsers like Chrome, Firefox, and IE support and enforce it. By using these browsers, you benefit from the security of CORS.

That means certain browsers do not enforce it, so it is not relevant there. One large example is a native Web View for things like Cordova and Phonegap (and hence, Ionic apps). However, these tools often have configuration options for whitelisting domains so you can add some security that way.

### Configuring CORS on the Server

The way CORS works is the server decides which domains it will accept as clients. This means an open API like Twitter might allow any clients, or a closed API might decide to only allow access from the domain of the running client app.

I won't get into the details of configuring CORS on the server side, but it's really just setting some headers. Here's how you might do it [in nginx](https://gist.github.com/michiel/1064640).

There is one header in particular you must have if you want to do session based authentication in a single page app: `Access-Control-Allow-Credentials: true` which we show next.

### AngularJS Auth

If you use the standard `$http` service to access remote APIs, it will Just Work as long as the server is configured to allow requests from your domain and you don't need to store cookies.

But for many applications, we also need to set and store cookie information for things like logins. By default this is not allowed in most browsers and you'll be smashing your head wondering why the cookie information isn't being saved!

Enter: `withCredentials`. `withCredentials` is a flag set on a low-level `XMLHttpRequest` (AJAX) object, but in Angular we can configure our `$http` requests to set this flag for everything by doing:

```javascript
angular.module('myApp')

.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}])
```

### CSRF

Many servers use CSRF as a security feature and you can certainly keep this feature in a hybrid app if you wish. CSRF is a way to ensure the client making a request is the same one that the server expects to make the request. This keeps someone from sniffing your cookie session data and making requests pretending to be you (and changing your password, for example).

To make for CSRF, we can tell `$http` to set the correct header for CSRF (might depend on your server framework, this one is for Django) using the specific cookie name:

```javascript
angular.module('myApp', ['ngCookies'])

.run(['$http', '$cookies', function($http, $cookies) {
  $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
}]);
```

While I've found this to work pretty well, if the CSRF token changes mid-session (for example if a new user signs up) the token won't update. To fix this, we can use an HTTP Interceptor to always set the correct CSRF header value before each request:

```javascript
angular.module('myApp')

.provider('myCSRF',[function(){
  var headerName = 'X-CSRFToken';
  var cookieName = 'csrftoken';
  var allowedMethods = ['GET'];

  this.setHeaderName = function(n) {
    headerName = n;
  }
  this.setCookieName = function(n) {
    cookieName = n;
  }
  this.setAllowedMethods = function(n) {
    allowedMethods = n;
  }
  this.$get = ['$cookies', function($cookies){
    return {
      'request': function(config) {
        if(allowedMethods.indexOf(config.method) === -1) {
          // do something on success
          config.headers[headerName] = $cookies[cookieName];
        }
        return config;
      }
    }
  }];
}]).config(function($httpProvider) {
  $httpProvider.interceptors.push('myCSRF');
});
```

This will set the CSRF request header to the current value of the CSRF cookie for any request type not in `allowedMethods`. 

### Credentials and CORS

One thing to note when using `withCredentials: true` in your app and configuring the server for CORS is that you may not have your `Access-Control-Allow-Origin` header set to `'*'`. It must be configured to a few select origins. If you absolutely must have this set to `*`, then I suggest doing something beyond cookie based authentication, such as token-based authentication.


### Token Auth

The methods described above work for cookie-based authentication that is common in most server-side setups. However, some APIs expect HTTP Basic Authentication or use a token-based system.

While the correct use of CORS will avoid cross-domain pitfalls of cookie-based authentication, those methods may be a better fit for your use case. In that case, take a look at [this great post](https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/) on token authentication with AngularJS.

We may revisit this topic in the future to add our thoughts on Token-based authentication.
