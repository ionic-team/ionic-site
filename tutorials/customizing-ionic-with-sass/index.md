---
layout: tutorial
title: Customize Your Ionic App With Sass
header_sub_title: Use the powerful of Sass to for more flexibility
news: Checkout the <a href="/docs/components/">Components</a> section to see what Ionic already has
---

Customizing Ionic With Sass
====

The core of Ionic's CSS is built using [Sass](http://sass-lang.com/).

One thing that makes Sass such a powerful tool is its [variables](http://sass-lang.com/guide#variables) feature. By modifying existing Ionic Sass variables, we've made it easy to achieve your desired theme.

Ionic already comes with a complete CSS stylesheet built from our default Sass files, so if you have little to customize, it is probably better to stick with the default CSS file and override the few properties you need. However, if you have big plans for your theme and/or your app will be a large project, then we highly recommend leveraging the power of Sass to simplify development.


## Install or Upgrade Sass

- Haven't installed Sass yet? Then [Install Sass](http://Sass-lang.com/install)
- If you already have Sass installed then make sure you have the latest version: `gem update sass`
- In a terminal or command prompt, enter `sass -v` to verify Sass has been setup correctly, and to see which version you're running (should be the most recent if all goes swimmingly).


## Ionic Source Files

Next, [download](https://github.com/driftyco/ionic/releases) the latest copy of the Ionic repo if you haven't done so already. At the root level of Ionic's repo you'll find the `release/`, `js/` and `scss/` directories.

    - release
      - css
      - fonts
      - js
    - js
    - scss

## Your App Directory Structure

The `release/` directory contains the files that will be used by your Ionic app. The directories inside `release/` should be copied into your app's root directory. You can use whatever directory structure you choose, but we recommend this setup:

    - css/
      - app.css  (processed CSS file that will automatically be generated)
    - fonts/
    - img/
    - js/
    - scss/
      - ionic/  (entire scss directory copied from the download, then renamed to "ionic")
      - app.scss  (your app's custom Sass file)
    - index.html

All the Sass magic starts from your app's `scss/` directory. Additionally, the code that builds Ionic's default icon font, [Ionicons](http://ionicons.com/), can be found in your app's `scss/ionic/ionicons/` directory . However, at this point all you need to be concerned with are the files in the `scss/` directory, which will eventually output your custom CSS into the `css/` directory.

We recommend that your app have its own Sass file within the `scss/` directory, such as `scss/app.scss`. From within your `app.scss` file you'll want to import the `scss/ionic/ionic.scss` file, using this syntax:

    // your variable changes can go here

    @import "ionic/ionic";

    // your slick styles can go here...
    // when Sass processes, both Ionic's Sass and your Sass will combine
    // into one file and saved in your app's directory as css/app.css

## "Watch" Your Sass!

Browsers still need to reference plain old CSS files since they do not understand Sass files. Because of this, the Sass files will need to be processed into a CSS file. Sass is able to take many files and combine them into one CSS file, which is yet another reason why Sass is a powerful development tool.

To automatically output a CSS file that the browser will understand you'll want to "watch" your app's Sass files for any changes. Every time changes are saved to a Sass file the CSS file will automatically rebuild. In your terminal, enter:

    sass --watch scss/app.scss:css/app.css

The above command instructs Sass to constantly watch all of the files in the `scss/` directory. Once a Sass file changes it will rebuild the CSS file and resave the `css/app.css` file. For more information regarding watching Sass files please see [their documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html). Once you have successfully run this command you are ready to start customizing.

## Sass Variables

> Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you want to reuse.
>
> -- <cite>[Sass Variables Documentation](http://sass-lang.com/guide#variables)</cite>

Inside your app's `scss/ionic/` directory, the Ionic Framework has already been built with a `_variables.scss` file. The variables file is the first place to go when you want to customize any of the default styles. For example, Ionic comes with a small set of [colors](/docs/components/#colors) to start with, but as a general rule colors are meant to be overridden to fit your "brand".

    $light:                 #fff !default;
    $stable:                #f8f8f8 !default;
    $positive:              #4a87ee !default;
    $calm:                  #43cee6 !default;
    $balanced:              #66cc33 !default;
    $energized:             #f0b840 !default;
    $assertive:             #ef4e3a !default;
    $royal:                 #8a6de9 !default;
    $dark:                  #444 !default;

Feel free to customize these variables as much as you'd like (after all, the world doesn't need a bunch of apps that look identical). While you can change the `_variables.scss` file directly, we recommend you override these variables in your own `app.scss` file. By not changing the variables files directly, but simply overriding its values, it makes it easier to upgrade Ionic as new versions come out. Once a change is made, the CSS file will be rebuilt using the new values you've specified.

Colors are only one example, however. You'll see throughout the `_variables.scss` file that you can override many different properties, such as padding, font sizes, margins, border colors, widths, heights, etc. There's absolutely no need to change them all, but they are there to be tweaked if you choose to. Below is an example of your `app.scss` file importing `ionic.scss`, then overriding a few variables:

    $light:                 #fff;
    $stable:                #f8f8f8;
    $positive:              #4ea4be;

    // Any variables you did not define will use the defaults
    @import "ionic/ionic";


## Full Customization

Changing the variables is the easiest way to start modifying your Ionic app. However, there is nothing stopping you from going into each of the separate Sass files and customizing them to fit your requirements. (And if you've got a few cool tricks up your sleeve that you think others may find useful, we'd love to have you [contribute](/contribute/) to Ionic).

Now start building some awesome apps and [tell us all about it](/examples/submit.html)!

## Resources

- [Learn Sass](http://sass-lang.com/guide)
- [Sass Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [Sass Style Guide](http://css-tricks.com/sass-style-guide/)
- [Ionic Forum](http://forum.ionicframework.com/)

