---
layout: v2_fluid/docs_base
category: getting-started
id: tutorial
subid: tutorial
title: Ionic 2 Guide | Navigating
header_title: Navigating - Ionic 2 Guide
header_sub_title: Ionic 2 Developer Preview
---

<h1 class="title">Navigating to Pages</h1>

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/docs/v2/getting-started/tutorial/navigation/index.md'>
Improve this doc
</a>


Recall from the previous section we had a function inside our `ListPage` class that looked something like this:

```ts
itemTapped(event, item) {
    console.log('You selected:', item.title);
}
```

Let's improve it so it navigates to a new page:

```ts
itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
}
```

You might have noticed we are referencing `ItemDetailsPage`. This is a page included in the tutorial starter.  Let's import it in `app/list/list.js` so we can use it:

```ts
...
import {ItemDetailsPage} from '../item-details/item-details';
```

After saving the file, you will notice the `ionic serve` process will recompile your app with the new changes, and reload the browser. Let's revisit our app in the browser, and when we tap an item, it will navigate to the item details page!

### How It Works

Navigation in Ionic 2 works like a simple stack, where we `push` new pages onto the top of the stack, which takes us forwards in the app and shows a back button. To go backwards, we `pop` the top page off. Since we set `this.nav` in the constructor, we can call `this.nav.push()`, and pass it the page we want to navigate to. We can also pass it an object containing data we would like to pass to the page being navigated to. Using `push` to navigate to a new page is simple, but Ionic's [navigation system](../../../components/navigation) is very flexible. Check out the [navigation docs](../../../components/#navigation) to see more advanced navigation examples.


> When it comes to URLs, Ionic 2 works a bit differently than Ionic 1. Instead of using URLs to navigate, we use them to make sure we can always come back to a page (on app launch, for example).  This means we aren't limited to using `href` to navigate around. However,  we still have the option to use a URL to navigate to a page when necessary.




### Next Steps

*Nice job*! You've made it through the tutorial and are on your way towards *Ionic mastery*! If you're looking for an overview on what else is included with Ionic, check out the [Component docs](../../../components). To learn about using device APIs, head over to the [Platform section](../../../platform). If at any point you need help, check out our [developer resources section](../../../resources/), or ask a question on [the forums](http://forum.ionicframework.com/).
