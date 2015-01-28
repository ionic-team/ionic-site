---
layout: post
title:  "Understanding Pull to Refresh"
date:   "2015-01-10  2:00:00"
categories: angularjs, ionic, ngCordova, framework, mobile
author: '<img src="https://pbs.twimg.com/profile_images/2653730816/5da4d8fb72352c715bbaffe07e56270e_400x400.jpeg"
class="author-icon"><a href="https://twitter.com/andrewmcgivery" target="_blank">Andrew McGivery</a>'
published: false
---

*This is a guest post by [Andrew McGivery](http://mcgivery.com/), an application developer with a strong background in
Android, AngularJS, Ionic, C#, SQL, and front end development. Andrew writes often about Ionic and how to build great hybrid apps.*

With the rise of social networks, the "feed" has become a popular design pattern, especially in mobile apps. The idea is to load in new items to the top of a feed by pulling down from the top of the list until you see a loading indicator, letting go, and watching as new items magically (not really) add themselves in.

Ionic has an awesome directive that has undergone a redo fairly recently to accomplish exactly this. In this post, we'll break down a basic example of using this directive, a list, and the [Random User API](https://randomuser.me/) to see how to use the directive with example data (feel free to follow along [on CodePen](http://codepen.io/andrewmcgivery/pen/ZYyVgp)).

<!-- more -->

## ion-refresher (Pull to Refresh Directive)
The Ionic directive we are going to use is the `ion-refresher` ([Official Documentation](http://ionicframework.com/docs/api/directive/ionRefresher/)). The most basic usage is as follows:

```html
<ion-refresher on-refresh="doRefresh()"></ion-refresher>
```

`on-refresh` should point to a `$scope` function that gets the new data, updates a list, and then lets the refresher know it is done. This refresher should be above some kind of list. 

## View
For our example, we'll be using the following view markup:

```html
<ion-refresher on-refresh="doRefresh()"></ion-refresher>
<ion-list>
	<ion-item class="item-avatar" ng-repeat="item in items">
		<img src="{{item.user.picture.thumbnail}} " />
		## {{item.user.name.first}} {{item.user.name.last}}
		<p>{{item.user.location.city}} {{item.user.password}}</p>
	</ion-item>
</ion-list>
```

which looks something like this, once rendered:

<img src="http://mcgivery.com/wp-content/uploads/2015/01/list.png" alt="rendered list" />

Remember that this list iterates over the `$scope.items` array.

```html
ng-repeat="item in items"
```

(Read more about views in Ionic [Creating Views with Ionic](http://mcgivery.com/creating-views-with-ionic/).)

## Factory
In our example, we're going to be making a call to the Random User API to get some data to play with. To do this, we'll create a factory that makes these API calls. This factory will have two methods: `GetFeed` and `GetNewUser`. `GetFeed` will be called when our app loads to get the initial data, and the `GetNewUser` will be called each time we do a pull to refresh.

```javascript
.factory('PersonService', function($http){
	var BASE_URL = "http://api.randomuser.me/";
	var items = [];
	
	return {
		GetFeed: function(){
			return $http.get(BASE_URL+'?results=10').then(function(response){
				items = response.data.results;
				return items;
			});
		},
		GetNewUser: function(){
			return $http.get(BASE_URL).then(function(response){
				items = response.data.results;
				return items;
			});
		}
	}
})
```

Our `GetFeed` call returns 10 results, and each call to `GetNewUser` returns 1 result.

(Read more about using factories: [Ionic: Using Factories and Web Services for Dynamic Data](http://mcgivery.com/ionic-using-factories-and-web-services-for-dynamic-data/))

## Controller
Our controller needs to do 2 things:

1. Fill the feed with the initial items
2. Handle the pull to refresh


First, to fill our feed, we'll want to make a call to the PersonService and assign the result to the `$scope.items` array:

```javascript
.controller('MyCtrl', function($scope, $timeout, PersonService) {
	$scope.items = [];

	PersonService.GetFeed().then(function(items){
		$scope.items = items;
	});
});
```

Next, we need to handle the pull to refresh. Recall we configured our directive to call a `doRefresh` function. We'll need to define this function:

```javascript
$scope.doRefresh = function() {

}
```

In this function, we should call the `GetNewUser` function and add these items to the beginning of the array.

```javascript
$scope.doRefresh = function() {
	PersonService.GetNewUser().then(function(items){
		$scope.items = items.concat($scope.items);
	});
};
```

You'll notice we are using the `array.concat` function to add the items in. This is because `items` is an array, so we need to add the two arrays together.

We still need to do one final thing. We need to let the scroller know that we're done loading in the new items, so it can hide the loading indicator. To do this, we need to broadcast the `scroll.refreshComplete` event.

```javascript
$scope.doRefresh = function() {
	PersonService.GetNewUser().then(function(items){
		$scope.items = items.concat($scope.items);

		//Stop the ion-refresher from spinning
		$scope.$broadcast('scroll.refreshComplete');
	});
};
```

In its entirety, our controller looks like this:

```javascript
.controller('MyCtrl', function($scope, $timeout, PersonService) {
	$scope.items = [];

	PersonService.GetFeed().then(function(items){
		$scope.items = items;
	});

	$scope.doRefresh = function() {
		PersonService.GetNewUser().then(function(items){
			$scope.items = items.concat($scope.items);

			//Stop the ion-refresher from spinning
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

});
```

(Read more about using controllers: [Controllers in Ionic/Angular](http://mcgivery.com/controllers-ionicangular/).)

## Conclusion
Using the code above (full code on [CodePen](http://codepen.io/andrewmcgivery/pen/ZYyVgp/)), you can accomplish this common pull to refresh patten in your Ionic Apps. Questions? Feel free to comment below!
