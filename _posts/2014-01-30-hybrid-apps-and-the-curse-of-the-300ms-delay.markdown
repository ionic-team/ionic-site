---
layout: post
title:  "Hybrid Apps and the Curse of the 300ms Delay"
date:   "2014-01-30 13:00:00"
categories: ionic, angularjs
author: '<img src="http://www.gravatar.com/avatar/eeff5848f4231174094d2bc3cce26a05?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/adamdbradley">@adamdbradley</a>'
published: true
---

<img class="showcase-image" src="/img/blog/delay-header.png">

<p>Just when we thought we had this web-dev stuff figured out with HTML5 standards and modern desktop browsers, mobile devices slapped us in the face. Mobile browsers are still the wild-west of web development (which is exactly why I love it), but because they're still relatively new, we're all still fleshing out the details on how to create amazing web apps. When it comes to response time on mobile browsers, one of the biggest culprits is a 300 millisecond delay after every tap by the user.</p>

<h3>Why is there a 300ms delay on mobile browsers?</h3>

<p>On touch devices such as a phone or tablet, browsers implement a 300ms delay between the time the user stops touching the display and the moment the browser executes the click. It was initially introduced so the browser can tell if the user wants to double-tap to zoom in on the webpage. Basically the browser waits roughly 300ms to see if the user is double-tapping, or just tapping on the display once. While 300ms seems pretty short, it's surprising just how noticeable it is when you remove the delay.</p>

<p>Here's the general idea of how the delay plays out:</p>

<p>
<ol>
<li>User touches the display, the browser fires off <code>touchstart</code></li>
<li>User stops touching the display, the browser fires off <code>touchend</code></li>
<li>The browser waits 300ms to see if the user taps again</li>
<li>If the user didn't tap again, the browser fires off <code>click</code></li>
</ol>
</p>

<!-- more -->

<h3>Hybrid Apps Don't Feel "App-Like!”</h3>

<p>The phrase "doesn't feel app-like" seems to be loosely thrown around a lot, but it’s understandable because to the user it doesn't really doesn't matter "why" it doesn't feel app-like...it just doesn't! I believe that the 300ms delay contributes to much of this widely repeated phrase. I'll admit that historically mobile browsers had performance issues, and that topic alone can spark a thousand discussions, but one of the quickest wins to making a hybrid app feel "app-like" is eliminating that pesky delay.</p>

<h3>You've convinced me, now let's remove the delay</h3>

<p>Now that we know why browsers have a delay, and it’s one of the reasons your hybrid app doesn't feel app-like, let's remove it! Too easy right?</p>

<p>So far I've talked about hybrid apps in general, but now I'm going to focus in on Ionic, which stands on the shoulders of AngularJS. Simply put, AngularJS is an amazing framework to build apps with, which is why we built Ionic to work great with it. However, combining the crazy world of mobile browsers and all of Angular's magic, and removing that 300ms delay accurately without causing double-clicks, quadruple clicks, or even no clicks at all, for every scenario in every browser is quite the challenge.</p>

<h3>Ionic and Angular's ngTouch</h3>

<p>Immediately Angular developers will ask, "What about ngTouch, doesn't that remove the delay?". When it comes to building a simple Angular app that should be touch enabled, <a href="http://docs.angularjs.org/api/ngTouch">ngTouch</a> is a great option. However, it's missing a few things, and when combined with Ionic there's a large duplication of code that actually causes more issues. And because it's not a part of Angular's core, and is an additional dependency that doesn't have to be included, we decided to take the route of not using it at all, and here's why:</p>

<p>
<ul>
<li>ngTouch overrides ngClick and does its job to remove the delay for that element. But it doesn't remove the delay on all the other elements on the page without an ng-click attribute. Textareas, inputs, links, buttons, labels, etc., can all exist on your page without an ng-click attribute, so when tapping those you still get the delay.</li>
<li>The ngTouch directive has all the necessary code to detect a tap. It adds global event listeners for touchstart and click, and for every element with ng-click it adds touchstart, touchmove, touchcancel, touchend, mousedown, mousemove, and mouseup event listeners. This is an area where we felt there is a duplication of efforts.</li>
<li>Ionic already comes with an event system, which was forked from <a href="http://eightmedia.github.io/hammer.js/">hammer.js</a> to detect virtual events and gestures like tap, swipe, swiperight, swipeleft, drag, hold, and release. Ionic's event system can easily be reused by the framework itself and by developers, compared to only tying this logic to elements with the ng-click attribute.</li>
<li>To be clear, ngTouch is a great extra for Angular, and without Ionic I recommend it. But with Ionic we've gone beyond just detecting taps for single elements manually assigned ng-click, and do it for all elements automatically (without creating event handlers for each element).</li>
</ul>
</p>

