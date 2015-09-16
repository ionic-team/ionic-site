---
layout: v2/docs_base
id: ui
title: Ionic 2 UI | Icons
header_title: Icons - Ionic 2 UI
header_sub_title: Ionic 2 Developer Preview
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/ui/icons/index.md'>
    Improve this doc
  </a>
</div>

<h1 class="title">Icons</h1>

{% include demo.html demo_url="/docs/v2/dist/demos/icons/" demo_name="icons" %}

Ionic 2 comes with the same 700+ [Ionicons](http://ionicons.com/) icons we've all come to know and love.


### Basic Usage:

To use an icon, just add the Icon's CSS class to your element:

```html
<icon heart></icon>
```


### Active / Inactive Icons:

All icons have both `active` and `inactive` states. Active icons are typically full and thick, where as inactive icons are outlined and thin. Set the `is-active` attribute to `true` or false to change the state of the icon. Icons will default to active if a value is not specified.

```html
<icon heart></icon>                    <!-- active -->
<icon heart is-active="false"></icon>  <!-- inactive -->
```


### Platform Specific Icons:

Many icons have both **Material Design** and **iOS** versions. Ionic will automatically use the correct version based on the platform.

However, if you want more control, you can explicitly set the icon to use for each platform. Use the `md` (material design) and `ios` attributes to specify a platform specific icon:

```html
<icon ios="ion-social-apple" md="ion-social-android"></icon>
```



### Variable Icons:

To set an icon using a variable:

```html
<icon [name]="myIcon"></icon>
```

```ts
export class MyFirstPage {
  constructor(nav: NavController) {
  	// use the home icon
  	this.myIcon = "home";
  }
}
```


### As a Class:

While not recommended, icons can be added using their class name. This was the typical way to add icons in Ionic 1, so you may encounter the following syntax from time to time:

```html
<i class="icon ion-home"></i>
```



<a href="http://ionicons.com">
  <button class="btn btn-primary ion-forward icon-right">Explore the full icon set</button>
</a>
