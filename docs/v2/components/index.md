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

<!-- <div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/components/index.md'>
    Improve this doc
  </a>
</div> -->


<h1 id="overview">Components</h1>

Ionic apps are made of high-level building blocks called components. Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards. Although components are primarily HTML and CSS, some components also include Javascript functionality. Check out the examples below to see what each component looks like, and to learn how to use it. Once you're familiar with the basics, head over to the [API docs](../api) for ideas on how to customize each components.


<h2 id="action-sheets" class="section-header">Action Sheets</h2>

Action Sheets slide up from the bottom edge of the device screen, and display a set of options with the ability to confirm or cancel an action. Action Sheets can sometimes be used as an alternative to menus, however, they **should not** be used for navigation.

The Action Sheet always appears above any other components on the page, and must be dismissed in order to interact with the underlying content. When it is triggered, the rest of the page darkens to give more focus to the Action Sheet options.



```typescript
ActionSheet.open({
  buttons: [
    { text: 'Share This' },
    { text: 'Move' }
  ],
  destructiveText: 'Delete',
  titleText: 'Modify your album',
  cancelText: 'Cancel',
  cancel: () => {...},
  destructiveButtonClicked: () => {...},
  buttonClicked: (index) => {...}
}).then(actionSheetRef => {
  // Action sheet was created and opened
  this.actionSheetRef = actionSheetRef;
  // this.actionSheetRef.close() to close it
})
```

<h2 id="buttons" class="section-header">Buttons</h2>

Buttons are an essential way to interact with and navigate through an app, and should clearly communicate what action will occur after the user taps them. Buttons are simple components in Ionic, can consist of text, an icon, or both, and can be enhanced with a wide range of attributes.

<ul class="docs-content">
  <li class="docs-content-header">Contents</li>
  <li class="docs-content-item"><a href="#buttons">Default Style</a></li>
  <li class="docs-content-item"><a href="#outline-buttons">Outline Style</a></li>
  <li class="docs-content-item"><a href="#clear-buttons">Clear Style</a></li>
  <li class="docs-content-item"><a href="#round-buttons">Round Buttons</a></li>
  <li class="docs-content-item"><a href="#block-buttons">Block Buttons</a></li>
  <li class="docs-content-item"><a href="#full-buttons">Full Buttons</a></li>
  <li class="docs-content-item"><a href="#button-sizes">Button Sizes</a></li>
  <li class="docs-content-item"><a href="#icon-buttons">Icon Buttons</a></li>
  <li class="docs-content-item"><a href="#floating-action-buttons">Floating Action Buttons</a></li>
  <li class="docs-content-item"><a href="#buttons-in-components">Buttons In Components</a></li>

</ul>


<ul class="docs-example">
  <li class="docs-example-content"><img src="/img/docs/basic-button-ex.png"></li>
  <li class="docs-example-conten"><img src="/img/docs/outline-button-ex.png"></li>
  <li class="docs-example-conten"><img src="/img/docs/clear-button-ex.png"></li>

</ul>

<h3 class="no-para">Basic Usage:</h3>

```html
<button>Button</button>
```

The `primary` property sets the color of the button. Ionic includes a number of default colors which can be easily overridden:

```html
<button light>Light</button>
<button>Primary</button>
<button secondary>Secondary</button>
<button danger>Danger</button>
<button dark>Dark</button>
```

<h3 class="section-nav" id="outline-buttons">Outline Style</h3>

To use the outline style for a button, just add the `outline` property:

```html
<button light outline>Light Outline</button>
<button outline>Primary Outline</button>
<button secondary outline>Secondary Outline</button>
<button danger outline>Danger Outline</button>
<button dark outline>Dark Outline</button>
```

<h3 class="section-nav" id="clear-buttons">Clear Style</h3>

To use the clear style for a button, just add the `clear` property:

```html
<button light clear>Light Clear</button>
<button clear>Primary Clear</button>
<button secondary clear>Secondary Clear</button>
<button danger clear>Danger Clear</button>
<button dark clear>Dark Clear</button>
```

<h3 class="section-nav" id="round-buttons">Round Buttons</h3>

To create a button with rounded corners, just add the `round` property:

```html
<button light round>Light Round</button>
<button round>Primary Round</button>
<button secondary round>Secondary Round</button>
<button danger round>Danger Round</button>
<button dark round>Dark Round</button>
```

<h3 class="section-nav" id="block-buttons">Block Buttons</h3>

