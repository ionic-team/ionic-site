---
layout: post
title:  "Hybrid Apps and the Curse of the 300ms Delay"
date:   "2014-01-30 13:00:00"
categories: ionic, angularjs
author: '<img src="http://www.gravatar.com/avatar/eeff5848f4231174094d2bc3cce26a05?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/adamdbradley" target="_blank">@adamdbradley</a>'
published: false
---

<img class="showcase-image" src="/img/blog/delay-header.png">

<p>Just when we thought we had this web-dev stuff figured out with HTML5 standards and modern desktop browsers, mobile devices slapped us in the face. Mobile browsers are still the wild-west of web development (which is exactly why I love it), but because they're still relatively new, we're all still flushing out the details on how to create amazing web apps. When it comes to response time on mobile browsers, one of the biggest culprits is a 300 millisecond delay after every tap by the user.</p>

<h3>Why is there a 300ms delay on mobile browsers?</h3>

<p>On touch devices such as a phone or tablet, browsers implement a 300ms delay between the time the user stops touching the display and the moment the browser executes the click. It was initially introduced so the browser can tell if the user wants to double-tap to zoom in on the webpage. Basically the browser waits roughly 300ms to see if the user is double-tapping, or just tapping on the display once. While 300ms seems pretty short, it's surprising just how noticeable it is when you remove the delay.</p>

<p>Here's the general idea of how the delay plays out:</p>

<p>1) User touches the display, the browser fires off `touchstart`</p>
<p>2) User stops touching the display, the browser fires off `touchend`</p>
<p>3) The browser waits 300ms to see if the user taps again</p>
<p>4) If the user didn't tap again, the browser fires off `click`</p>

<h3>Hybrid Apps Don't Feel "App-Like!”</h3>