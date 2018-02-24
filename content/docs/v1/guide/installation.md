---
layout: docs_guide
title: "Installing Ionic and its Dependencies"
chapter: installation
---

Previous: <a href="preface.html">All About Ionic</a>

# Chapter 2: Installation

In this chapter, we are going to walk through the process of downloading Ionic and installing all necessary dependencies for development.

## Platform notes

First, we need to start with a note about minimum requirements for building your app with the current release of Ionic. Ionic targets iPhone and Android devices (currently). We support iOS 7+, and Android 4.1+. However, since there are a lot of different Android devices, it's possible certain ones might not work. As always, we are looking for help testing and improving our device compatibility and would love help from the community on our [GitHub](https://github.com/ionic-team/ionic) project.

You can develop Ionic apps on any operating system you prefer. In fact, Ionic has been developed at various times on Mac OS X, Linux, and Windows. However, right now you'll need to use the command line in order to follow this guide and you must have OS X in order to develop and deploy iPhone apps, so OS X is recommended if possible.

If you are on Windows, make sure to download and install [Git for Windows](http://git-scm.com/download/win) and optionally [Console2](http://sourceforge.net/projects/console/). You will be executing any commands in this guide in the Git Bash or Console2 windows.

First, we will go and install the most recent version of [Apache Cordova](http://cordova.apache.org/), which will take our app and bundle it into a native wrapper to turn it into a traditional native app.

To install Cordova, make sure you have [Node.js](http://nodejs.org/) installed, then run

    $ sudo npm install -g cordova

Drop `sudo` from the above command if running on Windows. Depending on the platforms you wish to develop for, you'll need to install platform-specific tools. Follow the Cordova platform guides for [Android](http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html) and [iOS](http://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html) to make sure you have everything needed for development on those platforms. Luckily, you'll only need to do this once.

<button type="button" class="btn btn-danger btn-sm" data-toggle="collapse" data-target="#android-linux-note">
  Linux Android note
</button>

<div id="android-linux-note" class="collapse well">
<p>
  If you are running a 64-bit version of Ubuntu, you'll need to install the 32-bit libraries since Android is only 32-bit at the moment.
  <code>$ sudo apt-get install ia32-libs</code>
  If you are on Ubuntu 13.04 or greater, `ia32-libs` has been removed. You can use the following packages instead:
  <code>$ sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0</code>
</p>
<p>If you are running 64-bit version of Fedora you'll need to install some 32-bit packages:
  <code>$ sudo yum install -y glibc.i686 glibc-devel.i686 libstdc++.i686 zlib-devel.i686<br/>
  ncurses-devel.i686 libX11-devel.i686 libXrender.i686 libXrandr.i686</code>
</p>
</div>

<button type="button" class="btn btn-danger btn-sm" data-toggle="collapse" data-target="#java-note">
  Windows note on Java, Ant and Android
</button>

<div id="java-note" class="collapse well">
<p>
Windows users developing for Android: You'll want to make sure you have the following installed and set up.
</p>
<p>
<em>NOTE: Whenever you make changes to the PATH, or any other environment variable, you'll need to restart or open a new tab in your shell program for the PATH change to take effect.</em>
</p>
<p>
<strong>Java JDK</strong>
</p>
<p>
Install the most recent <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">Java 8 JDK</a> (NOT just the JRE), JDK 9 is NOT currently (2017.12) supported by Cordova.
</p>
<p>
Next, create an environment variable for <code>JAVA_HOME</code> pointing to the root folder where the Java JDK was installed. So, if you installed the JDK into <code>C:\Program Files\Java\jdk7</code>, set <code>JAVA_HOME</code> to be this path. After that, add the JDK's <code>bin</code> directory to the PATH variable as well. Following the previous assumption, this should be either <code>%JAVA_HOME%\bin</code> or the full path <code>C:\Program Files\Java\jdk7\bin</code>
</p>
<p>
<strong>Apache Ant</strong>
</p>
<p>
To install Ant, download a zip from <a href="http://ant.apache.org/bindownload.cgi">here</a>, extract it, move the first folder in the zip to a safe place, and update your PATH to include the <code>bin</code> folder in that folder. For example, if you moved the Ant folder to <code>c:/</code>, you'd want to add this to your PATH: <code>C:\apache-ant-1.9.2\bin</code>.
</p>
<p>
<strong>Android SDK</strong>
</p>
<p>Installing the <a href="http://developer.android.com/sdk/index.html">Android SDK</a> is also necessary. The Android SDK provides you the API libraries and developer tools necessary to build, test, and debug apps for Android.
</p>
<p>
Cordova requires the ANDROID_HOME environment variable to be set. This should point to the <code>[ANDROID_SDK_DIR]\android-sdk</code> directory (for example <code>c:\android\android-sdk</code>).
</p>
<p>
Next, update your PATH to include the <code>tools/</code> and <code>platform-tools/</code> folder in that folder. So, using ANDROID_HOME, you would add both <code>%ANDROID_HOME%\tools</code> and <code>%ANDROID_HOME%\platform-tools</code>.
</p>
</div>

## Install Ionic

Ionic comes with a convenient command line utility to start, build, and package Ionic apps.

To install it, simply run:

```bash
$ sudo npm install -g ionic
```

## Create the project

Now, we need to create a new Cordova project somewhere on the computer for the code for our app:

    $ ionic start todo blank --type ionic1

That will create a folder called `todo` in the directory the command was run. Next, we will go into that directory and list the contents. Here is what the outer structure of your Ionic project will look like:

    $ cd todo && ls

    ├── bower.json     // bower dependencies
    ├── config.xml     // cordova configuration
    ├── gulpfile.js    // gulp tasks
    ├── hooks          // custom cordova hooks to execute on specific commands
    ├── ionic.project  // ionic configuration
    ├── package.json   // node dependencies
    ├── platforms      // iOS/Android specific builds will reside here
    ├── plugins        // where your cordova/ionic plugins will be installed
    ├── scss           // scss code, which will output to www/css/
    └── www            // application - JS code and libs, CSS, images, etc.

If you are planning on using any version control system, you can go ahead and set it up in this new folder.

## Configure Platforms

Now, we need to tell ionic that we want to enable the iOS and Android platforms. Note: unless you are on MacOS, leave out the iOS platform:

```bash
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

If you see errors here, make sure to follow the platform guides above to install necessary platform tools.

<button type="button" class="btn btn-danger btn-sm" data-toggle="collapse" data-target="#osx-android-note">
  Android on OS X note
</button>

<div id="osx-android-note" class="collapse well">
<p>
  If you get this error: <code>[Error: ERROR : Make sure JAVA_HOME is set, as well as paths to your JDK and JRE for java.]</code> Then try running this command first before adding the android platform:
</p>
<p>
  <code>$ export JAVA_HOME=$(/usr/libexec/java_home)</code>
</p>
</div>

## Test it out

Just to make sure the default project worked, try building and running the project (substitute ios for android to build for Android instead):

```bash
$ ionic cordova build ios
$ ionic cordova emulate ios
```

<button type="button" class="btn btn-danger btn-sm" data-toggle="collapse" data-target="#android-emulator-note">
  Android emulator note
</button>

<div id="android-emulator-note" class="collapse well">
<p>
  We don't recommend using "emulate" for Android development. Unfortunately, the default Android emulator is horribly slow and will not accurately represent
a real device. Using the emulator isn't even recommended for native Android development.
</p>
<p>
  Fortunately, there are some great alternatives out there. Our favorite is a tool called <a href="http://genymotion.com/">Genymotion</a> which can run an Android device as a virtual machine on your computer. It's much faster! If you use Genymotion, you'll use <code>ionic cordova run</code> instead of <code>ionic cordova emulate</code> as a Genymotion image appears as a physical device to the operating system.
</p>
<p>
If you chose to emulate on Android, be patient as this takes several minutes as the Android emulator is booted up. If you don't see anything happen for a few minutes, make sure you've created an Android Virtual Device (AVD), and that it is using the Android SDK version 17 or above. You might have to <a href="http://stackoverflow.com/questions/7222906/failed-to-allocate-memory-8">reduce the amount of memory</a> the AVD is using if you don't see the emulator boot up in a minute. The platform guide above has more information. You may also want to double check that you have the sdk and platform tools in your PATH as noted in the platform guide.
</p>
<p>

The emulator takes a LONG time to boot. After about 5 or 10 minutes, you should see the default Cordova app running in the emulator:

<img src="https://ionicframework.com.s3.amazonaws.com/guide/0.1.0/1-emulator.jpg" alt="Android Emulator">
</p>
<p>
Of course, you can always test directly on the device, and that is the recommended way to develop on Android due to the slow emulator. To do that,
substitute <code>emulate</code> with <code>run</code> and ensure you have an Android device connected to the computer.
</p>
</div>

## Let's go!

Now we are ready to start building our app, so continue on to the next chapter:

[Chapter 3: Starting your app](starting.html)