Adding `block` to a button will make the button take 100% of its parent's width. It will also add `display: block` to the button:

```html
<button block>Block Button</button>
```

<h3 class="section-nav" id="full-buttons">Full Buttons</h3>
Adding `full` to a button will also make the button take 100% of its parent's width. However, it will also remove the button's left and right borders. This style is useful when the button should stretch across the entire width of the display.

```html
<button full>Full Button</button>
```

<h3 class="section-nav" id="button-sizes">Button Sizes</h3>

Add the `large` attribute to make a button larger, or `small` to make it smaller:

```html
<button small>Small<button>
<button>Default<button>
<button large>Large<button>
```

<h3 class="section-nav" id="icon-buttons">Icon Buttons</h3>

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

<h3 class="section-nav" id="floating-action-buttons">Floating Action Buttons</h3>

Adding `fab` to a button will turn it into a floating action button. This is a material design styled button that is meant to draw the user to take a specific action. Fab buttons are positioned absolutely, and their placement can be controlled by adding attributes like `fab-top` and `fab-left`. See the [button API spec](../api/components/button/Button) for a full list of attributes.

```html
<button fab>FAB</button>
```

<h3 class="section-nav" id="buttons-in-components">Buttons In Components</h3>

Although buttons can be used on their own, they can easily be used within other components. For example, buttons can be added to a list item:

```html
<ion-list>
  <ion-item>
  </ion-item>
</ion-list>
```


<h2 id="cards" class="section-header">Cards</h2>

<p>
  Cards are a great way to display important pieces of content, and are quickly emerging as a core design pattern for apps. They're are a great way to contain and organize information, while also setting up predictable expectations for the user. With so much content to display at once, and often so little screen realestate, cards have fast become the design pattern of choice for many companies, including the likes of <a href="http://www.google.com/landing/now/" target="_blank">Google</a>, <a href="https://dev.twitter.com/docs/cards" target="_blank">Twitter</a>, and <a href="https://play.spotify.com/discover" target="_blank">Spotify</a>.
</p>
<p>
  For mobile experiences, Cards make it easy to display the same information visually across many different screen sizes. They allow for more control, are flexible, and can even be animated. Cards are usually placed on top of one another, but they can also be used like a "page" and swiped between, left and right.
</p>


<ul class="docs-content">
  <li class="docs-content-header">Contents</li>
  <li class="docs-content-item"><a href="#cards">Basic Cards</a></li>
  <li class="docs-content-item"><a href="#card-header">Card Headers</a></li>
  <li class="docs-content-item"><a href="#card-list">Card Lists</a></li>
  <li class="docs-content-item"><a href="#card-image">Card Images</a></li>
  <li class="docs-content-item"><a href="#card-background">Background Images</a></li>
  <li class="docs-content-item"><a href="#advanced-cards">Advanced Cards</a></li>
</ul>

<h3 class="no-para">Basic Usage:</h3>

Cards are primarily a CSS component. To use add a basic card, follow this structure:

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

<h3 class="section-nav" id="card-header">Card Headers</h3>
Just like a normal page, cards can be customized to include headers. To add use add a card header, add the `<ion-card-header>` component inside of your card:

```html
<ion-card>
  <ion-card-header>
    Header
  </ion-card-header>
  <ion-card-content>
    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.
  </ion-card-content>
</ion-card>
```



<h3 class="section-nav" id="card-list">Lists In Cards</h3>
A card can contain a list of items. To create a card list, add elements with the `ion-item` attribute inside of your card:

```html
<ion-card>
  <ion-card-header>
    Explore Nearby
  </ion-card-header>
  <a href="#" ion-item>
    <icon cart item-left></icon>
    Shopping
  </a>
  <a href="#" ion-item>
    <icon medical item-left></icon>
    Hospital
  </a>
</ion-card>
```


<h3 class="section-nav" id="card-image">Images In Cards</h3>
Images often vary in size, so it is important that they adopt a consistent style throughout your app. Images can easily be added to cards. Adding an image to a card will give the image a constant width, and a variable height. Lists, headers, and other card components can easily be combined with image cards. To add an image to a card, use the following markup:

```html
<ion-card>
  <img src="img/nin-live.png"/>
  <ion-card-content>
    <h2 class="card-title">
      Nine Inch Nails Live
    </h2>
    <p>
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
    </p>
  </ion-card-content>
</ion-card>
```

