---
layout: v2_fluid/docs_base
category: components
id: components
title: Ionic 2 Components
header_title: Ionic 2 Components
header_sub_title: Ionic 2 Developer Preview
show_preview_device: true
angular_controller: ComponentsCtrl
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/components/index.md'>
    Improve this doc
  </a>
</div>


# Components

TODO


<h2 id="action-sheets">Action Sheets</h2>

Action Sheets display a modal set of options to confirm or cancel an action.

```javascript
ActionSheet.open({
  buttons: [
    { text: 'Share This' },
    { text: 'Move' }
  ],
  destructiveText: 'Delete',
  titleText: 'Modify your album',
  cancelText: 'Cancel',
  cancel: function() {
    // add cancel code..
    console.log('Canceled');
  },
  destructiveButtonClicked: () => {
    console.log('Destructive clicked');
  },
  buttonClicked: function(index) {
    console.log('Button clicked', index);
    if(index == 1) { return false; }
    return true;
  }
}).then(actionSheet => {
  // Action sheet was created and opened
  this.actionSheet = actionSheet;
  // this.actionSheet.close() to close it programatically
})
```


<h2 id="animations">Animations</h2>

Ionic comes with a powerful Animation system based on the Web Animation API.

Unlike CSS animations, Ionic animations can be easily triggered based on events
and support interactive "scrubbing": the ability to manually step through an animation
such as during a drag gesture.

```ts

// Import it
import {Animation} from 'ionic/ionic';

export class MyComponent {

  // Create a new animation
  var ionitron = document.querySelector('#ionitron');
  var spin = new Animation(ionitron);

  // Add a CSS transform
  spin
    .from('transform', 'rotate(0deg)')
    .to('transform', 'rotate(360deg)')

  // Register the animation with your component
  this.animation.add(spin);

  // Start the animation when the play button is tapped
  play() {
    this.animation.play();
  }

}
```


<h2 id="buttons">Buttons</h2>

Buttons are an essential way to interact with an app. They are simple components in Ionic, and can be enhanced with a wide range of attributes.

### Basic Usage:

```html
<button primary>Button</button>
```

### Colors:

The `primary` property sets the color of the button. Ionic includes a number of default colors which can be easily overridden:

```html
<button primary>Primary</button>
<button secondary>Secondary</button>
<button danger>Danger</button>
<button stable>Stable</button>
<button light>Light</button>
<button dark>Dark</button>
```

### Shapes:

**Round:**

The `round` property will add rounded corners to a button:

```html
<button round>Round Button</button>
```

**Block:**

Adding `block` to a button will make the button take 100% of its parent's width. It will also add `display: block` to the button:

```html
<button block>Block Button</button>
```

**Full:**

Adding `full` to a button will also make the button take 100% of its parent's width. However, it will also remove the button's left and right borders. This style is useful when the button should stretch across the entire width of the display.

```html
<button full>Full Button</button>
```

**Floating Action Button:**

Adding `fab` to a button will turn it into a floating action button. This is a material design styled button that is meant to draw the user to take a specific action. Fab buttons are positioned absolutely, and their placement can be controlled by adding attributes like `fab-top` and `fab-left`. See the [button API spec](../../api/components/button/Button) for a full list of attributes.

```html
<button fab>FAB</button>
```

### Outlines:

To create outline buttons, just add the `outline` property:

```html
<button primary button-outline>Primary Outline</button>
<button secondary outline>Secondary Outline</button>
<button danger outline>Danger Outline</button>
<button stable outline>Stable Outline</button>
<button light outline>Light Outline</button>
<button dark outline>Dark Outline</button>
```

### Icons:

To add icons to a button, add an icon component inside of it:

```html
<!-- Float the icon left -->
<button>
    <icon home></icon>
    Left Icon
</button>

<!-- Float the icon right -->
<button>
    Right Icon
    <icon home></icon>
</button>

<!-- Only icon (no text) -->
<button>
    <icon home></icon>
</button>
```

### Sizes

Add the `large` attribute to make a button larger, or `small` to make it smaller:

```html
<button large>Large<button>
<button>Default<button>
<button small>Small<button>
```

<h2 id="cards">Cards</h2>

<p>
  Cards are a great way to display important pieces of content, and are quickly emerging as a core design pattern for apps. They're are a great way to contain and organize information, while also setting up predictable expectations for the user. With so much content to display at once, and often so little screen realestate, cards have fast become the design pattern of choice for many companies, including the likes of <a href="http://www.google.com/landing/now/" target="_blank">Google</a>, <a href="https://dev.twitter.com/docs/cards" target="_blank">Twitter</a>, and <a href="https://play.spotify.com/discover" target="_blank">Spotify</a>.
</p>
<p>
  For mobile experiences, Cards make it easy to display the same information visually across many different screen sizes. They allow for more control, are flexible, and can even be animated. Cards are usually placed on top of one another, but they can also be used like a "page" and swiped between, left and right.
</p>

Cards are primarily a CSS component. To use them, follow this structure:

