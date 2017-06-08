---
layout: fluid/docs_base
category: resources
id: mac_setup
title: Ionic Resources | OSX Platform Setup
header_title: Setting up a Mac for development
header_sub_title: Ionic Developer Preview
---

## OSX

### Common Tools

For the most part, Node and NPM are going to be used extensively for Ionic and Cordova. You can use the installer from [the Node website](https://nodejs.org) or various package managers.

- [n](https://github.com/tj/n)
- [nvm](https://github.com/creationix/nvm)
- [homebrew](http://brew.sh)

Once installed, you should have access to both `node` and `npm` from your command line.


### iOS
You'll want to install Xcode from Apple. You can either do this from the Mac App store or from Apple's Developer portal. The Mac App store is the easiest approach. Once Xcode is installed, you'll have Xcode, the iOS SDK, Xcode command line tools, and all the build tools to output a native app.

### Java
You'll need to download and install Java from [their website](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

### Android
Download [Android Studio](https://developer.android.com/studio/) and go through the installer and set up the IDE. It should print out a location for where the Android SDK gets installed. Copy this down for future use.

Next, inside the new `SDK` location, we'll run `tools/android` to open the Android SDK Manager. We'll want to install:

- Android Platform SDK for your targeted version of Android
- Android Platform-Tools
- Android SDK build-tools version 19.1.0 or higher
- Android Support Repository (found under "Extras")

Accept the license and let the packages install.

### Gradle
If you install the Android SDK without ANdroid Studio you have to install Gradle seperatly. Download Gradle from the offical [Gradle website](https://gradle.org/)

### Environment Variables
Now that everything's installed, we'll need to set some environment variables for our command line. Open your terminal and enter the following:

```bash
touch ~/.bash_profile
```

Then open that file in your favorite editor.

```bash
# Opens with TextEdit
open -a TextEdit ~/.bash_profile
```

From here, we'll need to add a few lines. These are the reference to Java and the Android SDK location we copied down earlier.

If you've used the paths suggested, you should have something like this.


```bash
  # Create a JAVA_HOME variable, determined dynamically
  export JAVA_HOME=$(/usr/libexec/java_home)
  # Add that to the global PATH variable
  export PATH=${JAVA_HOME}/bin:$PATH
  # Set Android_HOME
  export ANDROID_HOME=~/Library/Android/sdk/
  # Add the Android SDK to the ANDROID_HOME variable
  export PATH=$ANDROID_HOME/platform-tools:$PATH
  export PATH=$ANDROID_HOME/tools:$PATH
  #Set GRADLE_HOME
  export GRADLE_HOME=/Library/gradle/gradle-3.2
  export PATH=$PATH:$GRADLE_HOME/bin
```

Apply these changes by re-sourcing .bash_profile

```bash
  source ~/.bash_profile
```

From here, we can quit the terminal and then start it back up again. If there are no errors, you should be able to run

```bash
# check java version
java -version

# start android SDK manager
android
```

Now, you should be able to create and build an Android project from the command line.