<h3 class="section-nav" id="card-background">Background Images</h3>
*Coming soon.*


<h2 id="advanced-cards" class="section-header">Advanced Cards</h2>

The styles from different types of cards can be combined to create advanced cards. Cards can also receive custom CSS. Below are a few advanced cards that have been built by combining various card attributes with a small amount of custom CSS.


<ul class="docs-content">
  <li class="docs-content-header">Contents</li>
  <li class="docs-content-item"><a href="#card-advanced-social">Social Cards</a></li>
  <li class="docs-content-item"><a href="#card-advanced-map">Map Cards</a></li>
  <li class="docs-content-item"><a href="#card-advanced-weather">Weather Cards</a></li>
</ul>

<h3 class="section-nav" id="card-advanced-social">Social Cards</h3>
*Coming soon.*

<h3 class="section-nav" id="card-advanced-map">Map Cards</h3>
*Coming soon.*

<h3 class="section-nav" id="card-advanced-weather">Weather Cards</h3>
*Coming soon.*

<h2 id="checkbox" class="section-header">Checkbox</h2>

A checkbox is an input component that holds a *boolean* value. Checkboxes are no different than HTML checkbox inputs. However, like other Ionic components, checkboxes are styled differently on each platform. Use the `checked` attribute to set the default value, and the `disabled` attribute to disable the user from changing the value:

```html
<ion-checkbox dark checked="true">
  Daenerys Targaryen
</ion-checkbox>

<ion-checkbox disabled="true">
  Arya Stark
</ion-checkbox>
```

<h2 id="grid" class="section-header">Grid</h2>

Ionic's grid system is based on [flexbox](http://www.w3.org/TR/css3-flexbox/), a CSS feature supported by all devices that Ionic supports. The grid is composed of two units &mdash; _rows_ and _columns_. Columns will expand to fill their row, and will resize to fit additional columns.

Use the `offset` attribute on a column to set its percent offset from the left (eg: `offset-25`). To change how columns in a row align vertically, add the `center` or `baseline` attribute to an `<ion-row>`.

<h2 id="icons" class="section-header">Icons</h2>

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

```typescript
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


<h2 id="inputs" class="section-header">Inputs</h2>

Inputs are essential for collecting and handling user input in a secure way. They should follow styling and interaction guidelines for each platform, so that they are intuitive for users to interact with. Ionic uses Angular 2’s form library, which can be thought of as two dependent pieces, **Controls**, and **Control Groups**.

Each input field in a form has a **Control**, a function that binds to the value in the field, and performs validation. A **Control Group** is a collection of Controls. Control Groups handle form submission, and provide a high level API that can be used to determine whether the entire form is valid.

A number of attributes that can be used to style forms and their various input fields are listed below. For more info on form logic, check out the [Inputs API docs](../api/components/text-input/TextInput/).


<ul class="docs-content">
  <li class="docs-content-header">Contents</li>
  <li class="docs-content-item"><a href="{{components_link}}#fixed-inline-labels">Fixed Inline Labels</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#floating-labels">Floating Labels</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#inline-labels">Inline Labels</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#inset-labels">Inset Labels</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#placeholder-labels">Placeholder Labels</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#stacked-labels">Stacked Labels</a></li>
</ul>

<h3 class="section-nav" id="fixed-inline-labels">Fixed Labels</h3>

Use `fixed-label` to place a label to the left of the input element. When the user enters text, the label does not hide. The user's input will align on the same position, regardless of the length of the label. Note that there's nothing stopping you from also using a placeholder label too.

```html
<ion-list>

  <ion-input fixed-label>
    <ion-label>Username</ion-label>
    <input type="text" value="">
  </ion-input>

  <ion-input fixed-label>
    <ion-label>Password</ion-label>
    <input type="password" value="">
  </ion-input>

</ion-list>
```


<h3 class="section-nav" id="floating-labels">Floating Labels</h3>

Floating labels are just like [Stacked Labels](#forms-stacked-labels), except that their labels animate, or "float" up when text is entered in the input. Each `<ion-input>` should have the `floating-label` attribute assigned.

Enter text in the example to the right to see the floating labels in action.


```html
<ion-list>

  <ion-input floating-label>
    <ion-label>Username</ion-label>
    <input type="text" value="">
  </ion-input>

  <ion-input floating-label>
    <ion-label>Password</ion-label>
    <input type="password" value="">
  </ion-input>

