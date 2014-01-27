---
layout: demo_landing
title: "Ionic Framework - Swipe Cards"
demo_title: "Swipeable Card UI"
codepen_id: "skbxh"
---

Swipeable cards are an emerging mobile UI, seen in new apps like [Jelly](http://jelly.co/).

Cards make it easy to display modal content that fills the center of the screen,
letting the user swipe it away to bring up a new bit of content.

We built a similar UI that you can use in your own Ionic apps, just download
and include the `ionic.swipecards.js` file from the [ionic-contrib-swipe-cards](https://github.com/driftyco/ionic-contrib-swipe-cards)
repo, and use the following AngularJS directives:

```html
<swipe-cards>
  <swipe-card ng-repeat="card in cards" on-destroy="cardDestroyed($index)" on-swipe="cardSwiped($index)">
    Card content here
  </swipe-card>
</swipe-cards>
```

To add new cards dynamically, just add them to the cards array:

```javascript
$scope.cards = [
  { // card 1 },
  { // card 2 }
];

$scope.cardDestroyed = function(index) {
  $scope.cards.splice(index, 1);
};

$scope.cardSwiped = function(index) {
  var newCard = // new card data
  $scope.cards.push(newCard);
};
```
