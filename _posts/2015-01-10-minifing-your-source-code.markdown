---
layout: post
title:  "Minifying Your App's Source Code"
date:   "2015-01-10  2:00:00"
categories: angularjs, ionic, ngCordova, framework, mobile
author: '<img src="https://pbs.twimg.com/profile_images/2653730816/5da4d8fb72352c715bbaffe07e56270e_400x400.jpeg"
class="author-icon"><a href="http://twitter.com/nraboy" target="_blank">Nic Raboy</a>'
published: false
---

*This is a guest post by [Nic Raboy](http://blog.nraboy.com/), an application developer with a strong background in
Android, AngularJS, Ionic, Java, SQL, and Unity3D. Nic writes often about Ionic and how to build great hybrid apps.*

Previously, I wrote about the importance of uglifying your Apache Cordova source code. If you read my [previous
post](https://blog.nraboy.com/2014/11/extract-android-apk-view-source-code/) you'll know that hybrid applications are
incredibly easy to decompile, so uglifying your code creates additional difficulty for any malicious user.

I also wrote a [generic post](https://blog.nraboy.com/2014/12/use-grunt-lint-uglify-javascript-project/) about how to use
the Grunt task runner to lint and uglify your code. However, using Grunt isn't the most ideal solution when it comes to
linting your Apache Cordova project for errors and uglifying your code.

In this guide, we're going to see how to efficiently lint and minify your Apache Cordova project before building. The
same information can be applied against [Phonegap](http://phonegap.com/) and [Ionic
Framework](http://www.ionicframework.com) projects, too.

Let's start by creating a fresh Apache Cordova Android and iOS project:

``` shell
cordova create TestProject com.nraboy.testproject TestProject
cd TestProject
cordova platform add android
cordova platform add ios
```

Note that if you're not using a Mac, you cannot add or build for the iOS platform.

This tutorial is going to be broken into two parts:

* Linting the project for JavaScript errors</li>
* Uglifying the code for obfuscation purposes</li>

Once you've run these steps, your project will be in much better shape.


### Linting the project for JavaScript errors

One of my subscribers recommended I check out [Cordova Linter](https://www.npmjs.com/package/cordova-linter) for this
task. I checked it out and couldn't figure out how to get it to work. It kept saying my project had no errors, when I
know it did. The package had no documentation to prove its process.

This is when I decided to create my own Apache Cordova hook. If you've read my [previous
post](https://blog.nraboy.com/2015/01/hooks-apache-cordova-mobile-applications/) regarding hooks, you should have a
general idea of what we're going to do.

Create **hooks/before_prepare/02_jshint.js**, and make sure to give it execute permissions if you're using Linux or Mac.
Based on the file title, you can probably guess we're going to use [JSHint](http://jshint.com/docs/) for linting. Open
**02_jshint.js**, and add the following code:

``` javascript
#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var jshint = require('jshint').JSHINT;
var async = require('async');

var foldersToProcess = [
    'js'
];

foldersToProcess.forEach(function(folder) {
    processFiles("www/" + folder);
});

function processFiles(dir, callback) {
    var errorCount = 0;
    fs.readdir(dir, function(err, list) {
        if (err) {
            console.log('processFiles err: ' + err);
            return;
        }
        async.eachSeries(list, function(file, innercallback) {
            file = dir + '/' + file;
            fs.stat(file, function(err, stat) {
                if(!stat.isDirectory()) {
                    if(path.extname(file) === ".js") {
                        lintFile(file, function(hasError) {
                            if(hasError) {
                                errorCount++;
                            }
                            innercallback();
                        });
                    } else {
                        innercallback();
                    }
                } else {
                    innercallback();
                }
            });
        }, function(error) {
            if(errorCount > 0) {
                process.exit(1);
            }
        });
    });
}

function lintFile(file, callback) {
    console.log("Linting " + file);
    fs.readFile(file, function(err, data) {
        if(err) {
            console.log('Error: ' + err);
            return;
        }
        if(jshint(data.toString())) {
            console.log('File ' + file + ' has no errors.');
            console.log('-----------------------------------------');
            callback(false);
        } else {
            console.log('Errors in file ' + file);
            var out = jshint.data(),
            errors = out.errors;
            for(var j = 0; j < errors.length; j++) {
                console.log(errors[j].line + ':' + errors[j].character + ' -> ' + errors[j].reason + ' -> ' +
errors[j].evidence);
            }
            console.log('-----------------------------------------');
            callback(true);
        }
    });
}
```

The above script will look at only the **www/js** directory, but feel free to add further directories. All
files in the directory will be looped through, and if they are JavaScript, the file will be fed into JSHint. If any
files contain errors, they will be presented to the screen, and then the script will stop all further processes. This
means that if you execute the script with `cordova build [platform]`, the application will not continue to build if errors are found.

**02_jshint.js** requires two NodeJS libraries in order to function. They can be installed like this from the root of
your project:

```
npm install jshint
npm install async
```

### Uglifying the code for obfuscation purposes

One of my other subscribers recommended I check out [Cordova Uglify](https://www.npmjs.com/package/cordova-uglify) for
the obfuscation process. Unlike Cordova Linter, this NPM package actually worked as advertised. From the root of your
Apache Cordova project, run the following command:

```
npm install cordova-uglify
```

When the installation completes, you should find that **hooks/after_prepare/uglify.js** was created. If you're on Linux
or Mac, you'll need to give it execute permissions; otherwise, it won't be picked up.

You can test that this script worked by running `cordova prepare` or `cordova build [platform]`.

### Conclusion

By default, Apache Cordova does not check your code for errors when building. This means you won't know if errors
exist in your code until you run your application. Linting your code can save you a lot of stress when it comes to
finding errors caused by typos or missing/extra brackets.

Your hard work is very easy to decompile by default, so it is a good idea to obfuscate your code by means of
uglification before you release your application.

Two videos for this article can be seen below.

https://www.youtube.com/watch?v=qQiYE6x7cFk

https://www.youtube.com/watch?v=hoy3MESySWQ