</ion-list>
```

<h3 class="section-nav" id="inline-labels" class="section-header">Inline Labels</h3>

If a label attribute is not provided, an `<ion-input>` component will default to using an inline label. When the user enters text, the label does not hide. Note that there's nothing stopping you from also using a placeholder as well.

```html
<ion-list>

  <ion-input>
    <ion-label>Username</ion-label>
    <input type="text" value="">
  </ion-input>

  <ion-input>
    <ion-label>Password</ion-label>
    <input type="password" value="">
  </ion-input>

</ion-list>

<div padding>
  <button block>Sign In</button>
</div>
```
<h3 class="section-nav" id="inset-labels" class="section-header">Inset Labels</h3>

By default each input item will fill 100% of the width of its parent element (the list). However, you can inset the list by adding the `inset` attribute.

```html
<ion-list inset>

  <ion-input>
    <ion-label>Username</ion-label>
    <input type="text" value="">
  </ion-input>

  <ion-input>
    <ion-label>Password</ion-label>
    <input type="password" value="">
  </ion-input>

</ion-list>
```

<h3 class="section-nav" id="placeholder-labels" class="section-header">Placeholder Labels</h3>

Add the `placeholder` attribute to an `<input>` element to simulate the input's label. When the user begins to enter text into the input, the placeholder label will be hidden.

```html
<ion-list>

  <ion-input>
    <input type="text" placeholder="Username">
  </ion-input>

  <ion-input>
    <input type="password" placeholder="Password">
  </ion-input>

</ion-list>

```

<h3 class="section-nav" id="stacked-labels" class="section-header">Stacked Labels</h3>

A stacked label will always appear on top of the input. Each `<ion-input>` should have the `stacked-label` attribute.
You can also add a placeholder so that users have a hint of what type of text the input is looking for.

```html
<ion-list>

  <ion-input stacked-label>
    <ion-label>Username</ion-label>
    <input type="text">
  </ion-input>

  <ion-input stacked-label>
    <ion-label>Password</ion-label>
    <input type="password">
  </ion-input>

</ion-list>
```

<h2 id="lists" class="section-header">Lists</h2>

Lists are used to display rows of information, such as a contact list, playlist, or menu. Or maybe something crazy we don't even know exists yet!

<ul class="docs-content">
  <li class="docs-content-header">Contents</li>
  <li class="docs-content-item"><a href="{{components_link}}#lists">Basic Lists</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#list-dividers">List Dividers</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#inset-list">Inset List</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#list-headers">List Headers</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#icon-list">Icon List</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#avatar-list">Avatar List</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#multiline-list">Multiline List</a></li>
  <li class="docs-content-item"><a href="{{components_link}}#thumbnail-list">Thumbnail List</a></li>
</ul>

<h3 class="section-nav" id="list-lines">Basic Usage (Default)</h3>

By default, all lists will be styled with divider lines:

```html
<ion-list>
  <ion-item *ng-for="#item of items" (click)="itemSelected(item)">
    {{item.title}}
  </ion-item>
</ion-list>
```


<h3 class="no-para" id="list-no-lines">Basic Usage (No Lines)</h3>

Adding the `no-lines` attribute will hide the dividers between list items:

```html
<ion-list no-lines>
  <ion-item *ng-for="#item of items" (click)="itemSelected(item)">
    {{item.title}}
  </ion-item>
</ion-list>
```

<h3 class="section-nav" id="inset-list">Inset List</h3>

By default, lists have an outside margin, to remove that add the `inset` property to make the list flush with the parent container.

<h3 class="section-nav" id="list-headers">List Headers</h3>
*Coming soon.*

<h3 class="section-nav" id="icon-list">Icon List</h3>

Adding [icons](#icons) to list items is a great way to hint about the contents of each item. The position of the icon can be set using the `item-left` and `item-right` attributes:


```html
<ion-list>

  <ion-item>
    <icon leaf item-left></icon>
    Herbology
    <icon rose item-right></icon>
  </ion-item>

</ion-list>
```


<h3 class="section-nav" id="avatar-list">Avatar List</h3>

Item avatars showcase an image larger than an icon, but smaller than a thumbnail. To use an avatar, add an `<ion-avatar>` component inside of an item. The position of the avatar can be set using the `item-left` and `item-right` attributes:

```html
<ion-list>

  <ion-item>
    <ion-avatar item-left>
      <img src="img/avatar-cher.png">
    </ion-avatar>
    <h2>Cher</h2>
    <p>Ugh. As if.</p>
  </ion-item>

