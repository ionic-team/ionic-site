---
layout: v2/docs_base
id: resources
title: Ionic 2 Resources | Troubleshooting
header_title: Troubleshooting - Ionic 2 Resources
header_sub_title: Ionic 2 Developer Preview
---

<div class="improve-docs">
  <a href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/resources/troubleshooting/index.md'>
    Improve this doc
  </a>
</div>

# Troubleshooting Your Ionic App

Can't find a solution on this page? Check out the [Ionic Forums](http://forum.ionicframework.com), where the friendly Ions of the community will help you!

<br>
## Help! My app is blank and there are no errors

- Make sure your @App has a `template` or `templateUrl`
- Make sure your @App template has an `<ion-nav></ion-nav>` with a `root` property:
```
  <ion-nav [root]="firstPage"></ion-nav>
```

<br>
## My component/directive isn't loading!

If your custom component or directive isn't working, there are a few things you can check. Make sure:

- you include it in the `directives` array of any components whose templates contain your component or directive
- your selector doesn't have any misspellings
- you're using the selector correctly, as an attribute, element or class
- your selector has the [proper syntax](http://learnangular2.com/components/):
  - `[attr]` if it's an attribute selector
  - `element` if it's an element selector
  - `.class` if it's a class selector

```ts
@Directive({
  selector: '[my-dir]' // <-- [my-dir] because it's an attribute
})                     // Could be my-dir, [my-dir], .my-dir
class MyDir {
  constructor(){ console.log("I'm alive!"); }
}

@IonicView({
  template: `<div my-dir>Hello World</div>`

  // Or, depending on your directive's type
  //template: `<my-dir>Hello World</my-dir>`
  //template: `<div class="my-dir">Hello World</div>`

  directives: [MyDir] // <-- Don't forget me!
})
class MyPage {}
```


<br>
## Common JS errors:

<br>
`Cannot resolve all parameters for YourClass(someParam, someParam, ?). Make sure they all have valid type or annotations.`

This means that Angular is confused about one or more of the parameters for YourClass's constructor.  In order to do dependency injection (DI) Angular needs to know what kind of thing it's supposed to inject.  You let Angular know by specifying the class (the type) of the parameter.

- First, make sure you are importing the parameter's class
- Next, make sure you have properly annotated the parameter or specified its type

```ts
import {MyService} from 'myservice'; //Don't forget to import me!

@IonicView({
  template: `Hello World`
})
export class MyClass {
  constructor(service: MyService){}
    /* OR */
  constructor(@Inject(MyService) service){}
}
```

<br>
`No provider for ParamType! (MyClass -> ParamType)`

This means Angular knows what type of thing it is supposed to inject, but it doesn't know how. Make sure:

- you have added the specified class to the list of bindings available to the component
