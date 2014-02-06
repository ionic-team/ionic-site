---
layout: post
title: "Build a Mobile App on Nitrous.IO with Ionic Framework, Firebase, and PhoneGap"
date:   "2013-12-18 14:00:00"
categories: ionic
author: 'A community post by <img src="http://www.gravatar.com/avatar/38543d631e009559d7630877856991ca?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/gmckeever" target="_blank">@gmckeever</a> of <a href="http://nitrous.io">Nitrous.IO</a>, provider of fast dev environments in the cloud<br>'
published: true
---

![Mobile App using Ionic, Firebase, and PhoneGap Build](/img/blog/nitrous/todo-app-main.jpg)

Looking to build a mobile app with the Ionic Framework? This guide quickly covers how to build a native Android app on [Nitrous.IO](http://www.nitrous.io) with [PhoneGap Build](http://build.phonegap.com/). You will also learn how to use [Firebase](https://www.firebase.com/index.html) to connect your app to [Firebase](https://www.firebase.com/index.html) for a backend service. All of these services provide a free tier, so you can try this out without dropping a dime.

### Prerequisites

Before we get started, make sure you have the following:

* A Node.JS box on [Nitrous.IO](http://www.nitrous.io)
* A [Github account](http://www.github.com) which is [connected](http://help.nitrous.io/github-add-key/) to your Node.JS box
* A [PhoneGap Account](https://build.phonegap.com/plans)

<!-- more -->

### Create a Node.JS box on Nitrous.IO

If you haven't already, sign up at [Nitrous.IO](http://www.nitrous.io) and create a Node.JS box.

![Nitrous.IO creating Node.JS box](/img/blog/nitrous/nitrous-create-node-box.png)

Once your Node.JS box is created you will need to [connect](http://help.nitrous.io/github-add-key/) it to your Github account. This will add a Public SSH key so you may update repos from Nitrous.

### Get Started with Ionic Framework

To get started with the [Ionic Framework](http://ionicframework.com/), we will build a Todo app. Although the [Ionic guide](http://ionicframework.com/docs/guide/installation.html) goes into detail with building the initial app, this article provides you with the app ready to clone from Github.

Cd into `~/workspace/` and run the following command in your console to clone the starter project into `/myproject`:

    git clone git@github.com:nitrous-examples/ionic-todo.git myproject

cd into the `~/workspace/myproject` folder, and from there run the app within the Nitrous box with Python (yes, Python along with other tools and interpreters are already installed on Node.JS boxes):

    cd myproject
    python -m SimpleHTTPServer 4000

You can view the app by navigating to **Preview > Port 4000** in the Nitrous.IO web IDE menu bar:

![Preview Port 4000](/img/blog/nitrous/preview-port-4000.png)

### Create a New Repository at Github

[Create a new repo](https://github.com/new) at Github for this project.

Once the project is created on Github, you should see the following page with your repo URI as well as some instructions on the next steps.

![Github new project](/img/blog/nitrous/github-new-project.png)

Make note of your HTTP URI at the top of the page. You will want to push your existing project from Nitrous to this location. Navigate within the console to `~/workspace/myproject` and modify your git remote to point to the new repo:

    git remote set-url origin git://YOUR-NEW.HTTP-URL.HERE

Push the Ionic starter project files to the repository by running the following command:

    git push -u origin master

Your project should now be found in the Github repo.

### Host the App with PhoneGap Build

Now, let's setup PhoneGap Build. First you will need to sign up at [https://build.phonegap.com/](https://build.phonegap.com/).

![Signup with PhoneGap](/img/blog/nitrous/phonegap-signup.png)

You can login with your existing Github account to make connecting to your repo easier, but if you login with your Adobe ID then then you will have to manually paste in your Github project repo URI. 

Once logged in, create a new app and select the Github repo we just created. Once this has been added, select **Build App** as seen below:

![Signup with PhoneGap](/img/blog/nitrous/phonegap-build-app.png)

This should only take a minute to build. Once ready you will have instant access to download the app for Android, Windows Mobile, WebOS, or Symbian. 

>If you are working with iOS in developer mode, you must provide a signing key before downloading the app.

To download the APK for Android, click the android logo seen below. You can also click the preview page if you wish to scan the QR code on your phone for an instant download.

![PhoneGap Download App](/img/blog/nitrous/phonegap-download-android-app.png)

>Note: To allow 3rd party apps to be install on Android 4.2+, open your `Settings` and enable the option `Security > Unknown Sources`.

Click on the downloaded APK file and install the app. Click the app icon once installed.

![Starter App](/img/blog/nitrous/todo-app-android.jpg)

The tasks will save to your phone locally, but you will not be able to sync the data elsewhere. In order to create a more robust app which can read and write to a database, we will need to connect to [Firebase](https://www.firebase.com/index.html).

![Ionic App](/img/blog/nitrous/ionic-create-new-task.png)

### Setting up Firebase for a Backend Service

At this point you will notice that the app is static, and that there is no real functionality to it. Since the Ionic Framework utilizes AngularJS, we will be easily able to easily connect to [Firebase](https://www.firebase.com/index.html) using [AngularFire](http://angularfire.com/).

![Firebase](/img/blog/nitrous/firebase-homepage.png)

[Firebase](https://www.firebase.com/index.html) provides a backend service which saves you the time of setting up your own backend server. [Sign up](https://www.firebase.com/signup/) for a new account and create a Firebase instance. Remember the name of your Firebase which you create as we will be referencing it later (you can find your Firebase instance on the [account overview](https://www.firebase.com/account/) page).

### Connecting to Firebase with AngularFire

[AngularFire](http://angularfire.com/) is a AngularJS binding for [Firebase](http://www.firebase.com), which allows us to connect our app to a backend service. Let's get started with setting up AngularFire.

Include Firebase and AngularFire to your project by adding the following lines within the `<head>` section of your `index.html` file:

    <!-- Firebase and AngularFire Extensions -->
    <script src='https://cdn.firebase.com/v0/firebase.js'></script>
    <script src="https://cdn.firebase.com/libs/angularfire/0.5.0-rc1/angularfire.js"></script>

### Updating the Controller for Firebase

Before integrating with [Firebase](https://www.firebase.com/index.html), we utilized local data only to store values. In this next section we are going to add Firebase as a dependency to the app module, and we will also update the controller to connect to Firebase.

Update the code in `www/js/app.js` and `www/index.html` with the corresponding code, replacing the two Firebase URL's (https://YOUR_FIREBASE_NAME.firebaseio.com) with the Firebase URL you created:


### app.js
{% highlight javascript %}
angular.module('todo', ['ionic','firebase'])
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
.factory('Projects', function() {
  return {
    all: function() {
      var projectString = window.localStorage['projects'];
      if(projectString) {
        return angular.fromJson(projectString);
      }
      return [];
    },
    save: function(projects) {
      window.localStorage['projects'] = angular.toJson(projects);
    },
    newProject: function(projectTitle) {
      // Add a new project
      return {
        title: projectTitle,
        tasks: []
      };
    },
    getLastActiveIndex: function() {
      return parseInt(window.localStorage['lastActiveProject']) || 0;
    },
    setLastActiveIndex: function(index) {
      window.localStorage['lastActiveProject'] = index;
    }
  }
})

.controller('TodoCtrl', function($scope, $firebase, $timeout, Modal, Projects) {

  $scope.projectsList = {};
  $scope.user = {};
  // Load or initialize projects
  $scope.projectsList = $firebase(new Firebase("https://YOUR_FIREBASE_NAME.firebaseio.com/projects"));
  $scope.user = $firebase(new Firebase("https://YOUR_FIREBASE_NAME.firebaseio.com/Users/John"));

  $scope.projectsList.$on("loaded", function() {
      console.log($scope.projectsList);
      window.projectsList = $scope.projectsList;
  });

  $scope.projectsList.$on("loaded", function() {
      console.log($scope.user);
      window.user = $scope.user;
  });
  
  // A utility function for creating a new project
  // with the given projectTitle
  var createProject = function(projectTitle) {
      $scope.projectsList[projectTitle] = [];
      $scope.projectsList.$save(projectTitle);
      $scope.selectProject(projectTitle);
  }

  // Called to create a new project
  $scope.newProject = function() {
      var projectTitle = prompt('Project name');
      if(projectTitle) {
          createProject(projectTitle);
      }
  };

  // Called to select the given project
  $scope.selectProject = function(project) {
      $scope.user.lastproject = project;
      $scope.sideMenuController.close();
  };

  // Create our modal
  Modal.fromTemplateUrl('new-task.html', function(modal) {
      $scope.taskModal = modal;
  }, {
      scope: $scope
  });

  $scope.createTask = function(task) {
      if(!$scope.user.lastproject) {
          return;
      }

      var name = $scope.user.lastproject;
      $scope.projectsList[name].push(task.title);
      $scope.projectsList.$save(name);
      $scope.taskModal.hide();

      task.title = "";
  };

  $scope.newTask = function() {
      $scope.taskModal.show();
  };

  $scope.closeNewTask = function() {
      $scope.taskModal.hide();
  }

  $scope.toggleProjects = function() {
      $scope.sideMenuController.toggleLeft();
  };

});
{% endhighlight %}

### index.html
{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Todo</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">

    <link rel="stylesheet" href="css/ionic.css">

    <script src="js/ionic.js"></script>
    <script src="js/ionic-angular.js"></script>

    <!-- AngularFire Extensions -->
    <script src='https://cdn.firebase.com/v0/firebase.js'></script>
    <script src="https://cdn.firebase.com/libs/angularfire/0.5.0-rc1/angularfire.js"></script>

    <!-- Needed for Cordova/PhoneGap -->
    <!--<script type="text/javascript" src="cordova.js"></script>-->
    <script src="js/app.js"></script>

  </head>
  <body ng-app="todo" ng-controller="TodoCtrl">
<side-menus>

    <!-- Center content -->
    <pane side-menu-content>
        <header class="bar bar-header bar-dark">
            <button class="button button-icon" ng-click="toggleProjects()">
                <i class="icon ion-navicon"></i>
            </button>
            <h1 class="title">{{user.lastproject}}</h1>
            <!-- New Task button-->
            <button class="button button-clear" ng-click="newTask()">
                New
            </button>
        </header>
        <content has-header="true" scroll="false">
            <list>
                <item ng-repeat="task in projectsList[user.lastproject]">
                    {{task}}
                </item>
            </list>
        </content>
    </pane>

    <!-- Left menu -->
    <side-menu side="left">
        <header class="bar bar-header bar-dark">
            <h1 class="title">Projects</h1>
            <button class="button button-icon" ng-click="newProject()">
                <i class="ion ion-plus"></i>
            </button>
        </header>
        <content has-header="true" scroll="false">
            <list>
            <item ng-repeat="(name, project) in projectsList" ng-click="selectProject(name)" ng-class="{active: user.    lastproject == project}">
                    {{name}}
                </item>
            </list>
        </content>
    </side-menu>


    <script id="new-task.html" type="text/ng-template">

        <div class="modal">

            <!-- Modal header bar -->
            <header class="bar bar-header bar-secondary">
                <h1 class="title">New Task</h1>
                <button class="button button-clear button-primary" ng-click="closeNewTask()">Cancel</button>
            </header>

            <!-- Modal content area -->
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

</side-menus>
</body>
</html>
{% endhighlight %}

(note: if using the most recent version of Ionic, you'll need to also include the AngularJS dependencies seen in the [seed project](https://github.com/driftyco/ionic-angular-cordova-seed/blob/master/www/index.html))

### Testing the App

You should now be able to run the app while utilizing Firebase for a backend service. Within the main project folder, run the python command again to start the app on your Nitrous box:

    python -m SimpleHTTPServer 4000

Navigate in your Nitrous.IO web IDE menu bar to **Preview > Port 4000** to view the app again:

![Preview Port 4000](/img/blog/nitrous/preview-port-4000.png)

Try adding some sample data into your app. When the tasks save you should see the changes reflect in your Firebase account. Take a look at your Firebase URL (https://YOUR_FIREBASE_NAME.firebaseio.com/) within the browser to see similar data as seen in the screenshot below.

![Firebase Data](/img/blog/nitrous/firebase-data.png)

### Updating the App in PhoneGap

In order to update the code for your app you will need to first push the changes to Github. Run the following commands within the project folder in your console:

    git add .
    git commit -m "Integrated Firebase with AngularFire"
    git push origin master

You can now simply click 'update' in your PhoneGap account to pull the latest changes from your Git repo, and from there click 'rebuild' to generate a new build for your app.

![Update PhoneGap](/img/blog/nitrous/update-phonegap.png)

Uninstall any existing Todo app you have on your phone and download the latest version. You now have a todo list which syncs with Firebase.

![Ionic Android App](/img/blog/nitrous/ionic-todo-app.png)

### The Next Steps

If you are looking to publish the App within the Google Play store, or are looking for a more in depth explanation on some of the code, follow the [Ionic Framework Guide](http://ionicframework.com/docs/guide/preface.html) and take note of the [publishing section](http://ionicframework.com/docs/guide/publishing.html).

Visit the [forums](http://forum.ionicframework.com/) to connect with other developers, or ask questions related to the Ionic Framework. If you are looking for an API reference for utilizing mobile phone functionality, take a look at the [PhoneGap documentation](http://docs.phonegap.com/en/3.2.0/index.html).

How did it go for you? If you have any sample apps you wish to share, free free to let the Nitrous.IO team know via [twitter](http://www.twitter.com/nitrous.io) as we would love to take a look!

