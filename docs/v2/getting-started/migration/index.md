---
layout: v2_fluid/docs_base
category: getting-started
id: migration
title: Ionic 2 | Getting Started | Migration
header_title: Getting Started - Migration
header_sub_title: Ionic 2 Developer Preview
---


# Whats New in Ionic 2

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/getting-started/migration/index.md'>Improve this doc</a>

Ionic 2 is built on top of Angular 2, which is complete rewrite of the original framework. All the parts of Angular you know are still there, but there are new syntax and structural changes that developers need to be aware of. For an overview of the changes in Angular 2, take a look at [Learn Angular 2](http://learnangular2.com/).

For Ionic 2, things should feel quite familiar. All the concepts from Ionic V1 are still in V2, though they may look slightly different. You still have views and controllers like you did in V1, but in V2 they have been merged into one instance.

Take this V1 example.


V1

```
.config(function($stateProvider){
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl'
  })
})

.controller('MainCtrl', function(){

})
```

We can rewrite this in V2 like so.

```
@Page({
  templateUrl:'main/main.html'
})
export class MainCmp {
  constructor(){

  }
}
```

Other changes, such as our navigation changes, are much more different, but all for the best. Now we can treat components as arbitrary views, and navigate to them however we want. This makes navigation much more flexible and allows for much more native-styled navigation stacks.

# Migrating from Angular 1


While Angular 2 requires apps to be update for the syntax change, developers can be proactive and make sure their app is upgradable by following best practices and working with [John Papa's Angular Style guide](https://github.com/johnpapa/angular-styleguide) or [Todd Motto's Angular Style guide](https://github.com/toddmotto/angularjs-styleguide). Both of these will provide you with steps you can take to prepare your code for migration.

### ControllerAs Syntax

ControllerAs Syntax is a feature in Angular 1.x where instead of binding data to `$scope`, you can bind to the direct instance of the controller instead. This makes migrating a Angular 1.x controller to an Angular 2 class much easier. It's fairly easy to migrate to `controllerAs` from a traditional controller:

_index.html_

```html
{% raw %}
    <ion-content ng-controller="MainCtrl">
      <ion-item>
        {{data.text}}
      </ion-item>
    </ion-content>
{% endraw %}
```

_app.js_

```javascript
    .controller('MainCtrl', function($scope){
      $scope.data ={
        text: 'Hello World'
      }
    })
```

To convert this to `controllerAs` syntax, you only have to change a few things.

_index.html_

```html
{% raw %}
    <ion-content ng-controller="MainCtrl as main">
      <ion-item>
        {{data.text}}
      </ion-item>
    </ion-content>
{% endraw %}
```

_app.js_

```javascript
    .controller('MainCtrl', function(){
      this.data ={
        text: 'Hello World'
      }
    })

```

### TypeScript

TypeScript is a superset of JavaScript that provides ES6 Classes and type annotations in your code. By adopting TypeScript now, you can write your code as ES6 Classes that will be easy to move to Ionic 2\. The best part is that any valid JavaScript is also valid TypeScript, so you can convert your code piece by piece. If we take our controller from before, we can easily convert it to a TypeScript class like this.

_app.js_

```javascript
    .controller('MainCtrl', function(){
      this.data ={
        text: 'Hello World'
      }
    })

```

_app.ts_

```javascript

    export class MainCtrl{
      constructor(){
        this.data ={
          text: 'Hello World'
        }
      }
    }

```

### Project Structure

With Angular 1, it was a practice to keep all your JavaScript together and separate from your templates. Since Ionic 2 and Angular 2 will be moving to a component base setup, you can reorganize your project to help mentally enforce that concept. So a project whose directory could look like this:

```
    |-www/
    |
    |--js/
    |--|-app.js
    |--|-HomeCtrl.js
    |--|-DetailCtrl.js
    |
    |--templates/
    |--|-Home.html
    |--|-Detail.html
    |
    |-index.html

```

Could start to be reorganized to look like this:

```
    |-www/
    |
    |--Home/
    |--|-HomeCtrl.js
    |--|-Home.html
    |
    |--Detail/
    |--|-DetailCtrl.js
    |--|-Detail.html
    |
    |-index.html
    |-app.js
```

Organizing your project like this can help get you in the mindset that each of your app's views/states are a component, with a template and a controller.
