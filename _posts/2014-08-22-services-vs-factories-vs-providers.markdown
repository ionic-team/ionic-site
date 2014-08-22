---
layout: post
title:  "AngularJS: Services vs Factories vs Providers"
date:   "2014-08-22 13:00:00"
categories: angularjs
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
searchable: true
published: false
---

One of the biggest confusion points in AngularJS development is the difference between services, factories, and providers. Why have three? When do you use which? What is the difference between them?

I've seen a [lot](http://stackoverflow.com/questions/15666048/angular-js-service-vs-provider-vs-factory) of [explanations](http://stackoverflow.com/questions/13762228/confused-about-service-vs-factory) about this, but I think they all overcomplicate the situation and don't provide any practical advice. I hope this post can be the last word on the topic.

### It's all providers

At the core, the `service` and `factory` are all specialized versions of `provider`, even though the core concept in Angular is called a "service." This can be confusing, but just know when you say "AngularJS Service" you are talking about the high-level Dependency Injection concept, and when you refer to `service` you are talking about a code detail of the implementation of the concept. Whew!

I personally find it helpful to just look right at the [AngularJS code](https://github.com/angular/angular.js/blob/c94329a891a1c082567c490ccf58ba8592b464ad/src/auto/injector.js#L655) where `provider()` is defined.

`factory()` is defined in a single line as a provider whose `$get` function is just itself!

```javascript
function factory(name, factoryFn) { return provider(name, { $get: factoryFn }); }
```
