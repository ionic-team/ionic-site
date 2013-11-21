---
layout: "tutorial"
title: Customizing Ionic With Sass
---

{{ page.title }}
====

<div class="hidden-xs" style="float:right; width: 400px; height: 235px; margin: -8px 0 40px 40px;">
  <blockquote class="twitter-tweet" lang="en"><p>Mom: What’s Sass?&#10;Me: Uhm, I guess it’s like a sewing machine if hand sewing is CSS.</p>&mdash; Chris Coyier (@chriscoyier) <a href="https://twitter.com/chriscoyier/statuses/401532508229345280">November 16, 2013</a></blockquote>
</div>

The core of Ionic's CSS is built using [Sass](http://sass-lang.com/), which essentially makes it easier to manage large scale CSS projects.

Sass is a pretty powerful tool and we made sure to leverage its [variables](http://sass-lang.com/guide#variables) and [mixins](http://sass-lang.com/guide#mixins) capabilities. What this means to you is that you can easily achieve your desired theme by modifying existing Ionic Sass variables we've made readily customizable.

Out of the box Ionic already comes with a complete CSS stylesheet already built from our default Sass files. If you have very little to customize it might be better just to override a few CSS properties found in the default `ionic.css` file. However, if you've got big plans for your theme, and/or your app will be a large project then we highly recommend using the power of Sass to simplify development.


## Install or Upgrade Sass

- Haven't installed Sass yet? Then [Install Sass](http://Sass-lang.com/install)
- If you already have Sass installed then make sure you have the latest version: `gem update sass`
- In a terminal or command prompt, enter `sass -v` to verify Sass is setup correct, and to see which version you're running (should be the most recent if all goes swimmingly).


## Ionic Sass Files

Next, [download]({{ site.latest_download }}) the latest copy of Ionic if you haven't done so already. The following is a summary of the directory structure you'll find Ionic's download. At the root level you'll find the `dist/`, `js/`, `scss/` and `vendor/` directories.

- dist
 - css
 - fonts
 - js
- js
- scss
- vendor

The `dist/` directory contains the final static files which will be used by your Ionic app. The `dist/fonts/` and `dist/js/` can stay untouched when dealing with Sass and CSS. However, the Ionic CSS file in `dist/css/` will be replaced with your own CSS built from your custom Sass files. Since we're dealing with Sass at the moment just forget that any JavaScript files even exist, such as those found in `js/` and `dist/js/` directories. 

All the Sass magic starts from the `scss/` folder, and the code which builds Ionic's default icon font, [Ionicons](http://ionicons.com/), can be found in the `vendor/` directory. At this point all you should be concerned about are the files in `scss/` directory, which will eventually output your custom CSS to the `dist/css/` directory.


## "Watch" Your Sass!

Browsers still need to reference plain old CSS files since they do not understand Sass files. Because of this, the Sass files will need to be compiled into a CSS file. Sass is able to take many files and combine them into one CSS file, which is yet another reason why Sass is a powerful development tool.

To automatically output a CSS file which the browser will understand you'll want to "watch" the Sass files for any changes. Every time changes are saved to a Sass file then the CSS file will automatically rebuild. In your terminal, enter:

    sass --watch scss:dist/css

What the above command is doing is instructing Sass to constantly watch all of the files in the `scss/` directory, and when they change then to rebuild the CSS file and save it in the `dist/css/` directory. For more information regarding watching Sass files please see [their documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html). Once you successfully run this command then you're ready to start customizing.

## Sass Variables

> Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse.
>
> -- <cite>[Sass Variables Documentation](http://sass-lang.com/guide#variables)</cite>

Inside the `scss/` directory the Ionic Framework already comes with a `_variables.scss` file. The variables file is the first place to go when any default styles are looking to be customized. For example, Ionic comes with a small set of [colors](/docs/components/#colors) to start with, but as a general rule colors are meant to be overridden to fit your "brand". 

    // Colors
    // -------------------------------

    $light:                 #fff !default;
    $stable:                #f8f8f8 !default;
    $positive:              #4a87ee !default;
    $calm:                  #43cee6 !default;
    $balanced:              #66cc33 !default;
    $energized:             #f0b840 !default;
    $assertive:             #ef4e3a !default;
    $royal:                 #8a6de9 !default;
    $dark:                  #444 !default; 

Please feel free to customize these variables as much as you'd like (after all, the world doesn't need a bunch of apps that look identical). Once a change is made the CSS file will be rebuilt using the new values you've specificed.

Colors are only one example, you'll see throughout the `_variables.scss` file you can change many different properties such as padding, font sizes, margins, border colors, etc. There's absolutely no need to change them all, but they're there to be tweaked, so go nuts if you're so inclinded.
