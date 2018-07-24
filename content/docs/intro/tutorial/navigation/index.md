---
layout: fluid/docs_base
category: intro
id: tutorial
subid: tutorial
title: Navigating - Tutorial
header_sub_title: Getting Started with Ionic
next_page_title: Component Docs
next_page_link: /docs//components
prev_page_title: Adding Pages
prev_page_link: /docs//intro/tutorial/adding-pages/
---

<h1 class="title">Navigating to Pages</h1>

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/intro/tutorial/navigation/index.md'>
Improve this doc
</a>

Recall from the previous section we had a function inside our `ListPage` class that looked something like this:

```typescript
itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
}
```

Here we are referencing a class called `ItemDetailsPage`, which is another page included in the tutorial starter project. We can use it here because of the import statement at the top of `src/pages/list/list.ts`:

```typescript
...
import { ItemDetailsPage } from '../item-details/item-details';
```

Let's revisit our app in the browser. When we tap an item it will navigate to the item details page using the code above. As a bonus, Ionic automatically adds a back button to the pushed view.
>See the [Navbar documentation](../../../api/components/toolbar/Navbar) for options to hide or change the back button text.

### How It Works

Navigation in Ionic works like a simple stack, where we `push` new pages onto the top of the stack, which takes us forwards in the app and shows a back button. To go backwards, we `pop` the top page off. Since we set `this.navCtrl` in the constructor, we can call `this.navCtrl.push()`, and pass it the page we want to navigate to. We can also pass it an object containing data we would like to pass to the page being navigated to. Using `push` to navigate to a new page is simple, but Ionic's [navigation system](../../../components/#navigation) is very flexible. Check out the [navigation docs](../../../components/#navigation) to see more advanced navigation examples.


> When it comes to URLs, the latest Ionic works a bit differently than Ionic v1.x. Instead of using URLs to navigate, we use them to make sure we can always come back to a page (on app launch, for example).  This means we aren't limited to using `href` to navigate around. However,  we still have the option to use a URL to navigate to a page when necessary.


### Next Steps

*Nice job*! You've made it through the tutorial and are on your way towards *Ionic mastery*! If you're looking for an overview on what else is included with Ionic, check out the [Component docs](../../../components). To learn about using device APIs, head over to the [Native section](../../../native/). If at any point you need help, check out our [developer resources section](../../../developer-resources/), or ask a question on [the forums](http://forum.ionicframework.com/).
