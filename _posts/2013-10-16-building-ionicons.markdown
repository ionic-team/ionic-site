---
layout: post
title:  "Building Ionicons, Our Open Source Icon Font"
date:   "2013-10-16 11:00:24"
categories: ionic
author: '<img src="http://www.gravatar.com/avatar/b2fb6624572ff6d6dcbe98bd787b9e9b.png?s=48&amp;d=mm" class="author-icon"><a href="http://twitter.com/benjsperry" target="_blank">@benjsperry</a>'
published: true
---

<img class="showcase-image" src="/img/blog/ionicons-preview.png">

<p>When we went to build <a href="http://ionicframework.com">Ionic</a>, we knew that great design would be crucial in an amazing HTML5 mobile app development framework. This meant we had to cover a lot of (visual) bases with the design, but few design challenges were as daunting as iconography.</p>

<p>People are going to use icons in their designs. That is a given. So, what icons would we offer with Ionic? Would we just let people figure it out themselves, or bundle in an existing icon pack? How would we manage licensing of external icon packs?</p>

<p>Eventually, it became clear to us that in order to create a premier framework, we would need to have complete control over what we offered in order to ensure the highest standard of quality.</p>

<p>We didn’t want to force people to find their own icons (unless they wanted to), nor did we feel comfortable bundling in existing packs which we had little control and creative vision over. It seemed unavoidable that if we wanted high quality icons included with Ionic, they would need to be designed in house.</p>

<p>It was an easy decision to go the route of making an icon font instead of using images. Icon fonts are better in pretty much every way imaginable, most notably the fact that they are vector based, which means they scale perfectly to any resolution. They look great on high-resolution displays such as iPhones and most Android devices. Moreover, they are all from one resource! That means fewer HTTP requests for various images, and zero sprite sheets.</p>

<p>It took over a month from start to “finish” (we’re still adding icons) to build <a href="http://ionicons.com" target="_blank">Ionicons</a>. During that time I learned a ton about how to build an icon font, and I thought it would be interesting to detail some of that here.</p>

<!-- more -->

<h3>Tools</h3>

<p>The tools required to build Ionicons were minimal: <a href="http://www.adobe.com/mena_en/products/illustrator.html" target="_blank">Adobe Illustrator</a> for designing the vector icons, <a href="http://icomoon.io/" target="_blank">IcoMoon</a> for converting the vector shapes into font files, and <a href="https://www.google.com/intl/en/chrome/browser/" target="_blank">a browser</a> to preview them all in. All of these were free, with the exception of Illustrator.</p>

<img class="body-image" src="/img/blog/ionicons-tools.png" style="width:50%;">

<p>If you’re unfamiliar with IcoMoon, do take some time to check it out. It’s a very cool open source tool for creating custom icon font packs. There are some legal usecase limitations if you build a custom pack from other existing icon fonts, but not if you create and import your own icons from scratch.</p>

<h3>Crisp Size</h3>

<p>The concept of a “crisp size” took a bit of time for me to understand, so I will try to explain it as simply as possible. Basically, “crisp size” is the default size at which an icon renders sharply on a screen. For an icon to render sharply, its lines and edges must line up perfectly with the pixel grid of the screen. If any edges of the icon shape are not aligned to the pixel grid, they will appear blurry because the screen cannot definitively decipher where the edge ends/begins.</p>

<img class="body-image" src="/img/blog/ionicons-pixelgrid.png">

<p>We decided to go with the common crisp size of 16px with Ionicons for several reasons. Having a number divisible by 2, 4 and 8 was a good step to improve crisp scalability at various sizes (for the most crispy looking icons, use font sizes 16px, 32px, 48px, 64px, etc.).</p>

<p>Knowing this, I constructed a series of artboards in Illustrator to represent my drawing canvas for the icons. Each artboard is set to 512 x 512 pixels, with a grid dividing them into 16 x16 squares. Each square represents one pixel unit (technically there are 4 square pixels within each box). I used this grid as my guide for where to place and align each icon shape.</p>

<img class="body-image" src="/img/blog/ionicons-artboards.png">

<p>Then came the hard part. What icons do we include, and how many should we start with? I started looking closer at all of the icons used in popular apps and websites, and took note of those most commonly used. At the top of this list were icons relating to navigation, utility, help, searching, and sharing. Ultimately, I feel we did a good job curating the most necessary and frequently used icons for this first iteration of Ionicons.</p>

<h3>From SVG to Font</h3>

<p>It took me a solid three to four weeks to construct the initial designs of each icon in Illustrator and organize them accordingly. We went through several revisions and tweaks before we were confident they were ready for prime time. Once we reached that point, I exported each individual icon as an SVG file. From there, I imported them all into IcoMoon.</p>

<img class="body-image" src="/img/blog/ionicons-list.png">

<p>Once each and every SVG file was in IcoMoon, I set the font name to “ionicons” and the prefix to “icon-” for consistency. There is also a setting in IcoMoon called Font Metrics, which allows you to set your font’s Crisp Size. It’s important to have this set to whatever your chosen Crisp Size is, which in our case is 16px. This will ensure that our icons will appear crisp at the correct sizing units.</p>

<img class="body-image" src="/img/blog/ionicons-metrics.png">

<p>Then I exported the font. It compiled and packaged up the necessary CSS and font files required by all the various browsers. We were really pleased with the ease of use and speed offered through IcoMoon. It made the transition from SVG to fonts a breeze.</p>

<h3>To the Internets!</h3>

<p>I designed over 130 custom default icons, and then added another 200+ iOS 7-styled icons and social icons to boot. As of this moment, there are roughly 350 <a href="http://ionicons.com" target="_blank">Ionicons</a>. I’d be surprised if you don’t find something to fit what you’re looking for from this pack. But, on the off chance that you do, let me know. We are actively adding to the font, and my next goal is to design and include popular Android-style icons.</p>

<p>We’ve created a public <a href="https://github.com/driftyco/ionicons" target="_blank">repo page</a> for Ionicons, as well as a nifty little <a href="http://ionicons.com" target="_blank">website</a> for perusing and searching. Definitely check out the search feature, which has keywords identifying common icon names and styles. For example, if you search for “arrow” we call up every icon that could possibly be used as an arrow. We’ve also included each icon’s classname for easy copy/pasting when you’re developing!</p>

<p>We intend for this icon pack to be used with <a href="http://ionicframework.com" target="_blank">Ionic</a>, but it’s by no means limited to it. Use these icons wherever you see fit, personal or commercial. They are free to use and licensed under <a href="http://opensource.org/licenses/MIT" target="_blank">MIT</a>. We can’t wait to show you the full glory of Ionic, but hopefully Ionicons will serve as a legitimate teaser for what’s in store. Now go <strong><a href="http://ionicons.com" target="_blank">check out the Ionicons</a></strong>!</p>

<p><a href="http://twitter.com/benjsperry">Ben</a></p>
