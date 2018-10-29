---
layout: fluid/docs_base
id: troubleshooting
category: troubleshooting
title: Ionic App Troubleshooting - Updating Ionic Packages
footer_includes: |
  <script src="//cdnjs.cloudflare.com/ajax/libs/anchor-js/3.2.0/anchor.min.js"></script>
  <script>
   anchors.options.placement = 'left';
    anchors.add('main h2, main h3');
  </script>
---

# Troubleshooting

Can't find a solution on this page? Check out the
[Ionic Forums](http://forum.ionicframework.com) or join the
[Ionic Worldwide Slack Channel](http://ionicworldwide.herokuapp.com/), where the
friendly Ions of the community will help you!

{% include fluid/toc.html %}

## Updating Ionic's packages

To update the version of the ionic-angular package, run:

```bash
npm install ionic-angular@latest --save --save-exact
```

This will install the latest version of the framework and saved the version to the package.json.
If you need to update any additional packages (Angular, RxJS, etc), the output from npm will tell you.

To update the ionic-cli install run:

```bash
npm install -g ionic
```

Depending on your setup, you might need to run this with`sudo` in front for macOS and Linux.
For windows, run this from an admin command prompt.

## Adding third party libs

See our resources page on [Adding Third Party Libs](/docs/resources/third-party-libs).


## Blank App

>I have no errors in my app. Why does it show a blank screen?

There are different reasons this can happen. If you are unable to find a
solution on the forums, make sure:

- Root `@Component` has a `template` or `templateUrl`.
- Root `@Component` template has an `<ion-nav>` with a `root` property:

  ```html
  <ion-nav [root]="rootPage"></ion-nav>
  ```


## Directive Not Working

> Why is my custom component/directive not working?

There are a few things you can check. Make sure:

- You include it in the `directives` array of the `@Component` you want to use it in (only if your ionic-angular version is below RC0).
- Your selector doesn't have any misspellings.
- You're using the selector correctly as an attribute, element or class.
- Your selector has the [proper syntax](http://learnangular2.com/components/):
  - `[attr]` if it's an attribute selector
  - `element` if it's an element selector
  - `.class` if it's a class selector

Here's an example using an attribute selector:

```typescript
@Directive({
  selector: '[my-dir]' // <-- [my-dir] because it is an attribute
})                     // Could be my-dir, [my-dir], .my-dir
class MyDir {
  constructor() {
    console.log('I'm alive!');
  }
}

@Component({
  // We add my-dir as an attribute to match the directive's selector
  template: `<div my-dir>Hello World</div>`,

  // Alternatively, if you were attaching the directive to an element it would be:
  // template: `<my-dir>Hello World</my-dir>`
  // and if you were attaching by class the template would be:
  // template: `<div class="my-dir">Hello World</div>`

  directives: [MyDir] // <-- Don't forget me! (only if your ionic-angular version is below RC0)
})
class MyPage { }
```

## Click Delays

> Why is there a delay on my click event?

In general, we recommend only adding `(click)` events to elements that are
normally clickable. This includes `<button>` and `<a>` elements. This improves
accessibility as a screen reader will be able to tell that the element is
clickable.

However, you may need to add a `(click)` event to an element that is not
normally clickable. When you do this you may experience a `300ms` delay from the
time you click the element to the event firing. To remove this delay, you can
add the `tappable` attribute to your element.

```html
 <div tappable (click)="doClick()">I am clickable!</div>
```

## Common mistakes

### Forgetting Parentheses on a Decorator

Decorators should have parentheses `()` after an annotation. Some examples
include: `@Injectable()`, `@Optional()`, `@Input()`, etc.

```typescript
@Directive({
  selector: 'my-dir'
})
class MyDirective {
  // Wrong, should be @Optional()
  // @Optional does nothing here, so MyDirective will error if parent is undefined
  constructor( @Optional parent: ParentComponent) { }
}
```


### Cordova plugins not working in the browser

At some point in your development you may, try to call Cordova plugin, but get a
warning:

```
[Warning] Native: tried calling StatusBar.styleDefault, but Cordova is not
available. Make sure to include cordova.js or run in a device/simulator
(app.bundle.js, line 83388)
```

This happens when you try to call a native plugin, but Cordova isn't available.
Thankfully, Ionic Native will print out a nice warning, instead of an error.

In other cases where the plugin is not being used through Ionic Native, plugins
can print a much more obscure warning.

```
EXCEPTION: Error: Uncaught (in promise): TypeError: undefined is not an object
(evaluating 'navigator.camera.getPicture')
```

If this happens, test the plugin on a real device or simulator.

### Multiple instances of a provider

If you inject a provider in every component because you want it available to all
of them you will end up with multiple instances of the provider. You should
inject the provider once in the parent component if you want it to be available
to the child components.

```typescript
let id = 0;
export class MyService {
  id: number;

  constructor() {
    this.id = id++;
  }
}

@Component({
  selector: 'my-component',
  template: 'Hello World',
  providers: [MyService] // <-- Creates a new instance of MyService :(
})                       // Unnecessary because MyService is in App's providers
class MyComp {
  // id is 1, s is a different MyService instance than MyApp
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}

@Component({
  template: '<my-component></my-component>',
  providers: [MyService], // MyService only needs to be here
  directives: [MyComp]
})
class MyApp {
  // id is 0
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}
```

Plunker: [http://plnkr.co/edit/QzgR5H0r8FijHeVtv2dd](http://plnkr.co/edit/QzgR5H0r8FijHeVtv2dd)

## Common Errors

### Cannot resolve all parameters for 'YourClass'(?). Make sure that all the parameters are decorated with Inject or have valid type annotations and that 'YourClass' is decorated with Injectable.

This exception means that Angular is confused about one or more of the
parameters for `YourClass`'s constructor. In order to do
[dependency injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html)
Angular needs to know the type of the parameter to inject. You let Angular know
this by specifying the class of the parameter. Make sure:

- You are importing the parameter's class.
- You have properly annotated the parameter or specified its type.

```typescript
import { MyService } from 'my-service'; //Don't forget to import me!

@Component({
  template: `Hello World`
})
export class MyClass {
  // service is of type MyService
  constructor(service: MyService) {

  }
}
```

Sometimes circular references within your code can cause this error. Circular
references mean that two objects depend on each other, and so there is no way to
declare both of them before each other. To get around this, we can use the
[`forwardRef`](https://angular.io/docs/ts/latest/api/core/index/forwardRef-function.html)
function built in to Angular.

```ts
import { forwardRef } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `<div>
               <icon></icon>
               <input type="button" />
             </div>`,
  directives: [forwardRef(() => MyIcon)] // MyIcon has not been defined yet
})                                       // forwardRef resolves as MyIcon when MyIcon is needed
class MyButton {
  constructor() { }
}

@Directive({
  selector: 'icon'
})
class MyIcon {
  constructor(containerButton: MyButton) { } // MyButton has been defined
}
```


### No provider for ParamType! (MyClass -> ParamType)

This means Angular knows the type of parameter it is supposed to inject, but it
doesn't know how to inject it.

If the parameter is a service, make sure you have added the specified class to
the list of providers available to your app:


```typescript
import { MyService } from 'my-service';

@Component({
  templateUrl: 'app/app.html',
  providers: [MyService] // Don't forget me!
})
class MyApp { }
```

If the parameter is another component or directive (for example, a parent
  component), adding it to your list of providers will make the error go away,
  but this will have the same effect as the
  [Multiple instances of a provider](#multiple_instances) above. You'll be
  creating a new instance of the component class, and you won't get a reference
  to the component instance you want. Instead, make sure that the directive or
  component you expect to be injected is available to your component (e.g. that
    it is actually a parent if you are expecting it to be a parent). This is
    probably easiest understood with an example:

```typescript
@Component({
  selector: 'my-comp',
  template: '<p my-dir></p>',
  directives: [forwardRef(() => MyDir)]
})
class MyComp {
  constructor() {
    this.name = 'My Component';
  }
}

@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor(c: MyComp) { // <-- This is the line of interest

    // Errors when directive is on regular div because there is no MyComp in the
    // component tree so there is no MyComp to inject
    console.log('Host component\'s name: ' + c.name);

  }
}

@Component({
  template: "<my-comp></my-comp>" + // No error in MyDir constructor, MyComp is parent of MyDir
  "<my-comp my-dir></my-comp>" + // No error in MyDir constructor, MyComp is host of MyDir
  "<div my-dir></div>", // Errors in MyDir constructor
  directives: [MyComp, MyDir]
})
class MyApp { }
```

Here's a diagram illustrating what injectors are available:

```
                 +-------+
                 |  App  |
                 +---+---+
                     |
       +-------------+------------+
       |                          |
+------+------+          +--------+--------+
| Div (MyDir) |          | MyComp (MyDir)  |  <- MyComp can be injected
+-------------+          +--------+--------+
       ^                          |
No MyComp to inject        +------+------+
                           | P (MyDir)   | <- MyComp can be injected from parent
                           +-------------+
```

To expand on the previous example, you can use the Angular 2 `@Optional` a
nnotation if you don't always expect a component/directive reference:

```typescript
@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor( @Optional() c: MyComp) {
    // No longer errors if c is undefined
    if (c) {
      console.log('Host component\'s name: ' + c.name);
    }
  }
}
```

### Can't bind to 'propertyName' since it isn't a known property of the 'elementName' element and there are no matching directives with a corresponding property

This happens when you try and bind a property on an element that doesn't have
that property. If the element is a component or has one or more directives on
it, neither the component nor the directives have that property either.

```html
<!-- div doesn't have a 'foo' property -->
<div [foo]="bar"></div>
```

### No provider for ControlContainer! (NgControlName -> ControlContainer)

This error is a more specific version of the `No provider` error above.  It
happens when you use a form control like NgControlName without specifying a
parent [NgForm](https://angular.io/docs/ts/latest/api/forms/index/NgForm-directive.html)
or NgFormModel.  In most cases, this can be resolved by making sure your form
control is within an actual form element.  NgForm uses `form` as a selector so
this will instantiate a new NgForm:

```typescript
@Component({
  template:
  '<form>' +
  '<input ngControl="login">' +
  '</form>'
})
```
### No component factory found for <component name>

This error happens when you are trying to use a component, provider pipe or
directive that has not been imported and added to your ngModule. Whenever you
add a new component, provider, pipe or directive to your app, you must add it to
the ngModule in the `src/app/app.module.ts` file for Angular to be able to use it.
To fix this error you can import the offending component, provider, pipe or
directive into the app.module file and then if it is a provider add it to the
`providers` array and for a component, pipe or directive add it to both the
declarations array and entryComponents array.
