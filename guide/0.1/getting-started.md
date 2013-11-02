---
layout: guide
title: "Getting Started with Ionic Framework"
---

# Chapter 1: Getting Started with Ionic

In this first chapter, we are going to walk through the process of downloading Ionic and installing all necessary dependencies for development.

First, we need to start with a note about minimum requirements for building your app with the current release of Ionic. For the first releases, Ionic only works on recent iPhone and Android devices. We support iOS 6+, and Android 4.2+. However, since there are a lot of different Android devices, it's possible certain ones might not work. As always, we are looking for help testing and improving our device compatibility and would love help from the community on our [GitHub](https://github.com/driftyco/ionic) project.

You can develop Ionic apps on any operating system you prefer. In fact, Ionic has been developed at various times on Mac OS X, Linux, and Windows. However, right now you'll need to use the command line in order to follow this guide and you must have OS X in order to develop and deploy iPhone apps, so OS X is recommended if possible.

If you are on Windows, make sure to download and install [Git for Windows](http://git-scm.com/download/win) and optionally [Console2](http://sourceforge.net/projects/console/). You will be executing any commands in this guide in the Git Bash or Console2 windows.

First, we will go and install the most recent version of [Apache Cordova](http://cordova.apache.org/), which will take our app and bundle it into a native wrapper to turn it into a traditional native app. There are other possible tools you could use instead of Cordova, including [PhoneGap](http://phonegap.com/) proper (the Adobe version of Cordova that has some additional Adobe service bundled in), [Trigger.io](https://trigger.io/), or a custom solution.

To install Cordova, make sure you have [Node.js](http://nodejs.org/) installed, then run

    $ sudo npm install -g cordova

Then, we can go download the [most recent release](https://github.com/driftyco/ionic/releases) of Ionic. It is not recommended to clone the repo for production apps
unless you want to live on the bleeding edge.

Once you have the most recent release of Ionic, extract it anywhere you like on your computer. We are only going to be needing some of the files for our app, specifically the ones in the `dist/` folder, and possibly the ones in the `scss/` folder for more advanced usage (more on that later). For the sake of getting started, we will start with the most basic usage of Ionic.

Now, we need to create a new Cordova project somewhere on the computer for the code for our app:

    $ cordova create hello com.ionic.hello HelloWorld 

That will createa folder called `hello` in the directory the command was run. Next, we will change into that directory:

    $ cd hello

If you are planning on using any version control system, you can go ahead and set it up using this new folder. For new apps, follow this folder structure to get up and running quickly:

Go ahead and copy the `dist/` files from the Ionic code (in `IONIC_PATH` below) we extracted above into the various `www/*` folders inside of the hello folder:

    max@ionic:~/hello$ cp IONIC_PATH/dist/js/* www/js/
    max@ionic:~/hello$ cp -R IONIC_PATH/dist/css/* www/css/
