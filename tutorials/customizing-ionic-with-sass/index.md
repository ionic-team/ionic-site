---
layout: "tutorial"
title: Customizing Ionic With Sass
---

{{ page.title }}
====

The core of Ionic's CSS is built using [Sass](http://sass-lang.com/), which essentially makes it easier to manage large scale CSS projects.

Sass is a pretty powerful tool and we made sure to leverage its [variables](http://sass-lang.com/guide#variables) and [mixins](http://sass-lang.com/guide#mixins) capabilities. What this means to you is that you can easily achieve your desired theme by modifying existing Ionic Sass variables we've made readily customizable.

Out of the box Ionic already comes with a complete CSS stylesheet already built from our default Sass files. If you have very little to customize it might be better just to override a few CSS properties found in the default `ionic.css` file. However, if you've got big plans for your theme, and/or your app will be a large project then we highly recommend using the power of Sass to simplify development.


## Install or Upgrade Sass

- Haven't installed Sass yet? Then [Install Sass](http://Sass-lang.com/install)
- If you already have Sass installed then make sure you have the latest version: `gem update sass`
- In a terminal or command prompt, enter `sass -v` to verify Sass is setup correct, and to see which version you're running (should be the most recent if all goes swimmingly).


## Ionic Source Files

Next, [download]({{ site.latest_download }}) the latest copy of Ionic if you haven't done so already. The following is a summary of the directory structure in Ionic's download. At the root level you'll find the `dist/`, `js` and `scss/` directories.

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
      - ionic  (copied from the download's scss directory and renamed to ionic)
      - app.scss  (you app's custom Sass file)
    - index.html

All the Sass magic starts from the `scss/` folder, and the code which builds Ionic's default icon font, [Ionicons](http://ionicons.com/), can be found in the `scss/ionicons/` directory . At this point all you should be concerned about are the files in `scss/` directory, which will eventually output your custom CSS into your `css/` directory.

We recommend your app should have its own Sass file within the `scss/` directory, such as `scss/app.scss`. From within your app.scss file you'll want to import the ionic scss file, such as:

    @import "ionic/ionic";

    // your own crazy styles can go here

## "Watch" Your Sass!

Browsers still need to reference plain old CSS files since they do not understand Sass files. Because of this, the Sass files will need to be processed into a CSS file. Sass is able to take many files and combine them into one CSS file, which is yet another reason why Sass is a powerful development tool.

To automatically output a CSS file which the browser will understand you'll want to "watch" the Sass files for any changes. Every time changes are saved to a Sass file then the CSS file will automatically rebuild. In your terminal, enter:

    sass --watch scss:css

What the above command is doing is instructing Sass to constantly watch all of the files in the `scss/` directory. Once a Sass file changes then it'll rebuild the CSS file and resave it in the `css/` directory. For more information regarding watching Sass files please see [their documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html). Once you successfully run this command then you're ready to start customizing.

## Sass Variables

> Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse.
>
> -- <cite>[Sass Variables Documentation](http://sass-lang.com/guide#variables)</cite>

Inside the `scss/` directory the Ionic Framework already comes with a `_variables.scss` file. The variables file is the first place to go when any default styles are looking to be customized. For example, Ionic comes with a small set of [colors](/docs/components/#colors) to start with, but as a general rule colors are meant to be overridden to fit your "brand". 

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


## Customization

Changing the variables is the easiest way to start customizing you Ionic app. However, there's nothing stopping you from going into each of the Sass files and completely customizing them (and if you've got a few cool tricks up your sleeve others would find useful we'd love to have you [contribute](/contribute/) them).

Now start tickering around and build some awesome apps!

## Resources

- [Learn Sass](http://sass-lang.com/guide)
- [Sass Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [Sass Style Guide](http://css-tricks.com/sass-style-guide/)
- [Ionic Forum](http://forum.ionicframework.com/)