</ion-list>
```

<h3 class="section-nav" id="multiline-list">Multiline List</h3>

Multiline lists are identical to regular lists, except they can multiple lines of text. When multiple header or paragraph tags are added to an `<ion-item>`, the item will automatically adjust its height to fit the new lines. Below is an example with three lines of text:

```html
<ion-list>

  <ion-item>
    <ion-avatar item-left>
      <img src="img/avatar-finn.png">
    </ion-avatar>
    <h2>Finn</h2>
    <h3>Don't Know What To Do!</h3>
    <p>I've had a pretty messed up day. If we just...</p>
  </ion-item>

</ion-list>
```


<h3 class="section-nav" id="thumbnail-list">Thumbnail List</h3>

Item thumbnails showcase an image that takes up the entire height of an item. To use a thumbnail, add an `<ion-thumbnail>` component inside of an item. The position of the thumbnail can be set using the `item-left` and `item-right` attributes:

```html
<ion-list>

  <ion-item>
    <ion-thumbnail item-left>
      <img src="img/thumbnail-totoro.png">
    </ion-thumbnail>
    <h2>My Neighbor Totoro</h2>
    <p>Hayao Miyazaki • 1988</p>
    <button clear item-right>View</button>
  </ion-item>

</ion-list>
```


<h2 id="menus" class="section-header">Menus</h2>
_For more in depth information on Menus, see the [Menu API reference](../api/components/menu/Menu)._

Menu is a side-menu navigation that can be dragged out or toggled to show. Menu supports two display styles currently: overlay, and reveal. Overlay is the tradtional Android drawer style, and Reveal is the traditional iOS style. By default, Menu will adjust to the correct style for the platform.

Along with [Tabs](#tabs), Menus are a common way to navigate through an app if you have several "root" or "top-level" pages. For the basics of navigating through an Ionic app, see the [Navigation section](#navigation).

For situations where using Tabs might not be desirable, for example if you have a large number of root pages (making a TabBar impractical), a menu might be a better solution.

Menus also allow you to return to root pages at any point. This can be helpful if you have particularly deep navigation by allowing you to return to the top level of your app quickly.

However, because Menus are not always and immediately visible on screen, they require more work for the user than Tabs. Make sure to weigh your priorities when designing the navigational structure of your app.

To use a Menu add an [`<ion-menu>`](../api/components/menu/Menu/) to your markup next to your root [`<ion-nav>`](../api/components/nav/Nav/):

```typescript
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

The `<ion-menu>`s bound `[content]` property gets a [reference](https://angular.io/docs/ts/latest/guide/user-input.html#local-variables) to the `<ion-nav>` in order to listen for drag events on the main content so it knows when to open/close.

Then in our [@App](../api/config/App/) component we have two buttons with click handlers that navigate to a new root page:

```typescript
import {LoginPage} from 'login';
import {SignupPage} from 'signup';

@App({
...
})
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

We inject the [`IonicApp`](../api/components/app/IonicApp/) service so we can use Ionic's [id system](../api/components/app/IdRef) to get references to the menu and the nav controller.  We then use the NavController's [`setRoot`](../api/components/nav/NavController/#setRoot) function to clear the navigation stack and set the selected page as the new navigation root.

Menus can be a little more complicated, but they allow for many different configuration options.  For example, the Google Maps app uses a drawer style Menu that exposes a list of items that open [Modals](#modals) over the main map content area and toggle settings on and off.

For more information on Menus, check out the [Menu API reference](../api/components/menu/Menu/).


<h2 id="modals" class="section-header">Modals</h2>

Modals slide in off screen to display a temporary UI, often used for login or signup pages,
message composition, and option selection.

First, we need to add the `<ion-overlay>` component to our root `app.html` template. This only needs to be done once, no matter how many modal pages our app contains:

```html
<ion-overlay></ion-overlay>
```

Next, we need to create the class that will control our modal. Let's import `Modal`:

```typescript
import {Modal} from 'ionic/ionic';
```

Next, let's create our modal and define add its template:

```typescript
@Page({
  template: `
  <ion-content padding>
    <h2>I'm a modal!</h2>
    <button (click)="close()">Close</button>
  </ion-content>`
})
class MyModal {
  constructor() {
  }
}
```


Finally, let's add the code that will open our Modal:

```typescript
class MyPage {
  constructor(modal: Modal){
    this.modal = modal;
  }
  showModal() {
    this.modal.open(MyModal);
  }
}
```

The `modal.open()` function can also receive an object as the second argument that will be passed to the modal. See the [Modal API docs](/docs/v2/api/components/modal/Modal/) for more information.

<h2 id="modes" class="section-header">Modes</h2>

Modes allow you to configure an app's interaction and behavior. Like platform continuity in V1, V2's modes go a step further by allowing for completely different experience based on the current platform.
Modes can be configured at several levels, app wide, platform specific, or component specific.


### App Wide

Say you wanted to have material design enable for both Android and iOS. To do this, you use the `config` object on your `@App` annotation.

```typescript
import {App, Config} from 'ionic/ionic'

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {
    mode: 'md'
  }
})
```
This will enable material design mode for both iOS and android.

### Platform Level Configurations

While app-wide mode change are easy, you may wanted to only change a few properties. To do this, you could pass the mode you want to target and configure it that way

```typescript
import {App, Config} from 'ionic/ionic'
@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {
    platforms: {
      ios: {
        iconMode: 'md',
        menuType: 'overlay',
      }
    }
  }
})
```

Now on iOS, we'll only set the icon mode and menu reveal for material design.
You could also remove the platform/ios object and just keep `iconMode` and `menuType` to set these across platforms

### Component Level Configurations

You could also configure certain properties based on the markup you use.

```typescript
import {App, Config} from 'ionic/ionic'
@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {
    tabbarPlacement: 'bottom'
  }
})
```

But in our tabs markup, we can override that

```html
<ion-tabs tabbar-placement="top">
  ---
