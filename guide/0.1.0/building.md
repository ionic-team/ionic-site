---
layout: guide
title: "Building out the ToDo App"
---

Previous: <a href="starting.html">Starting our App</a>

# Chapter 4: Building out our App

Now that we know everything there is to know about testing our Ionic apps, and we have a working app shell, let's move on to actually making some bacon!

So, let's take another look at our mockup:

<img src="http://ionicframework.com.s3.amazonaws.com/guide/0.1.0/3-mockup.png" alt="Mockup">

We can see that both the center content and side menus have lists. Lists in Ionic are very powerful, and come with a lot of different features commonly see in native apps. Luckily, adding them is really simple. 

Since we are using AngularJS, we are going to use the <a href="http://docs.angularjs.org/api/ng.directive:ngRepeat">`ng-repeat`</a> directive to create a new list item for every single task we have in a given project:

<button type="button" class="btn btn-danger" data-toggle="collapse" data-target="#angular-note">
  AngularJS n00b?
</button>

<div id="angular-note" class="collapse well">
<p>
  Never fear! You can pick up the basics with the ever-growing selection of great tutorials on the web. If you like videos, John Lindquist of <a href="http://egghead.io/">egghead.io</a> has a great selection of short, straight-to-the point AngularJS tutorial videos. You can start with Video #1: <a href="http://egghead.io/lessons/angularjs-binding">AngularJS Binding</a>. Matt Frisbie of <a href="http://www.thinkster.io/">Thinkster.io</a> also has a <a href="http://www.thinkster.io/pick/GtaQ0oMGIl/">great selection</a> of tutorials.
</p>
<p>
  One of the toughest parts about learning Angular is not knowing "the way" to do certain things. We hope that by providing a great selection of examples and guides for Ionic, you'll pick up on how to write Angular in practice. There is no better way to learn Angular than by building something real!
</p>
</div>


With the list code and the Angular `ng-repeat`, the center content becomes:

```html
{% raw %}
<!-- Center content -->
<pane side-menu-content>
  <header class="bar bar-header bar-dark">
    <h1 class="title">ToDo</h1>
  </header>
  <div class="content has-header">
    <!-- our list and list items -->
    <list>
      <list-item ng-repeat="task in tasks">
        {{task.title}}
      </list-item>
    </list>
  </div>
</pane>
{% endraw %}

```

But this doesn't do anything yet, because we don't have any todos or any code to drive our application. To do this, we need to create an Angular controller and add it to the page. We are going to just use one controller for this app, called `TodoCtrl`. We are going to add it directly to the body tag:

```html
<body ng-app="todo" ng-controller="TodoCtrl">
</body>
```

Then, we need to define this controller in our `app.js` file, and we can add some testing tasks in:

```javascript
angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ]
});
```

Run the example again, and we should see our list of very important tasks!

<img src="http://ionicframework.com.s3.amazonaws.com/guide/0.1.0/4-list.png" alt="List" style="border: 1px solid #ccc; border-radius: 4px;" alt="Running">

Okay, so we have some testing data for tasks, but what about creating and deleting or finishing them? We need some ways to do that. Working with our test data, let's add a simple Modal window that slides up, letting us put in a new task:

```html
<script id="new-task.html" type="text/ng-template">

  <div class="modal slide-in-up">

    <header class="bar bar-header bar-secondary">
      <h1 class="title">New Task</h1>
      <button class="button button-clear button-primary" ng-click="closeNewTask()">Done</button>
    </header>

    <content has-header="true">

      <form ng-submit="createTask(task)">
        <div class="list">
          <label class="item item-input">
            <input type="text" placeholder="What do you need to do?" ng-model="task.title">
          </label>
        </div>
        <div class="padding">
          <button type="submit" class="button button-full button-primary">Create Task</button>
        </div>
      </form>

    </content>

  </div>

</script>
```

There is a good amount of stuff in this Modal popup. First of all, we are defining this template as an Angular template using `<script type="text/ng-template">`. The cool thing about Angular templates is they can be loaded from anywhere: locally or remote. The URL of the template is the unique identifier, and if the template is defined locally, it will be fetched locally. Templates are a great way to separate layouts and UIs, so we use them extensively.

We then define the markup for the modal itself. Check out our docs for more examples of modals and different modal animations. This one will slide up from the bottom when shown.

We then set a header with a button to close the modal, and then set up our content area. For the form, we are calling `createTask(task)` when the form is submitted. The `task` that is passed to `createTask` is the object corresponding to the entered form data. Since our text input has `ng-model="task.title"`, that text input will set the `title` property of the `task` object.

In order to trigger the Modal to open, we need a button in the main header bar and some code to open the modal, the center content then becomes:

```html
  <!-- Center content -->
  <pane side-menu-content>
    <header class="bar bar-header bar-dark">
      <h1 class="title">ToDo</h1>
      <!-- New Task button-->
      <button class="button button-clear" ng-click="newTask()">New</button>
    </header>
    <!-- ... -->
```

And in our controller code:

```javascript
angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, Modal) {
  $scope.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ]

  // Create and load the Modal
  Modal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, $scope);

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push(task);
    $scope.taskModal.hide();
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  }
});
```
