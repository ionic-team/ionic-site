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

Ionic already comes with a complete CSS stylesheet built from our default Sass files, so if you have little to customize, it is probably better to stick with the default CSS file and override the few properties you need. However, if you have big plans for your theme, and/or your app will be a large project, then we highly recommend leveraging the power of Sass to simplify development.


## Install or Upgrade Sass

- Haven't installed Sass yet? Then [Install Sass](http://Sass-lang.com/install).
- If you already have Sass installed, make sure you have the latest version: `gem update sass`.
- In a terminal or command prompt, enter `sass -v` to verify Sass has been setup correctly and to see which version you're running (it should be the most recent version, if all goes swimmingly).


## Ionic Source Files

Once you have node and npm ready to go on your machine, start an Ionic project using the Ionic CLI with the following commands:

```
npm install -g ionic cordova
ionic start my_app
cd my_app
```

## Your App Directory Structure

At the root level of an Ionic project, you'll find a directory structure like the following:

    - my_app
      - hooks
      - plugins
      - scss
      - www
        - css
        - fonts
        - js
        - lib
          - ionic
            - css
            - js
            - sass
        - templates

All the Sass magic starts from your app's `scss/` directory. Additionally, the code that builds Ionic's default icon font, [Ionicons](http://ionicons.com/), can be found in your app's `www/lib/ionic/scss/ionicons/` directory . However, at this point, all you need to be concerned about are the files in the `scss/` directory, which will eventually output your custom CSS into the `css/` directory.

We recommend that your app have its own Sass file within the `scss/` directory, such as `scss/ionic.app.scss`. From within your `ionic.app.scss` file, you'll want to import the sass sheets from Ionic, using this syntax:

    // your variable changes can go here

    @import "www/lib/ionic/scss/ionic";

    // your slick styles can go here...
    // when Sass processes, both Ionic's Sass and your Sass will combine
    // into one file and saved in your app's directory as www/css/app.css

## "Watch" Your Sass!

Browsers still need to reference plain old CSS files, since they do not understand Sass files. Because of this, the Sass files will need to be processed into a CSS file. Sass is able to take many files and combine them into one CSS file, which is yet another reason why Sass is a powerful development tool.

To automatically output a CSS file that the browser will understand, you'll want to "watch" your app's Sass files for any changes. Every time changes are saved to a Sass file, the CSS file will automatically rebuild.

From your project root folder:

* Make sure gulp is installed, `sudo install -g gulp`
* Make sure your version of the ionic CLI is at least 1.1.9 (if not, `sudo npm update -g ionic`
* Configure your project to watch your sass using gulp, `ionic setup sass`. Note, if this task fails try deleting your `node_modules` folder and running, `npm install`. 
* Start your server, `ionic serve`. Your sass will now also be watched.

**Compiling sass when testing on a device:**

If you make a change to your scss and `ionic serve` was not running and then you run on a device, `ionic run ios` then your CSS changes will not show up. To compile your sass do, `gulp sass` (this is a one-time command, doesn't watch continuously) or for a one-liner, `gulp sass && ionic build ios`

Once a Sass file changes, it will rebuild the CSS file and resave the `www/css/ionic.app.css` file. For more information regarding watching Sass files, please see [their documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html). Once you have successfully got this set up, you are ready to start customizing.

Other related docs about sass watching with Ionic:

* [Watching Sass files from `ionic serve`, new in cli v1.1.9](http://forum.ionicframework.com/t/watching-sass-files-from-ionic-serve-new-in-cli-v1-1-9/8139)
* [Sass Customization screencast](http://learn.ionicframework.com/videos/sass/)

## Sass Variables

> Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you want to reuse.
>
> -- <cite>[Sass Variables Documentation](http://sass-lang.com/guide#variables)</cite>

Inside your app's `www/lib/ionic/scss` directory, the Ionic Framework has already been built with a `_variables.scss` file. The variables file is the first place to go when you want to customize any of the default styles. For example, Ionic comes with a small set of [colors](/docs/components/#colors) to start with, but as a general rule, colors are meant to be overridden to fit your "brand."

    $light:                 #fff !default;
    $stable:                #f8f8f8 !default;
    $positive:              #4a87ee !default;
    $calm:                  #43cee6 !default;
    $balanced:              #66cc33 !default;
    $energized:             #f0b840 !default;
    $assertive:             #ef4e3a !default;
    $royal:                 #8a6de9 !default;
    $dark:                  #444 !default;

Feel free to customize these variables as much as you'd like (after all, the world doesn't need a bunch of apps that look identical). While you can change the `_variables.scss` file directly, we recommend you override these variables in your own `ionic.app.scss` file. By not changing the variables files directly and instead simply overriding its values, it makes it easier to upgrade Ionic as new versions come out. Once a change is made, the CSS file will be rebuilt using the new values you've specified.

Colors are only one example, however. You'll see throughout the `_variables.scss` file that you can override many different properties, such as padding, font sizes, margins, border colors, widths, heights, etc. There's absolutely no need to change them all, but they are there to be tweaked if you choose to. Below is an example of your `ionic.app.scss` file importing `ionic.scss`, then overriding a few variables:

    $light:                 #fff;
    $stable:                #f8f8f8;
    $positive:              #4ea4be;

    // Any variables you did not define will use the defaults
    @import "www/lib/ionic/scss/ionic";


## Full Customization

Changing the variables is the easiest way to start modifying your Ionic app. However, there is nothing stopping you from going into each of the separate Sass files and customizing them to fit your requirements. (And if you've got a few cool tricks up your sleeve that you think others may find useful, we'd love to have you [contribute](/contribute/) to Ionic).

Now, start building some awesome apps, and [tell us all about it](/examples/submit.html)!

## Resources

- [Learn Sass](http://sass-lang.com/guide)
- [Sass Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [Sass Style Guide](http://css-tricks.com/sass-style-guide/)
- [Ionic Forum](http://forum.ionicframework.com/)
