---
layout: default
title: New Concepts
---
<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/ui/new-concepts.md'>
    Improve this doc
  </a>
</div>

Ionic 2 brings even more parity to native SDKs like iOS and Android for the web stack.

With that in mind, some core components (like routing) work differently in v2 than v1.

### Navigation

In Ionic 1, we used UI Router with URL routing heavily to define navigation in your app.

The overwhelming feedback from Ionic 1 developers is that the routing and navigation
system was too difficult to use in practice. It was challenging to correctly map
URLs to views, and the navigation system didn't give the developer enough fine-grained control.

With v2, we've taken a more native-friendly navigation approach with a simpler `push/pop` system.

For example, in v1 we'd create a `ContactDetail` page like this:

```javascript
$stateProvider
  .state('contact', {
    url: "/contact/:contactId",
    templateUrl: "templates/contact.html",
    controller: 'ContactCtrl'
  });
```

Then, to navigate to this, you'd do `<a ui-sref="contact({contact: contact})">{{contact.name}}</a>`

We'd also need to make sure we wired up the current `<ion-nav-view name>` which was considerably more
challenging when using nested navigation. Last but not least, we'd need to define and implement `ContactCtrl`.

In v2, this works a bit differently. Instead of navigating through URLs and routing (which is still
  possible as we will see a bit later), we push and pop views onto the stack:

`<ion-item (click)="showContact(contact)">{{contact.name}}</ion-item>``

```javascript
class ContactsPage {
  showContact(contact) {
    this.nav.push(ContactDetail, {
      contact: contact
    });
  }
}
```

There are also shortcut directives we can use for links much like `ui-sref`, such as
`nav-push` and `nav-pop` which can be used like this:

```html
<button [nav-push]="myContactComponent"
  [push-data]="contact">See contact</button>
```

```html
<button nav-pop>Go back</button>
```

The really nice thing about this is you can infinitely navigate now (for example,
  you can keep pushing new `ContactDetail` pages onto the stack), and
control things like animation and the history stack the user has to navigate through.

You can also navigate inside of practically any container. For example, a modal window that slides up
can have its own navigation, and two split views can navigate independently, something
that was not possible before.

It also makes it incredibly easy to navigate to the same page in completely different
contexts. For example, if you were building something similar to Apple's App Store
app where there are multiple tabs at the bottom and each tab navigates independently,
you could navigate to an `AppDetail` page from any tab, which is exactly how the App Store app works.

For example, here's how the Minecraft `AppDetail` page looks in different tabs:

<img src="http://ionic-io-assets.s3.amazonaws.com/images/mc1.PNG" width="300" style="width: 300px">
<img src="http://ionic-io-assets.s3.amazonaws.com/images/mc2.PNG" width="300" style="width: 300px">

Notice the page is exactly the same, but the way the user navigated to it is different.

This hits on a core change in Ionic 2: __the history state of the app is now your
responsibility as a developer.__ It's up to you to make sure navigation provides
a good UX, but you have the freedom to navigate as you see fit.

### Routing

Routing has changed significantly in Ionic 2 to make it easier to fully control the
history UX for end users.

In Ionic 2, routing is used more for breadcrumbs and loading state than it is for active
navigation or full history reconstruction. For example, a URL provides a way to deep link to different views (or pages) of
your app (for example, loading the camera view in Instagram from another app),
but in Ionic 2 changing the location bar does not necessarily change the history the user
experiences in the app (a major source of complexity in Ionic 1). Likewise, there
are many paths that lead to a single URL, which was not really possible in v1.

Using the Minecraft example from above, the URL could be `/app/id479516143`, though
what the user sees in the entire UI for the back button, active tab, etc. could vary wildly
depending on how the user navigated.

The point is, that URL provides a way for us to come back to that page in the future (for example,
through a remote app launch), but does not force us to rebuild an entire history stack to get there.

Here's an example of routing in Ionic 2, though please note there is some boilerplate
we will be simplifying in the near future:

```javascript
@Component({
  selector: 'ion-view',
  lifecycle: [onInit]
})
@Page({
  template: ...
  directives: [NavbarTemplate, Navbar, NavPush, Content]
})
export class ContactDetail {
  constructor(nav: NavController) {
    Router.setNavController(nav);

    this.nav = nav;
  }

  viewLoaded() {
    this.router = FirstPage.router.invoke(this);
  }
}

new Routable(FirstPage, {
  url: '/first-page'
})
```

The `Routable` mixin (which will soon be part of a convenient decorator) tells the routing system
that the `ContactDetail` view should be mapped to the `/first-page` URL. If we launched the app
with this URL, the `FirstPage` would get pushed onto the stack.

Whenever `FirstPage` is navigated to (more specifically, when its `viewWillEnter` lifecycle method triggers),
the address bar is updated to be `/first-page`.