<h3>What about Fastclick.js?</h3>

<p>If you're not using Ionic or AngularJS, then I highly recommend <a href="https://github.com/ftlabs/fastclick">fastclick.js</a>. It's heavily tested, widely used and works great on many devices. But when combined with Angular, there were a few issues here and there that we kept noticing. Fastclick.js is a great plugin, but I do not recommend it when building an AngularJS app.</p>

<h3>Why do you wrap inputs in label elements?</h3>

<p>A lesser known feature of HTML is <a href="http://www.w3.org/html/wg/drafts/html/master/forms.html#the-label-element">wrapping an input element with a label element</a>. It’s the same as if you associated the two by setting the input's <code>id</code> and label's <code>for</code> attribute to be the same. It’s a quick and easy trick to immediately make a large hit area for your inputs, which is vital for touch device usability. This is great for text inputs because the surrounding area, and even its actual label, can be tapped and the input immediately receives the focus (without a 300ms delay).</p>

<p>Additionally, for radio buttons, checkboxes and toggles, wrapping their inputs with a label makes it easy to style the tap area using the input's <code>:checked</code> CSS pseudo-class. It’s a nifty trick that allows us to eliminate the need to have JavaScript style the elements. For example, if you tap a radio button in a list, all the style changes are done by CSS, there are no event handlers adding and remove classnames (therefore no DOM manipulation).</p>

<h3>So how does Ionic remove the delay?</h3>

<p>There are a handful of easy tricks we've put in place to remove the delay, but a formidable‎ foe is the evil "ghostclick". A ghostclick can happen in many different scenarios, but the most common is when Ionic executes a click on <code>touchend</code>, but the browser still sends the another <code>click</code> 300ms later. Click click. Bad bad!</p>

<p>Additionally, there are many cases where a user taps an element, and the usual events fire off from the target element, but the browser assumes you meant to click the element "near" where the user tapped. The browser thinks, "Hey, I know you clicked that div and all, but you were really close to clicking that button, so I'm going to assume you meant to click the button too." In those cases, the click fires for both the div and the button, which is a huge source of troubles.</p>

<p>On top of that, remember how we wrap inputs with labels for the added benefit of not adding event handlers and more DOM manipulation? Well in some browsers, both the label and the input fire off a click event, causing double and sometimes quadruple clicks. These browser bugs also contribute to some performance issues because the same code for one interaction is having to execute numerous times.</p>

<p>To prevent ghostclicks we track all of the x and y coordinates of touchends and clicks. If the subsequent tap and click coordinates happen within the same region, and within a short period of time, then we assume it's the same click and to ignore all followup ghostclicks.</p>

<p><i>So to sum up, Ionic prevents ghostclicks by:</i></p>

<p>
<ul>
<li>Remembering x, y coordinates for each touch/click and preventing duplicate clicks that happened in the same region within a short period of time.</li>
<li>Setting the last time an element was clicked, and ignoring any follow up clicks that quickly happened again</li>
<li>Not letting labels propagate their clicks up the DOM, but still allowing the label's default to happen, which is to have its input fire off the click.</li>
</ul>
</p>

<h3>Removing the delay at the browser level</h3>

<p>Some great news is that browsers are realizing the double-tap to zoom feature isn't always necessary, and newer methods to remove the delay are taking form. Chrome 32 has <a href="http://updates.html5rocks.com/2013/12/300ms-tap-delay-gone-away">recently removed the delay</a> when the zoom is disabled, and actually Chrome and Firefox for Android have had methods to remove the display for a while now. You can read more about what browsers are up to <a href="http://updates.html5rocks.com/2013/12/300ms-tap-delay-gone-away">here</a>.</p>

<p>But this feature causes yet another issue which can arise with simple tap detection solutions. When browsers fire off the <code>click</code> event without the 300ms delay, this means the <code>click</code> can happen before the <code>touchend</code>, which throws another wrench into the problem. Luckily Ionic is checking for those scenarios too.</p>

<h3>Conclusion</h3>

<p>When it comes to creating hybrid apps, one of the biggest wins to making it feel more “app-like” is eliminating that 300ms delay. The great news is that this all comes for free in Ionic without any extra work on the developers part. Ionic is still pretty new, and we're quickly improving and enhancing it, but we'd love to have your help testing it out to make it better.</p>

<p><strong>If you have any questions we encourage you to check out the <a href="http://forum.ionicframework.com/">Community Forum</a>, or if you find any issues please <a href="https://github.com/driftyco/ionic/issues?state=open">let us know</a>. Give it a shot a let us know how it goes!</stron></p>

<p><strong><a href="http://twitter.com/adamdbradley">Adam</a></strong></p>