</ion-tabs>
```

The markup level config will take precedent over the original config object


<h2 id="navigation" class="section-header">Navigation</h2>
_For more in depth information on navigation, see the [Nav API reference](../api/components/nav/Nav)._

Navigation is how apps move between pages in an app. Ionic's navigation follows standard native animation conceps, like [those in iOS](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/Navigation.html).

Like native apps, URLs are not required for navigation.  Instead, pages are pushed and popped on and off a navigation controller's page stack.  URLs can be used to link back to unique, important parts of your app ("deeplinking") but don't define navigation as your app runs.

There are several ways to navigate throughout an Ionic app:

<h3 id="basic_navigation">Basic Navigation</h3>
The simplest way to navigate throughout your app is to create and initialize a new navigation controller, using [`<ion-nav>`](../api/components/nav/Nav/):

```typescript
  import {StartPage} from 'start'

  @App({
    template: '<ion-nav [root]="rootPage"></ion-nav>'
  })
  class MyApp {
    constructor(){
      // First page to push onto the stack
      this.rootPage = StartPage;
    }
  }
```

You can access the navigation controller you create by injecting it into any of your Pages:

```typescript
@Page({
  template: `
    <ion-navbar *navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>

    <ion-content>Hello World</ion-content>`
})
export class StartPage {
  constructor(nav: NavController){
    this.nav = nav;
  }
}
```

To navigate from one page to another simply push or pop a new page onto the stack:

```typescript
@Page({
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
  constructor(nav: NavController) {
    this.nav = nav;
  }

  goToOtherPage(){
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.nav.push(OtherPage);
  }
}

@Page({
  template: `
    <ion-navbar *navbar>
      <ion-title>Other Page</ion-title>
    </ion-navbar>

    <ion-content>I'm the other page!</ion-content>`
})
class OtherPage {}
```

If your page has an [`<ion-navbar>`](../api/components/nav-bar/NavBar/), a back button will automatically be added to it if it is not a root page.

Alternatively, if you want to go back, but don't have a NavBar, you can pop the current page off the stack:

```typescript
@Page({
  template: `
    <ion-content>
      <button (click)="goBack()">
        There's no place like home
      </button>
    </ion-content>`
})
class OtherPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
  goBack() {
    this.nav.pop();
  }
}
```
For more information on navigation controllers, check out the [Nav API reference](../api/components/nav/Nav/).

But what if you have several "root" or "top-level" pages that don't have a parent-child relationship, but rather are siblings? You have two options: [Tabs](#tabs) and [Menu](#menu).


<h2 id="popups" class="section-header">Popups</h2>
Popups are a great way to require the user to take a specific action. They can provide the user with important information, and require them to make a decision. Ionic provides three types of popups &mdash; **alert**, **confirm**, and **prompt**. Each popup is meant to be used in a different scenario.

The **alert** popup simply displays a message to the user, and provides a button to close the popup. This popup is useful for displaying important messages (eg: *"Your battery is low!"*).

The **confirm** popup displays a message, and gives the user the option to either cancel or confirm their action. This popup is useful when the user wants to perform an uncommon, but important action (eg: *"Are you sure you'd like to delete your account?"*).

The **prompt** popup displays a message, and requires to user to input some data. This popup is useful when you need important information from the user in order to continue (eg: *"Please re-enter your password to continue."*).

Popups are quite flexible, and can easily be customized. Check out the [API docs](../api/components/popup/Popup) for more information.


<h2 id="radio" class="section-header">Radio</h2>

Like the [checkbox](#checkbox), a radio is an input component that holds a *boolean* value. Under the hood, radios are no different than HTML radio inputs. However, like other Ionic components, radios are styled differently on each platform. Unlike checkboxes, radio components form a group, where only one radio can be selected at a time. Use the `checked` attribute to set the default value, and the `disabled` attribute to disable the user from changing the value:

```html
<ion-radio-group>

  <ion-header>
    Language
  </ion-header>

  <ion-radio checked="true">
    Go
  </ion-radio>

  <ion-radio>
    Rust
  </ion-radio>