```html
<ion-card>

  <ion-card-header>
    Card Header
  </ion-card-header>

  <ion-card-content>
    <!-- Add card content here! -->
  </ion-card-content>

</ion-card>
```

<h2 id="icons">Icons</h2>

Ionic comes with the same 700+ [Ionicons](http://ionicons.com/) icons we've all come to know and love.


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


<h2 id="lists">Lists</h2>

Lists are used to display rows of information, such as a contact list, playlist, or menu. Or maybe something crazy we don't even know exists yet!


```html
<ion-list>
  <ion-item *ng-for="#item of items" (^click)="itemSelected(item)">
    {{item.title}}
  </ion-item>
</ion-list>
```

By default, lists have an outside margin, to remove that add the `inset` property
to make the list flush with the parent container.

### Virtual Scrolling (Experimental)

Virtual Scrolling (previously known as Collection Repeat) makes it possible to scroll through
massive lists without any slow downs.

To enable it, set the `virtual` property on the list, as well as providing a
reference to an array of items, and the parent scroll element:

```html
<ion-content #content>
  <ion-list inset virtual [items]="items" [content]="content">
  </ion-list>
</ion-content>
```

<h2 id="menus">Menus</h2>

Menus control side content that slides in or is exposed under a sliding content area. Along with [Tabs](#tabs), Menus are a common way to [navigate](#navigation) through an app.

As mentioned in the [tabs section](#tabs), there are some situations where using Tabs might not be desirable.  For instance, if you have a large number of root views, making a TabBar impractical, a menu might be a better solution.  

Menus also allow you to return to root views at any point. They can be helpful if you have particularly deep navigation by allowing you to return to the top level of your app quickly.  

However, because Menus are not always and immediately visible on screen, they require more work for the user to use.  Make sure to weigh your priorities when designing the navigational structure of your app.

To use a Menu add an [`<ion-menu>`](link_to_menu) to your markup next to your root [`<ion-nav>`](link_to_nav):

```ts
@App({
  template: `
    <ion-menu [content]="content">
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <button ion-item (click)="openPage(loginPage)">
            Login
          </button>
          <button ion-item (click)="openPage(signupPage)">
            Signup
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-nav id="nav" #content [root]="loginPage"></ion-nav>`
})
class MyApp {}
```

The `<ion-menu>`s bound `[content]` property gets a [reference](angular_template_refs) to the [`<ion-nav>`](link_to_nav) in order to listen for drag events on the main content so it knows when to open/close.  

Then we have two buttons with click handlers that navigate to a new root view:

```ts
import {LoginPage} from 'login';
import {SignupPage} from 'signup';
...
class MyApp {
  constructor(ionicApp: IonicApp) {
    this.app = ionicApp;

    this.loginPage = LoginPage;
    this.signupPage = SignupPage;
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.app.getComponent('menu').close();

    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page);
  }
}
```

We inject the [`IonicApp`](link_to_ionic_app) service so we can use Ionic's [id system](link_to_id_system) to get references to the menu and the nav controller.  We then use the NavController's [`setRoot`](link_to_setRoot) function to clear the navigation stack and set the selected page as the new navigation root.

Menus can be a little more complicated, but they allow for many different configuration options.  For more examples and in depth configuration explanations, take a look at the [Menu API reference](link_to_menu_api) as well as the [Nav API reference](link_to_nav).


<h2 id="modals">Modals</h2>

Modals slide in off screen to display a temporary UI, often used for login or signup pages,
message composition, and option selection.

First, we need to create the class that will control our modal. Modals must extend
from the `Modal` Ionic class:

```javascript
@IonicComponent(Modal)
@View({
  template: `<ion-view id="my-modal">
    <ion-content padding>
      <button primary (click)="close()">Close</button>
    </ion-content>
  </ion-view>`,
  directives: [Content]
})
export class MyModal extends Modal {
  constructor() {
    super();
  }
}
```

To open a modal, we just call `Modal.open(MyModal)`:

```javascript
export class MyPage {
  onOpenClicked() {
    Modal.open(MyModal);
  }
}
```

<h2 id="navigation">Navigation</h2>

Navigation in Ionic is much more "native like" and is heavily modeled off of [the navigation features in iOS](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/Navigation.html).

Like native, URLs are not required for navigation.  Instead, views are pushed and popped on and off a navigation controller's view stack.  However, URLs are of course supported if you need them, using the [Angular2 router](https://angular.io/docs/js/latest/api/router/Router-class.html).

There are several ways to navigate throughout an Ionic app:

<h3 id="basic_navigation">Basic Navigation</h3>
The simplest way to navigate throughout your app is to create and initialize a new navigation controller, using [`<ion-nav>`](../api/components/nav/Nav/):

```ts
  import {StartPage} from 'start'

  @App({
    template: '<ion-nav [root]="rootPage"></ion-nav>'  
  })
  class MyApp {
    constructor(){
      // First view to push onto the stack
      this.rootPage = StartPage;
    }
  }
