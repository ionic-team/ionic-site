---
layout: post
title:  "Building a custom Swipeable Card UI with Ionic and AngularJS"
date:   "2014-01-25 13:00:00"
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: true
---

One of the original goals of the Ionic Framework was to encourage custom mobile UI development with HTML5, building UIs that were innovative, interactive,
and fun, but weren't necessarily part of the core mobile UI framework on a given platform.

We've seen native developers doing this for some time. Startups and companies like Jelly, Path, Facebook, and Google have very custom mobile UIs filled
with animations, lots of interesting gesture-based interactions, and other unique effects. This helps create a potentially more fluid experience for the user performing an app-specific task, but also serves as a way to make
a design impact and draw more attention to the app itself.

I was playing with the [Jelly](http://jelly.co/) app last week and fell in love with the swipeable card UI. I felt it was fun and effective enough that tons of mobile developers would want to emulate it for their apps, much like the draggable Side Menu made popular by Path and Facebook:

![Cards](http://ionicframework.com.s3.amazonaws.com/blog/jelly.jpg)

<!-- more -->

But to build this UI, it would have to be done from scratch, seeing as it's not a built in component in UI frameworks available in any mobile SDKs. So, I spent a nice Saturday building a reusable Ionic and AngularJS based card layout ([demo and code here](http://ionicframework.com/demos/swipe-cards/)) and I want to show you how I did it and how you can build your own Ionic components, too!

## Views and View Controllers

Those familiar with native development will understand the View Controller design pattern. The idea is we have a bunch of rectangles on the screen, these are what we call Views and they might be
as simple as a button or image, or as complicated as a slider. We then create complex, interesting UIs by using logic-only View Controllers that act
as the conductors by moving Views around, handling gestures and other events on the child Views, and creating and destroying child views.

A perfect example of a View Controller is a Tab Bar Controller with three tabs and three pages. This controller has to manage the three sub pages (which can be View Controllers on their own), as well as the Tab Bar which manages its child Tab Items.

Mobile SDKs often come with several built-in Views and View Controllers. For example, iOS has the UITabBarController, UINavigationController, UITableViewController, and a few others, and uses Tab Bars, Buttons, and List items extensively. Most common mobile UIs can be built with just these core controllers and views.

But when we want to create any non-standard UI, we need to build our own View Controllers and possibly Views to make this work. And we shouldn't be afraid to, it's exactly how the pros do it!

## Ionic Swipe Cards

With the background about View Controllers out of the way, let's look at the final UI we are going to build (play the video demo):

<iframe name='quickcast' src='http://quick.as/embed/rz5lcx5g' scrolling='no' frameborder='0' width='320' allowfullscreen></iframe><script src='http://quick.as/embed/script/0.48'></script>

[Live demo](http://ionicframework.com/demos/swipe-cards/)

## Card stack

To start, we need to look at this UI as a stack of cards that the user can swipe between. This means we need some sort of View Controller
that manages the card stack, popping ones off the stack that are swiped, and letting the user push new ones onto the stack. Let's call this the `SwipeableCardController`:

```javascript
var SwipeableCardController = ionic.controllers.ViewController.inherit({
  initialize: function(opts) {
    this.cards = [];
    // Initialize from the passed in options
  },
  pushCard: function(card) {
    this.cards.push(card);
    // Show the card
  },
  popCard: function() {
    var card = this.cards.pop();
    // Animate the card out
  }
})
```

That's pretty much the core of this View Controller. Apart from managing the stack, the controller will also initialize new cards
and tell the cards to animate in our out, but that's about it!

The Card View, however, is more complicated. Since the cards are rendered to the screen (as opposed to controllers which are pure-logic), they need to keep track of their 
DOM element and also attach event listeners to that element.

In the example below I've included a small snippet of what happens in the drag event, but
the [full example](https://github.com/driftyco/ionic-contrib-swipe-cards/blob/master/ionic.swipecards.js) is in the repo:

```javascript
var SwipeableCardView = ionic.views.View.inherit({
  initialize: function(opts) {
    // Store the card element
    this.el = opts.el;
    this.bindEvents();
  },
  bindEvents: function() {
    var self = this;

    ionic.onGesture('dragstart', function(e) {
      // Process start of drag
    }, this.el);

    ionic.onGesture('drag', function(e) {
      // Process drag
      window.rAF(function() {
        self._doDrag(e);
      });
    }, this.el);

    ionic.onGesture('dragend', function(e) {
      // Process end of drag
    }, this.el);
  },
  _doDrag: function(e) {
    // Calculate how far we've dragged, with a slow-down effect
    var o = e.gesture.deltaY / 3;

    // Get the angle of rotation based on the
    // drag distance and our distance from the 
    // center of the card (computed in dragstart),
    // and the side of the card we are dragging from
    this.rotationAngle = Math.atan(o/this.touchDistance) * this.rotationDirection;

    // Don't rotate if dragging up
    if(e.gesture.deltaY < 0) {
      this.rotationAngle = 0;
    }

    // Update the y position of this view
    this.y = this.startY + (e.gesture.deltaY * 0.4);

    // Apply the CSS transformation to the card,
    // translating it up or down, and rotating
    // it based on the computed angle
    this.el.style[ionic.CSS.TRANSFORM] = 'translate3d(' + this.x + 'px, ' + this.y  + 'px, 0) rotate(' + (this.rotationAngle || 0) + 'rad)';
  }
});
```

This is where Ionic's great gesture system really shines. We can listen for complex gesture events such as dragging, dragging in a specific direction, swiping, pinch-to-zooming, and other cool gestures (powered by the great [Hammer.js](http://eightmedia.github.io/hammer.js/))

The gesture system will also tell us how far we've dragged (`e.gesture.deltaY` in the example above), and can also compute the velocity
or rotation of the drag (useful for gestures that "throw" a view around).

## AngularJS to the Rescue!

If we just had the above View and View Controller, we'd have to manage it all in Javascript. We'd create a few DOM nodes to display each card, instantiate
a few `SwipeableCardView`'s for those nodes, put them in a new `SwipeableCardController` and let the magic happen.

But that's annoying to have to code that by hand, and we miss out on using AngularJS to integrate this card stack with our
scope data. For that we need to build some custom directives. But first, let's assume we want the directive markup to look like this:

```html
<swipe-cards>
  <swipe-card ng-repeat="card in cards" on-destroy="cardDestroyed($index)" on-swipe="cardSwiped($index)">
    <!-- Card content here -->
  </swipe-card>
</swipe-cards>
```

We use a custom element directive to specify that this entire directive will be powered by our `SwipeableCardController`, with each
child `<swipe-card>` being an instance of our `SwipeableCardView`.

Let's start with the `<swipe-cards>` directive as it's simpler:

```javascript

// Our module, requiring the 'ionic' module
angular.module('ionic.contrib.ui.cards', ['ionic'])

.directive('swipeCards', ['$rootScope', function($rootScope) {
  return {
    restrict: 'E',
    template: '<div class="swipe-cards" ng-transclude></div>',
    replace: true,
    transclude: true,
    scope: {},
    controller: function($scope, $element) {
      // Instantiate the controller
      var swipeController = new SwipeableCardController({
      });

      // We add a root scope event listener to facilitate interacting with the
      // directive incase of no direct scope access
      $rootScope.$on('swipeCard.pop', function(isAnimated) {
        swipeController.popCard(isAnimated);
      });

      // return the object so it is accessible to child
      // directives that 'require' this directive as a parent.
      return swipeController;
    }
  }
}])
```

This means whenever AngularJS hits the `<swipe-cards>` directive, it goes and instantiates our controller and
makes it accessible to directives that inherit from it, as we see below in the 
`<swipe-card>` directive:


```javascript
.directive('swipeCard', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    template: '<div class="swipe-card" ng-transclude></div>',

    // Requiring the swipeCards directive makes the controller available
    // in the linking function
    require: '^swipeCards',
    replace: true,
    transclude: true,
    scope: {
      onSwipe: '&',
      onDestroy: '&'
    },
    compile: function(element, attr) {
      return function($scope, $element, $attr, swipeCards) {
        var el = $element[0];

        // Instantiate our card view
        var swipeableCard = new SwipeableCardView({
          el: el,
          onSwipe: function() {
            $timeout(function() {
              $scope.onSwipe();
            });
          },
          onDestroy: function() {
            $timeout(function() {
              $scope.onDestroy();
            });
          },
        });

        // Make the card available to the parent scope, not necessary
        // but makes it easier to interact with (similar to iOS exposing
        // parent controllers and views dynamically to children)
        $scope.$parent.swipeCard = swipeableCard;

        // We can push a new card onto the controller card stack, animating it in
        swipeCards.pushCard(swipeableCard);
      }
    }
  }
}])
```

I love the simplicity of wrapping a complicated UI like the Swipeable Cards into a set of tiny AngularJS directives
that play nicely with the rest of your Angular app. In fact, this is how most of the controllers and views
are exposed in the [Ionic](https://github.com/driftyco/ionic) code base.

One question we receive a lot is why we decided to use element directives instead of attribute or class name directives. Perhaps the biggest reason is because we believe element directives should be used when specifying *components*, and attributes or classes used to specify
*behavior*. As browsers evolve and features such as [Web Components](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/) are widely available, this will become the prodominant way of building reusable components for the web.

If you are new to writing custom AngularJS directives, hopefully it's illuminating to see a real one in the wild!

## Conclusion

The point of this article is to show you the process behind creating new, innovative mobile UIs from the ground up, using
Ionic utilities where possible. But one takeaway should be that no framework will have every UI built in for you, and you
should be open to creating new components in the spirit of the framework you choose to develop with.