</ion-radio-group>
```

<h2 id="range" class="section-header">Range</h2>
*Coming soon.*


<h2 id="search" class="section-header">Search</h2>

A search bar binds to a model, and calls a function to update the page when the model is changed:

```html
<ion-searchbar [(ng-model)]="searchQuery"></ion-searchbar>
<ion-list #list>
  <ion-item *ng-for="#item of getItems()">
    {{item}}
  </ion-item>
</ion-list>
```

Note that in this example, the search bar binds to the `searchQuery` variable. The `getItems()` function is called when this variable changes, which updates the cities that are displayed. Although this example filters the list based on the search input, search bar can be used in many different scenarios:

```typescript
@Page({
  templateUrl: 'search/template.html',
})
class SearchPage{
  constructor() {
    this.searchQuery = '';
    this.items = [
      'Amsterdam',
      'Bogota',
      ...
    ];
  }

  getItems() {
    var q = this.searchQuery;
    if(q.trim() == '') { return this.items; }
    return this.items.filter((v) => {
      if(v.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    })
  }
}
```

<h2 class="section-header" id="segment">Segment</h2>


Use the segment to control to use radio selections.

```html
<div padding>
  <ion-segment [(ng-model)]="pet">
    <ion-segment-button value="kittens">
      Kittens
    </ion-segment-button>
    <ion-segment-button value="puppies">
      Puppies
    </ion-segment-button>
  </ion-segment>
</div>

<div [ng-switch]="pet">
  <ion-list *ng-switch-when="'puppies'">
    <ion-item>
      <ion-thumbnail item-left>
        <img src="img/thumbnail-puppy-1.jpg">
      </ion-thumbnail>
      <h2>Ruby</h2>
    </ion-item>
    ...
  </ion-list>

