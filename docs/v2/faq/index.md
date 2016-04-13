---
layout: v2_fluid/docs_base
id: faq
category: faq
title: Ionic Frequently Asked Questions
---

<h1 id="troubleshooting">Troubleshooting Your Ionic App</h1>

Can't find a solution on this page? Check out the [Ionic Forums](http://forum.ionicframework.com) or join the [Ionic Worldwide Slack Channel](http://ionicworldwide.herokuapp.com/), where the friendly Ions of the community will help you!


<h2 id="blank_app">I have no errors in my app. Why does it show a blank screen?</h2>

There are different reasons this can happen. If you are unable to find a solution on the forums, make sure:

- `@App` has a `template` or `templateUrl`.
- `@App` template has an `<ion-nav>` with a `root` property:

  ```html
  <ion-nav [root]="rootPage"></ion-nav>
  ```


<h2 id="directive_not_working">Why is my custom component/directive not working?</h2>

There are a few things you can check. Make sure:

- You include it in the `directives` array of the `@Page` or `@Component` you want to use it in.
- Your selector doesn't have any misspellings.
- You're using the selector correctly as an attribute, element or class.
- Your selector has the [proper syntax](http://learnangular2.com/components/):
  - `[attr]` if it's an attribute selector
  - `element` if it's an element selector
  - `.class` if it's a class selector

Here's an example using an attribute selector:

```ts
@Directive({
  selector: '[my-dir]' // <-- [my-dir] because it's an attribute
})                     // Could be my-dir, [my-dir], .my-dir
class MyDir {
  constructor() {
    console.log("I'm alive!");
  }
}

@Page({
  // We add my-dir as an attribute to match the directive's selector
  template: `<div my-dir>Hello World</div>`,

  // Alternatively, if you were attaching the directive to an element it would be:
  // template: `<my-dir>Hello World</my-dir>`
  // and if you were attaching by class the template would be:
  // template: `<div class="my-dir">Hello World</div>`  

  directives: [MyDir] // <-- Don't forget me!
})
class MyPage {}
```

<h2 id="angular_component">Why is an Ionic component not working in my custom Angular component?</h2>

To include an Ionic component in your custom Angular component you need to import `IONIC_DIRECTIVES` and inject those into your component by placing them in the `directives` array. You will then be able to include Ionic components in your Angular component.

```ts
@Component({
  selector: 'custom-component',
  template: `
    <h1>My awesome custom component</h1>
    <ion-list>
      <ion-item>
        I am an awesome ionic component.
      </ion-item>
    </ion-list>
  `,

  // This is required to use Ionic components in a
  // @Component or @Directive
  directives: [IONIC_DIRECTIVES]
})
class MyComponent {

}
```


<h2 id="tappable_attribute">Why is there a delay on my click event?</h2>

In general, we recommend only adding `(click)` events to elements that are normally clickable. This includes `<button>` and `<a>` elements. This improves accessibility as a screen reader will be able to tell that the element is clickable.

However, you may need to add a `(click)` event to an element that is not normally clickable. When you do this you may experience a `300ms` delay from the time you click the element to the event firing. To remove this delay, you can add the `tappable` attribute to your element.

```
 <div tappable (click)="doClick()">I am clickable!</div>
```


<h2 id="common_mistakes">Common mistakes</h2>

<h3 id="forgetting_parentheses">Forgetting the parentheses on a decorator</h3>

Decorators should have parentheses `()` after an annotation. Some examples include: `@Injectable()`, `@Optional()`, `@Input()`, etc.

```ts
@Directive({
  selector: 'my-dir'
})
class MyDirective {
  // Wrong, should be @Optional()
  // @Optional does nothing here, so MyDirective will error if parent is undefined
  constructor(@Optional parent: ParentComponent) {}
}
```


<h3 id="multiple_instances"> Multiple instances of a provider</h3>

If you inject a provider in every component because you want it available to all of them you will end up with multiple instances of the provider. You should inject the provider once in the parent component if you want it to be available to the child components. `@App` is the parent component in the below example:

```ts
let id = 0;
export class MyService {
  id:number;

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
    console.log("MyService id is: " + s.id);
  }
}

@App({
  template: '<my-component></my-component>',
  providers: [MyService], // MyService only needs to be here
  directives: [MyComp]
})
class MyApp {
  // id is 0
  constructor(s: MyService) {
    console.log("MyService id is: " + s.id);
  }
}
```

Plunker: [http://plnkr.co/edit/QzgR5H0r8FijHeVtv2dd](http://plnkr.co/edit/QzgR5H0r8FijHeVtv2dd)


<h2 id="common_pitfalls">Common Pitfalls</h2>

<h3>Cannot resolve all parameters for 'YourClass'(?). Make sure that all the parameters are decorated with Inject or have valid type annotations and that 'YourClass' is decorated with Injectable.</h3>

This exception means that Angular is confused about one or more of the parameters for `YourClass`'s constructor. In order to do [dependency injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html) Angular needs to know the type of the parameter to inject. You let Angular know this by specifying the class of the parameter. Make sure:

- You are importing the parameter's class.
- You have properly annotated the parameter or specified its type.

```ts
import {MyService} from 'my-service'; //Don't forget to import me!

@Page({
  template: `Hello World`
})
export class MyClass {
  // service is of type MyService
  constructor(service: MyService) {

  }
}
```

Sometimes circular references within your code can cause this error. Circular references mean that two objects depend on each other, and so there is no way to declare both of them before each other. To get around this, we can use the [`forwardRef`](https://angular.io/docs/ts/latest/api/core/forwardRef-function.html) function built in to Angular.

```ts
import {forwardRef} from 'angular2/core';

@Component({
  selector: 'my-button',
  template: `<div>
               <icon></icon>
               <input type="button" />
             </div>`,
  directives: [forwardRef(() => MyIcon)] // MyIcon has not been defined yet
})                                       // forwardRef resolves as MyIcon when MyIcon is needed
class MyButton {
  constructor() {}
}

@Directive({
  selector: 'icon'  
})
class MyIcon {
  constructor(containerButton: MyButton) {} // MyButton has been defined
}
```

<hr class="faq-section" />

<h3 id="no_provider">No provider for ParamType! (MyClass -> ParamType)</h3>

This means Angular knows the type of parameter it is supposed to inject, but it doesn't know how to inject it.

If the parameter is a service, make sure you have added the specified class to the list of providers available to your app:


```ts
import {MyService} from 'my-service';

@App({
  templateUrl: 'app/app.html',
  providers: [MyService] // Don't forget me!
})
class MyApp {
```

If the parameter is another component or directive (for example, a parent component), adding it to your list of providers will make the error go away, but this will have the same effect as the [Multiple instances of a provider](#multiple_instances) above. You'll be creating a new instance of the component class, and you won't get a reference to the component instance you want. Instead, make sure that the directive or component you expect to be injected is available to your component (e.g. that it is actually a parent if you are expecting it to be a parent). This is probably easiest understood with an example:

```ts
@Component({
  selector: 'my-comp',
  template: '<p my-dir></p>',
  directives: [forwardRef(() => MyDir)]
})
class MyComp {
  constructor() {
    this.name = "My Component";
  }
}

@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor(c: MyComp) { // <-- This is the line of interest

    // Errors when directive is on regular div because there is no MyComp in the
    // component tree so there is no MyComp to inject
    console.log("Host component's name: " + c.name);

  }
}

@App({
  template: "<my-comp></my-comp>" + // No error in MyDir constructor, MyComp is parent of MyDir
            "<my-comp my-dir></my-comp>" + // No error in MyDir constructor, MyComp is host of MyDir
            "<div my-dir></div>", // Errors in MyDir constructor
  directives: [MyComp, MyDir]
})
class MyApp {}
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


To expand on the previous example, you can use the Angular 2 `@Optional` annotation if you don't always expect a component/directive reference:

```ts
@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor(@Optional() c: MyComp) {
    // No longer errors if c is undefined
    if (c) {
      console.log("Host component's name: " + c.name);
    }
  }
}
```

<hr class="faq-section" />

<h3 id="cant_bind">Can't bind to 'propertyName' since it isn't a known property of the 'elementName' element and there are no matching directives with a corresponding property</h3>

This happens when you try and bind a property on an element that doesn't have that property. If the element is a component or has one or more directives on it, neither the component nor the directives have that property either.

```html
<!-- div doesn't have a 'foo' property -->
<div [foo]="bar"></div>
```

<hr class="faq-section" />

<h3 id="no_provider_control">No provider for ControlContainer! (NgControlName -> ControlContainer)</h3>

This error is a more specific version of the `No provider` error above.  It happens when you use a form control like [NgControlName](https://angular.io/docs/js/latest/api/core/NgControlName-class.html) without specifying a parent [NgForm](https://angular.io/docs/js/latest/api/core/NgForm-class.html) or [NgFormModel](https://angular.io/docs/js/latest/api/core/NgFormModel-class.html).  In most cases, this can be resolved by making sure your form control is within an actual form element.  NgForm uses `form` as a selector so this will instantiate a new NgForm:

```ts
@Page({
  template:
    '<form>' +
      '<input ngControl="login">' +
    '</form>'
})
```