```

You can access the navigation controller you create by injecting it into any of your IonicViews:

```ts
@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>

    <ion-content>Hello World</ion-content>`
})
export class StartPage {
  constructor(navCtrl: NavController){ //<-- Well hello there
    this.nav = navCtrl;
  }
}
```

To navigate from one page to another simply push or pop a new view onto the stack:

```ts
@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>

    <ion-content>
      <button (click)="goToOtherPage()">
        Go to OtherPage
      </button>
    </ion-content>`
})
export class StartPage {
  constructor(navCtrl: NavController) {
    this.nav = navCtrl;
  }

  goToOtherPage(){
    //push another view onto the history stack
    //causing the nav controller to animate the new view in
    this.nav.push(OtherPage);
  }                           
}

@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Other Page</ion-title>
    </ion-navbar>

    <ion-content>I'm the other page!</ion-content>`
})
class OtherPage {}
```

If your view has an [`<ion-navbar>`](../api/components/nav-bar/NavBar/), a back button will automatically be added to it if it is not a root view.  

Alternatively, if you want to go back, but don't have a NavBar, you can pop the current view off the stack:

```ts
@IonicView({
  template: `
    <ion-content>
      <button (click)="goBack()">
        There's no place like home
      </button>
    </ion-content>`
})
class OtherPage {
  constructor(navCtrl: NavController) {
    this.nav = navCtrl;
  }
  goBack() {
    this.nav.pop();
  }
}
```
For more information on navigation controllers, check out the [Nav API reference](../api/components/nav/Nav/).

But what if you have several "root" or "top-level" views that don't have a parent-child relationship, but rather are siblings? You have two options: [Tabs](#tabs) and [Menu](#menus).


<h2 id="slides">Slides</h2>

Slides make it easy to create galleries, tutorials, and page-based layouts.

```html
<ion-slides>

  <ion-slide style="background-color: blue">
    <h2>Page 1</h2>
  </ion-slide>

  <ion-slide style="background-color: yellow">
    <h2>Page 2</h2>
  </ion-slide>

  <ion-slide style="background-color: pink">
    <h2>Page 3</h2>
  </ion-slide>

  <ion-pager>
  </ion-pager>

</ion-slides>
```

Slides take a number of configuration options on the `<ion-slides>` element:

<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Details</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        loop
      </td>
      <td>
        boolean
      </td>
      <td>
        Whether to loop at the beginning and end of the slides for a continuous experience.
      </td>
      <td>false</td>
    </tr>
    <tr>
      <td>
        index
      </td>
      <td>
        number
      </td>
      <td>
        The index to start on
      </td>
      <td>0</td>
    </tr>
    <tr>
      <td>
        bounce
      </td>
      <td>
        boolean
      </td>
      <td>
        Whether to slow down and bounce when reaching the beginning/end of the slides
      </td>
      <td>false</td>
    </tr>
  </tbody>
</table>

<h2 id="tabs">Tabs</h2>

Tabs are useful if you have a few "root" or "top-level" views.  They are obvious to the user and quickly accessed, since they are always on the screen.  However if screen space is limited, or you have a large number of root views, a [Menu](#menu) may be a better option.

To initialize Tabs, use [`<ion-tabs>`](link_to_tabs), with a child [`<ion-tab>`](link_to_tab) for each tab:

```ts
@App({
  template: `
    <ion-tabs>
      <ion-tab tab-icon="heart" [root]="tab1Root"></ion-tab>
      <ion-tab tab-icon="star" [root]="tab2Root"></ion-tab>
    </ion-tabs>`
})
class MyApp {
  constructor() {
    this.tab1Root = Tab1;
    this.tab1Root = Tab2;
  }
}
```

Individual tabs are just [`@IonicViews`](link_to_Ionic_View):

```ts
@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Heart</ion-title>
    </ion-navbar>
    <ion-content>Tab 1</ion-content>`
})
class Tab1 {}

@IonicView({
  template: `
    <ion-navbar *navbar>
      <ion-title>Star</ion-title>
    </ion-navbar>
    <ion-content>Tab 2</ion-content>`
})
class Tab2 {}
```

Notice that each [`<ion-tab>`](link_to_tabs) binds to a `[root]` property, just like the [`<ion-nav>`](link_to_ion_nav) example [above](#Parent_child).  That is because each [`<ion-tab>`](link_to_tabs) is really just a navigation controller.  This means that each tab has its own history stack, and [`NavControllers`](link_to_nav_controller) injected into children [`@IonicViews`](link_to_Ionic_View) of each tab will be unique to each tab:

```ts
@IonicView({
...
})
class Tab1 {
  constructor(nav: NavController) {
    // Id is 1, different navigation stack than tab 2
    console.log(nav.id)
  }
}

@IonicView({
...
})
class Tab2 {
  constructor(nav: NavController) {
    // Id is 2, different navigation stack than tab 1
    console.log(nav.id)
  }
}
```

For more information on tabs, check out the [Tabs API reference](link_to_Tabs).
