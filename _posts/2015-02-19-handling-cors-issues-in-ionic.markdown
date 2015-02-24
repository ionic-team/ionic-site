---
layout: post
title:  "Handling CORS issues in Ionic"
date:   "2015-02-19  12:00:00"
categories: ionic, cors,
author: '<img src="/img/blog/ionic-view-app-header.gif"
class="author-icon"><a href="https://twitter.com/jbavari" target="_blank">Josh Bavari</a>'
published: true
---

If you've used `ionic serve` or `ionic run` with live reload and accessing external API endpoints, chances are you've run into some [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
issues. They usually look something like this:


```bash
XMLHttpRequest cannot load http://api.ionic.com/endpoint.
No 'Access-Control-Allow-Origin' header is present on the requested resource.
Origin 'http://localhost:8100' is therefore not allowed access.
```

So what is CORS, and why is it a problem?

### What is CORS?

CORS = Cross origin resource sharing.

The `origin` is the host you are currently viewing.
Since you're at `http://ionicframework.com/blog/handling-cors-issues-in-ionic`, the `origin` is `ionicframework.com`.

Say we send an AJAX request to `http://cors.api.com/api`,  your host origin will be specified by the Origin header that is automatically included for CORS requests by the browser. Since `ionicframework.com` does not match the host of `api.com`, our request from `ionicframework.com` must ask the server for approval before we can access the resource, in the form of an HTTP OPTIONS request header.

If we get the error above, then we may not access the resource from the server.

Let’s take a look what your `origin` will be when you're running your app via `ionic serve`, `ionic run`, or `ionic run -l`.

### Running in the browser

What happens when you run `ionic serve`?

* A local web server is started up.
* Your browser is opened to point at the local server address.

This starts you off looking at your app loaded in a browser on your computer with the address `http://localhost:8100` (if you chose localhost).

Your `origin` will be `localhost:8100`.

Any AJAX request sent out to a host other than `localhost:8100` will have `localhost:8100` as its origin and thus will require a CORS preflight request to see if it can access the resource.

### Running on a device

What happens when you run `ionic run`?

* Your files for the app are copied to the device (or simulator).
* The app runs, thus firing a browser on the phone/simulator to run the files that were copied over, something like: `file://some/path/www/index.html`.

Your `origin` will not exist, since you are running off of a `file://` URI; therefore, any request outwards will *not* require a CORS request.


### Running on a device with livereload

What happens when you run `ionic run -l`?

* A local web server is started up.
* The app runs, thus firing a browser on the phone/simulator to run the files from the server `http://192.168.1.1:8100` (or whatever your local IP address is).

Your `origin` will be `192.168.1.1:8100`.

Any AJAX request sent out to a host other than  `192.168.1.1:8100` will require a CORS preflight request to see if it can access the resource.

### Dealing with CORS in Ionic

CORS is only an issue when we are running or testing our app when running `ionic serve` or `ionic run -l`.

There are two ways to solve the issue: The first, and easier, solution is to just allow all origins from your API endpoint. However, we can't always control the endpoint we are accessing. What we need, then, is a request that does not specify an `origin`.

We can do this by using a proxy server. Let's look how the Ionic CLI provides
an easily configurable proxy server.

### The Ionic CLI proxy server

A quick definition about proxies:

> In computer networks, a proxy server is a server (a computer system or an application) that acts as an intermediary for requests from clients seeking resources from other servers.

What we'd need to do to get around these CORS issues is have a proxy server that
will take our requests, issue a new request to the API endpoint, receive the response, and forward it back to our app so we can get around CORS issues.

The Ionic CLI introduced the ability to have a proxy server issue requests for you to get around any CORS issues you may have.

Since the server is sending a fresh request to your destination, there will be no `origin` and therefore, no CORS needed. It is important to note that the browser adds in the Origin header.



### Setting up the proxy server

_Please note, these are only needed for `ionic serve` and `ionic run -l`._

First we will need to set up the proxies in our `ionic.project` file. This will tell our Ionic server to listen to those paths and forward those requests on to the destination url.

In our app, we will need to replace our endpoint URLS to be set to the proxy server address for when we are running `serve` or `run -l`.

We can make this a bit easier by using some gulp tasks using the replace module to swap out the URLs.

The suggested method is to set up an Angular Constant to point at the API we're trying to proxy out.

This is the approach we will take below. We will also set up an Angular Service to use that API Endpoint to get data.

### Setting up the proxy urls

Let's say we want to access `http://cors.api.com/api`, which is not allowing our origin from `localhost`.

The proxies settings contain two things: the `path` you use to access them on your local Ionic server, and the `proxyUrl` you'd ultimately like to reach from the API call.

Set up your `ionic.project` file to be something like:

```json
{
  "name": "proxy-example",
  "app_id": "",
  "proxies": [
    {
      "path": "/api",
      "proxyUrl": "http://cors.api.com/api"
    }
  ]
}
```

Run your server with `ionic serve`.

As we specified above, when you access the ionic server at the path `http://localhost:8100/api`, it will proxy requests out to `http://cors.api.com/api` on your behalf.

Thus, no CORS is required.

### Set up Angular Constant

It's quite easy to set up your API endpoints as Angular Constants.

Below, we've specified the ApiEndpoint to be our proxied URL right now.

Later, we can use our production url as a constant.

```javascript
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
.constant('ApiEndpoint', {
  url: 'http://localhost:8100/api'
})
// For the real endpoint, we'd use this
// .constant('ApiEndpoint', {
//  url: 'http://cors.api.com/api'
// })
```

Once this is done, you can use the constant anywhere in your app, by including
`ApiEndpoint` as a dependency, as shown below in the service.

### Setting up Angular Service

```javascript
angular.module('starter.services', [])

//NOTE: We are including the constant `ApiEndpoint` to be used here.
.factory('Api', function($http, ApiEndpoint) {
  console.log('ApiEndpoint', ApiEndpoint)

  var getApiData = function() {
    return $http.get(ApiEndpoint.url + '/tasks')
      .then(function(data) {
        console.log('Got some data: ', data);
        return data;
      });
  };

  return {
    getApiData: getApiData
  };
})
```

### Automating URL switches with Gulp

For this process, we'll need to modify our `gulpfile.js` to add in two tasks to add our proxy url or remove our proxy url.

Start by first installing the `replace` module - `npm install --save replace`.

```javascript
// `npm install --save replace`
var replace = require('replace');
var replaceFiles = ['./www/js/app.js'];

gulp.task('add-proxy', function() {
  return replace({
    regex: "http://cors.api.com/api",
    replacement: "http://localhost:8100/api",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})

gulp.task('remove-proxy', function() {
  return replace({
    regex: "http://localhost:8100/api",
    replacement: "http://cors.api.com/api",
    paths: replaceFiles,
    recursive: false,
    silent: false,
  });
})
```

### Final Words

This tutorial showed you one way to handle your CORS issues when running `ionic serve` or `ionic run -l`.

We know that it can be a hassle to swap out your API url endpoints when switching between `ionic serve` and `ionic run -l`. One thing that could be suggested is to have a gulp startup process.

The easiest way to handle the CORS problem is to ultimately ask your API provider to allow all hosts. However, this isn't always an option.

Using the Angular constant and the replace module will give us a happy medium, in which we can work around CORS.

If you need a solid example, take a look [at this sample project](http://github.com/driftyco/ionic-proxy-example).

This is everything you'd need to access an API server that restricts CORS.

If you have any questions, issues, or ideas, please leave a comment below or contact us [on twitter](http://twitter.com/ionicframework) or [github](http://github.com/driftyco/ionic-cli).