  <ion-list *ng-switch-when="'kittens'">
    <ion-item>
      <ion-thumbnail item-left>
        <img src="img/thumbnail-kitten-1.jpg">
      </ion-thumbnail>
      <h2>Luna</h2>
    </ion-item>
    ...
  </ion-list>
</div>
```


<h2 id="select" class="section-header">Select</h2>
*Coming soon.*


<h2 id="slides" class="section-header">Slides</h2>

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

<h2 id="switch" class="section-header">Switch</h2>
*Coming soon.*


<h2 id="tabs" class="section-header">Tabs</h2>

_For more details on the Tabs component, see the [Tabs API reference](../api/components/tabs/Tabs/), and the [Tab API reference](../api/components/tabs/Tab/) for information on configuring the individual Tab components it contains._

Tabs powers a multi-tabbed interface with a Tab Bar and a set of "pages" that can be tabbed through.

For iOS, tabs will appear at the bottom of the screen. For Android, tabs will be at the top of the screen, below the nav-bar. This follows each platform's design specification, but can be configured with [Config](../api/config/Config/).

Tabs are useful if you have a few "root" or "top-level" pages.  They are obvious to the user and quickly accessed, since they are always on the screen.  However if screen space is limited, or you have a large number of root pages, a [Menu](#menu) may be a better option.


<ul class="docs-content">
  <li class="docs-content-header">Contents</li>
  <li class="docs-content-item"><a href="#tabs">Text Tabs</a></li>
  <li class="docs-content-item"><a href="#tabs-icon">Icon Tabs</a></li>
  <li class="docs-content-item"><a href="#tabs-icon-text">Text and Icon Tabs</a></li>
</ul>

### Basic Usage


To initialize Tabs, use [`<ion-tabs>`](../api/components/tabs/Tabs/), with a child [`<ion-tab>`](../api/components/tabs/Tab/) for each tab:

```typescript
@App({
  template: `
    <ion-tabs>
      <ion-tab tab-icon="heart" [root]="tab1"></ion-tab>
      <ion-tab tab-icon="star" [root]="tab2"></ion-tab>
    </ion-tabs>`
})
class MyApp {
  constructor() {
    this.tab1 = Tab1;
    this.tab1 = Tab2;
  }
}
```

Individual tabs are just [`@Pages`](../api/config/Page/):

```typescript
@Page({
  template: `
    <ion-navbar *navbar>
      <ion-title>Heart</ion-title>
    </ion-navbar>
    <ion-content>Tab 1</ion-content>`
})
class Tab1 {}

@Page({
  template: `
    <ion-navbar *navbar>
      <ion-title>Star</ion-title>
    </ion-navbar>
    <ion-content>Tab 2</ion-content>`
})
class Tab2 {}
```

Notice that each `<ion-tab>` binds to a `[root]` property, just like [`<ion-nav>`](../api/components/nav/Nav/) in the [Navigation](#navigation) section above.  That is because each `<ion-tab>` is really just a navigation controller.  This means that each tab has its own history stack, and [`NavController instances injected`](../api/components/nav/NavController/#injecting_nav_controller) into children `@Pages` of each tab will be unique to each tab:

```typescript
@Page({
...
})
class Tab1 {
  constructor(nav: NavController) {
    // Id is 1, nav refers to Tab1
    console.log(nav.id)
  }
}

@Page({
...
})
class Tab2 {
  constructor(nav: NavController) {
    // Id is 2, nav refers to Tab2
    console.log(nav.id)
  }
}
```

<h3 class="section-nav" id="tabs-icon">Icon Tabs</h3>

To add an icon inside of a tab, use the `tab-icon` attribute. This attribute can be passed the name of any [icon](#icon):

```typescript
@Page({
  template: `
  <ion-navbar *navbar>
    <ion-title>Tabs</ion-title>
  </ion-navbar>
  <ion-content>
  </ion-content>`,
})
class TabContentPage {
  constructor() {
  }
}

@Page({
  template: `
  <ion-tabs>
    <ion-tab tab-icon="contact" [root]="tab1"></ion-tab>
    <ion-tab tab-icon="compass" [root]="tab2"></ion-tab>
    <ion-tab tab-icon="analytics" [root]="tab3"></ion-tab>
    <ion-tab tab-icon="settings" [root]="tab4"></ion-tab>
  </ion-tabs>`
})
export class TabsIconPage {
  constructor() {
    this.tab1 = TabContentPage;
    this.tab2 = TabContentPage;
    ...
  }
}
```

<h3 class="section-nav" id="tabs-icon-text">Icon and Text</h3>

To add text and an icon inside of a tab, use the `tab-icon` and `tab-title` attributes:

```typescript
@Page({
  template: `
  <ion-navbar *navbar>
    <ion-title>Tabs</ion-title>
  </ion-navbar>
  <ion-content>
  </ion-content>`
})
class TabsTextContentPage {
  constructor() {
  }
}

@Page({
  template: `
  <ion-tabs>
    <ion-tab tab-icon="water" tab-title="Water" [root]="tab1"></ion-tab>
    <ion-tab tab-icon="leaf" tab-title="Life" [root]="tab2"></ion-tab>
    <ion-tab tab-icon="flame" tab-title="Fire" [root]="tab3"></ion-tab>
    <ion-tab tab-icon="magnet" tab-title="Force" [root]="tab4"></ion-tab>
  </ion-tabs>`
})
export class TabsTextPage {
  constructor() {
    this.tab1 = TabsTextContentPage;
    this.tab2 = TabsTextContentPage;
    ...
  }
}
```

For more information on tabs, check out the [Tabs API reference](../api/components/tabs/Tabs/).
