---
layout: post
title:  "HTTPS for the Ionic and Ionicons CDN"
date:   "2014-09-11 10:00:00"
hide_date: false
categories: ionic
author: '<img src="https://pbs.twimg.com/profile_images/495587171332403200/tO9oMmCn.png" class="author-icon"><a href="https://twitter.com/mhartington">Mike</a>'
published: true
---

Ionicons have become incredibly popular, so much so that they actually account for a majority of our content delivery network (CDN) traffic. But what if you wanted to load the icons as part of a checkout page? For security reasons, that checkout page is being loaded over HTTPS, but Ionicons are still on HTTP. You would either have to host the icons yourself, or give up on using these great icons (if we do say so ourselves) on your page.

With this in mind and with help from the  awesome people at [MaxCDN](http://www.maxcdn.com/), we are thrilled to announce that our CDN can now be loaded over HTTPS!

<!-- more -->

Having our CDN server over HTTPS is a huge benefit these days. With many sites using HTTPS over regular HTTP, Codepen being one of them, Ionic’s CSS and JS were getting blocked. You more than likely experienced this in the forums, where demos appeared to be broken. Now that is a thing of the past!

With both `http` and `https` supported, we also recommend using [Protocol-relative URLs](http://www.paulirish.com/2010/the-protocol-relative-url/) to ensure `https` is only used when needed. Now that secure checkout page from earlier can be adorned with as many Ionicons as needed and will load without any issues. Oh, happy day!

One thing to keep in mind: It’s best to use your own local copies of the framework's files when building a Cordova/Phonegap hybrid app. These CDN files are provided for archived versions, online tutorials, demos, examples, etc.

###Parting Words
Ionic’s secure CDN is now live, and we encourage all users to reference our files using the protocol relative URLs. This includes our CSS, JS, and Ionicons! Again, we’d also like to thank the good people of [MaxCDN](http://www.maxcdn.com/) for providing a lighting-fast CDN for the [open source community](http://www.maxcdn.com/open-source/).

Ionic CDN Links:

- [Ionicons v1.5.2](https://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css)
- [Ionic CSS v1.0.0-beta.12](https://code.ionicframework.com/1.0.0-beta.12/css/ionic.min.css)
- [Ionic JS v1.0.0-beta.12](https://code.ionicframework.com/1.0.0-beta.12/js/ionic.bundle.min.js)
