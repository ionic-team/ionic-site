---
layout: post
title:  "Debugging AngularJS Apps from the Console"
date:   "2014-06-29 08:00:00"
hide_date: false
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: true
---

When building AngularJS apps, it can be challenging to access data and services hidden deep in our application through the Javascript console in Chrome, Firefox, and IE. Here are some simple tricks we can use to inspect and control a running Angular app through the browser Javascript console, making it easy to test, modify, and even program our Angular app in real-time:

###1: Access Scopes

We can access any scope (even isolated ones!) on the page with a simple JS one-liner:

```javascript
> angular.element(targetNode).scope()
-> ChildScope {$id: "005", this: ChildScope, $$listeners: Object, $$listenerCount: Object, $parent: Scope…}
```

Or for isolated scopes:

```javascript
> angular.element(targetNode).isolateScope()
-> Scope {$id: "009", $$childTail: ChildScope, $$childHead: ChildScope, $$prevSibling: ChildScope, $$nextSibling: Scope…}
```

Where `targetNode` is a reference to an HTML Node. You can grab one easily using `document.querySelector()`.


###2: Inspect the Scope Tree

Sometimes we need to see what the scopes look like on the page to effectively debug our app. The [AngularJS Batarang](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en) is a Chrome extension that shows the live scope hierarchy and has some other really helpful features.

![Batarang Scopes](http://ionicframework.com.s3.amazonaws.com/blog/angular-batarang.png)

###3: Grab any Services

We can grab a reference to any service using the `injector` function of element where `ngApp` was defined (or grab the $rootElement manually if using angular's bootstrap method):

```javascript
> angular.element('html').injector().get('MyService')
-> Object {undo: function, redo: function, _pushAction: function, newDocument: function, init: function…}
```

We can then call methods on that service just like we could if we injected it.

###4: Access controller for directive

Some directives define a controller with certain additional (often shared) functionality. To access the instance of a controller for a given directive from the console, just use the `controller()` function:

```javascript
> angular.element('my-pages').controller()
-> Constructor {}
```

This last one is more advanced and not used as frequently.

###5: Chrome Console Features

Chrome has a ton of [nice shortcuts](https://developer.chrome.com/devtools/docs/commandline-api) for debugging browser applications from the console. Here are some of the best ones for Angular development:

 * `$0` - `$4`: Access the last 5 DOM elements selected in the inspector window. This is convenient for grabbing scopes for selected elements: `angular.element($0).scope()`

 * `$(selector)` and `$$(selector)`: A quick replacement for `querySelector()` and `querySelectorAll`, respectively.

Thanks to [@zgohr](http://twitter.com/zgohr) for this tip!

###Conclusion

With a few simple tricks we can access the data for any scope on the page, inspect the scope hierarchy, inject services, and control directives.

So the next time you want to make small tweaks, check your work, or control an AngularJS app from the console, I hope you'll remember these commands and find them as useful as I do!
