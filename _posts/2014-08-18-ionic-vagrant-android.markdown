---
layout: post
title:  "Faster Hybrid Dev with Ionic Box"
date:   "2014-08-18 13:00:00"
categories: ionic, angularjs, android
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
searchable: true
published: true
---

<img class="showcase-image" src="/img/blog/ionicbox-header.png">

We know that one of the biggest pain points in hybrid development with Ionic, Cordova, and Android is just getting everything installed and configured on your machine. It hurts us to watch new developers fumble with the dependencies required for doing mobile development.

It's especially bad for Windows users that often have very diverse installations and inconsistent access to a Unix-style command line where tools like Node.js (used by Ionic and Cordova) thrive.

So today we are relieved to announce we've created a solution to the nightmare that is dependency installation: [Ionic Box](http://github.com/driftyco/ionic-box), an all-in-one project for setting up hybrid development environments more quickly and easily.

<!-- more -->

The first version of Ionic Box uses Vagrant to set up a virtual machine for you to develop through. If you aren't familiar with [Vagrant](https://www.vagrantup.com/), it's a tool to create reusable development environments through the use of virtual machines, most commonly through [VirtualBox](https://www.virtualbox.org). That means you can configure a Virtual Machine complete with all the tools you need to start building hybrid or native-only apps with Android and Cordova.

To use this project, download the [most recent release](https://github.com/driftyco/ionic-box) of the code, unzip it, and then open up your command prompt or terminal and `cd` into the extracted folder.

Assuming you have Vagrant and VirtualBox installed, all you need to do us run `vagrant up` and the machine will download and configure itself. It takes a bit of time at first, but it's all automated and only needs to be done once.

Once the image is built and running, you can run `vagrant ssh` to connect to the image where you have a full development environment ready to go, including support for testing on a USB connected Android device! Configure shared directories to share code from your host computer to the vagrant guest, and it'll feel just like home.

So give this project a try, and let us know what you think! This is the first release and we will be evolving this over time as we learn how people use it in the wild.

[Ionic Box](https://github.com/driftyco/ionic-box)
