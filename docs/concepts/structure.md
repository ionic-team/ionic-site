---
layout: docs_concepts
title: "Ionic Concepts - App Structure"
header_title: Ionic Concepts
header_sub_title: The bigger picture of an Ionic App
---

### Structure
Ionic apps are built with Cordova. Cordova is a means of packaging html/css/js into apps that can run on mobile and desktop devices and provides a plugin architecture for accessing native functionality beyond the reach of JS run from a web browser. As such, Ionic apps have the Cordova file structure. 

The `platforms` directory contains your iOS and Android projects. In general, you don’t need to work in these directories unless you're doing custom native hacking or possibly sending your app to production.

`hooks` is for custom actions to be taken as your app moves through the Cordova development process. It may be useful for larger projects that require automated processes to run and source code modification but will normally be unused. 

'merges' is to override files for specific platforms. Say you have `merges/ios/someFile.js` and `www/someFile.js`. When deploying to iOS, someFile will be replaced by the version in merges. It can be an effective way to create platform-specific modifications to your app, but other methods are often preferred. See Cross Platform Development for more on
this topic.

Plugins are where Cordova stores the plugins that you add to your project. Plugins are added by the command:

```bash
ionic plugin add {plugin}
```

Where {plugin} is the plugin’s ID or github URL. 

SCSS is for your app’s SASS file. Using SASS is optional in Ionic, but Ionic itself is built with SCSS, and there are many default styles you can change to quickly and cleanly customize Ionic without adding a myriad of CSS overrides. 

WWW is where your app is developed and where you’ll spend most of your time when building an Ionic app.

How you should organize your app’s file structure is debatable, and with practice, you’ll find a structure that works best for you. By default, Ionic organizes your app in to a series of directories: css, img, js, lib, and templates. 

CSS contains either your app’s specific CSS file, or your SCSS generated output file, should you use it, along with any other CSS files you wish to add. CSS is added to your project by a `<link>` tag in your index.html

IMG is pretty self explanatory; put your images there.

JS gets more complicated. By default, our starter apps are broken up into 
app.js, which contains your Angular run and config methods. This is where you define your app’s routing and environmental variables, like what kind of tab style to use, or whether you should use iOS style headers on Android.

controllers.js contains your Angular controllers for the states that require them. services.js is not always included in the starters, but it contains the custom Angular services your app may use, such as one that calls out to a 3rd party API to get information your app uses.  

directives.js is not always included in the starters, but it contains custom Angular directives that your app may use. There’s no magic to these files and their names; you are free to modify these file names and structure as you see fit. JS files must be added to your project’s index.html, and Angular modules must be added to your Angular app definition. 


LIB is where Ionic and any other libraries you use can be placed. It follows the Bower formatting, and new libs can be added and updated using Bower. If you do not use Bower, you can modify the structure of this directory as you see fit or even remove it entirely, as long as you copy the Ionic files to a new location in your project. 

TEMPLATES is where your view files go. Your project does have a main index.html file in the WWW directory, but your app likely contains many template views that are added dynamically. Unlike your CSS and JS files, TEMPLATE files do not need to be mentioned in your index.html file. You define them in your `$state` definition, and UI Router and Ionic will take care of the rest, including pre-loading the template file. These files are Angular templates and are parsed before being added to the DOM.


As you develop your app, you may feel that this structure is no longer appropriate. It may make sense to separate your app in to logical chunks. Maybe you have a product list, product search, and user section of your app. It may be appropriate to break your app up in to folders for each section, and each would have their own controller and template files. This is recommended only for developers who are comfortable making these organizational changes and understand that they will deviate from most basic app examples going forward. A great guide to follow is from [John Papa's Angular Application Structure](http://www.johnpapa.net/structuring-an-angular-project/).

Your Ionic app is, at its heart, an Angular app, so when it comes to figuring out how to accomplish user interaction and communicate data throughout your app and to external sources, many of the same rules apply. Angular has an MVVM architecture where your controller’s inject a `$scope` object. This object’s properties are available to your template, and your template will update automatically as you change $scope property values. With 2-way data binding, input fields can also be bound, and updates to the input are automatically available to your controller’s $scope object.

Controllers may be deactivated or destroyed as you navigate away from a given page, and one controller does not have direct access to previous view’s controller. Data can be shared between pages in a number of ways, however. The most appropriate way is usually through Angular’s model implementation, services. Services are singletons, and their local vars and state will persist as you navigate from page to page. Services can be injected into your app in the same way $scope is. This dependency injection is a fundamental concept to Angular and building large, complex apps. Note that services themselves can inject other services. This way you can cleanly abstract large, complicated data management processes. Ionic provides many services like $loading, $actionSheet, and various delegate services. Angular itself has several services. Possibly the most common service is $http for making ajax calls to remote services. 

Directives are a way of extending HTML’s capabilities. When you see things like `<ion-view>` or `<ion-tabs>`, these custom HTML elements are directives. Creating custom directives can take a while to master, but used correctly, they can greatly reduce unnecessary complexity and duplicated code. 
