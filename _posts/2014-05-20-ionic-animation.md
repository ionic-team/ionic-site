---
layout: post
title:  "Javascript Animations come to Ionic"
date:   "2014-05-20 08:00:00"
hide_date: false
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/e130a4be9fba5eb5d932c813fbe3a58d?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/maxlynch" target="_blank">@maxlynch</a>'
published: false
---

Last week we released the very first version of [`$ionicAnimation`](http://ionicframework.com/docs/api/service/$ionicAnimation/), a pure-Javascript animation system that makes it easy to build interesting animations using standard CSS easing, or even real Physics like Springs and Gravity.

Lately, there has been a trend to do more animations outside of CSS. One reason for this is for increased control: CSS animations and transitions can often be difficult to manage after the animation starts, and they can'really be stepped through (such as during a drag or gesture). Also, trying to figure out the best combination of class names to trigger and then reset the animation can be a chore.

On top of that, with CSS animations there is no built-in way to do more realistic animations using physics that model Springs and Gravity.

The `$ionicAnimation` service solves this and makes it easy to create reusable animations that can be stepped through, stopped, restarted, and saved for later. T

<div id="animation-example"></div>

<script id="animation-template-html" type="text/template">
<!DOCTYPE>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
</script>

<script src="//scratch.ionicsdk.com/static/js/embed.js"></script>
<script>
  var scratch = new IonicScratch({
    el: document.getElementById('animation-example'),
    width: '100%',
    height: '600px',
    html: document.getElementById('animation-template-html'),
    css: '',
    js: ''
  });
</script>

