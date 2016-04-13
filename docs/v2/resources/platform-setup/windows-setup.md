---
layout: v2_fluid/docs_base
category: resources
id: windows_setup
title: Ionic 2 Resources | Windows Platform Setup
header_title: Setting up Windows for development
header_sub_title: Ionic 2 Developer Preview
---

## Windows

There are two paths you can take to set up a Windows machine. One is installing all the dependencies one by one, and the other is installing the Tools for Cordova plugin for Visual Studio 2015. We go over the process of using the Visual Studio installer in [our blog](http://blog.ionic.io/visual-studio-tools-for-apache-cordova/).


### Common Tools

For the most part, Node and NPM are going to be used extensively for Ionic and Cordova. You can use the installer from [the Node website](https://nodejs.org) or [Chocolatey package manager](https://chocolatey.org)

Once installed, you should have access to both `node` and `npm` from your command line.


### iOS
The iOS SDK does not run on Windows, so nothing to do here. Still want to build for iOS, though? Check out [Package](http://ionic.io/platform#packaging), part of the Ionic Platform.

### Java
We'll need to download Java from [their website](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). The install puts Java in your `C:\Program Files\Java` folder, so navigate there and pick the version of Java you've installed. Copy this location (including the version number) as you'll need it for later.

### Android
Download Android Studio and go through the installer and set up the IDE. It should print out a location for where the Android SDK gets installed; copy this down for future use.

Next, inside the new `SDK` location, we'll run `tools/android` to open the Android SDK Manager. We'll want to install:

- Android Platform SDK for your targeted version of Android
- Android Platform-Tools
- Android SDK build-tools version 19.1.0 or higher
- Android Support Repository (found under "Extras")

Accept the license and let the packages install.

### Environment Variables
Now that everything's installed, we'll need to set some environment variables for our command line.
From the startmenu, search for "System Environment Variables". From here, we'll update the user variable `PATH` and create a new variable of `JAVA_HOME`

- `JAVA_HOME` : The path to where Java is installed.

- `PATH` : Two entries, one where Tools are installed for the Android SDK, and another for Platform tools


From here, we should be able to run

```bash
# check java version
java -version

# start android SDK manager
android
```

Now, you should be able to create and build an Android project from the command line.
### Windows Universal Apps

To build apps for Windows Universal, download and install Visual Studio 2015 Community Edition. During the installation, Select "Tools for Cross Platform Development" as well as the SDK for Windows Universal Apps.

With everything installed, you'll be able to add a windows platform from the command line with this command:

```bash
ionic platform add windows
```

By default the `build` command produces two packages: Windows 8.1 and Windows Phone 8.1, which Ionic does not support. To upgrade Windows package to version 10 the following configuration setting must be added to configuration file (config.xml).

```xml
<preference name="windows-target-version" value="10.0" />
```

