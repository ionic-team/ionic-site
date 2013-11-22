---
layout: tutorial
title: Customize Your Ionic App With Sass
header_sub_title: Use the powerful of Sass to for more flexibility
news: Checkout the <a href="/docs/components/">Components</a> section to see what Ionic already has
---

Customizing Ionic With Sass
====

The core of Ionic's CSS is built using [Sass](http://sass-lang.com/), which essentially makes it easier to manage large scale CSS projects.

Sass is a pretty powerful tool and we made sure to leverage its [variables](http://sass-lang.com/guide#variables) feature. What this means to you is that you can easily achieve your desired theme by modifying existing Ionic Sass variables which we've made easily customizable.

Out of the box Ionic already comes with a complete CSS stylesheet already built from our default Sass files. If you have very little to customize it might be better just stick with the default CSS file and override a few  properties. However, if you've got big plans for your theme, and/or your app will be a large project, then we highly recommend using the power of Sass to simplify development.


## Install or Upgrade Sass

- Haven't installed Sass yet? Then [Install Sass](http://Sass-lang.com/install)
- If you already have Sass installed then make sure you have the latest version: `gem update sass`
- In a terminal or command prompt, enter `sass -v` to verify Sass has been setup correctly, and to see which version you're running (should be the most recent if all goes swimmingly).


## Ionic Source Files

Next, [download]({{ site.latest_download }}) the latest copy of Ionic if you haven't done so already. At the root level of Ionic's download you'll find the `dist/`, `js/` and `scss/` directories.

    - dist
      - css
      - fonts
      - js
    - js
    - scss

## Your App Directory Structure

The Ionic download's `dist/` directory contains the files which will be used by your Ionic app. The directories inside the `dist/` should be copied into your app's root directory. You can use whatever directory structure you choose, but we recommend this setup:

    - css
      - app.css  (processed CSS file, which will automatically be generated)
    - fonts
    - img
    - js
    - scss
      - ionic  (entire scss directory copied from the download, then renamed to "ionic")
      - app.scss  (you app's custom Sass file)
    - index.html

All the Sass magic starts from your app's `scss/` directory. Additionally, the code which builds Ionic's default icon font, [Ionicons](http://ionicons.com/), can be found in your app's `scss/ionic/ionicons/` directory . At this point all you should be concerned about are the files in `scss/` directory, which will eventually output your custom CSS into your `css/` directory.

We recommend your app should have its own Sass file within the `scss/` directory, such as `scss/app.scss`. From within your `app.scss` file you'll want to import the `scss/ionic/ionic.scss` file, using this syntax:

    @import "ionic/ionic";

    // your slick styles can go here...
    // when Sass processes, both Ionic's Sass and your Sass will combine 
    // into one file and saved in your app's directory as css/app.css

## "Watch" Your Sass!

Browsers still need to reference plain old CSS files since they do not understand Sass files. Because of this, the Sass files will need to be processed into a CSS file. Sass is able to take many files and combine them into one CSS file, which is yet another reason why Sass is a powerful development tool.

To automatically output a CSS file which the browser will understand you'll want to "watch" your app's Sass files for any changes. Every time changes are saved to a Sass file then the CSS file will automatically rebuild. In your terminal, enter:

    sass --watch scss/app.scss:css/app.css

What the above command is doing is instructing Sass to constantly watch all of the files in the `scss/` directory. Once a Sass file changes then it'll rebuild the CSS file and resave the `css/app.css` file. For more information regarding watching Sass files please see [their documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html). Once you successfully run this command then you're ready to start customizing.

## Sass Variables

> Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse.
>
> -- <cite>[Sass Variables Documentation](http://sass-lang.com/guide#variables)</cite>

Inside the your app's `scss/ionic/` directory, the Ionic Framework has already been built with a `_variables.scss` file. The variables file is the first place to go when any default styles are looking to be customized. For example, Ionic comes with a small set of [colors](/docs/components/#colors) to start with, but as a general rule colors are meant to be overridden to fit your "brand". 

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

Colors are only one example and you'll see throughout the `_variables.scss` file you can change many different properties such as padding, font sizes, margins, border colors, widths, heights, etc. There's absolutely no need to change them all, but they're there to be tweaked if you choose so.


## Full Customization

Changing the variables is the easiest way to start modifying your Ionic app. However, there's nothing stopping you from going into each of the separate Sass files and customizing them to fit your requirements. (And if you've got a few cool tricks up your sleeve, which others may find useful, we'd love to have you [contribute](/contribute/) to Ionic).

Now start building some awesome apps and [tell us all about it](/examples/submit.html)!

## Resources

- [Learn Sass](http://sass-lang.com/guide)
- [Sass Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [Sass Style Guide](http://css-tricks.com/sass-style-guide/)
- [Ionic Forum](http://forum.ionicframework.com/)

