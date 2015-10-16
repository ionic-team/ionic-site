---
layout: v2_fluid/docs_base
id: faq
title: Ionic 2 Resources | Troubleshooting
header_title: Troubleshooting - Ionic 2 Resources
header_sub_title: Ionic 2 Developer Preview
---

<h1 id="Troubleshooting">Troubleshooting Your Ionic App</h1>

Can't find a solution on this page? Check out the [Ionic Forums](http://forum.ionicframework.com), where the friendly Ions of the community will help you!

<h2 id="Blank_app">Help! My app is blank and there are no errors</h2>

- Make sure your @App has a `template` or `templateUrl`
- Make sure your @App template has an `<ion-nav></ion-nav>` with a `root` property:
```
  <ion-nav [root]="firstPage"></ion-nav>
```

<h2 id="Directive_not_working">My component/directive isn't loading!</h2>

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

<h2 id="Common_mistakes">Common mistakes:</h2>

- putting your `directives` array in your `@Component` options, not in `(click)`.

```ts
@Component({
  //directives: [MyDirective] Wrong
})
(click)({
  directives: [MyDirective] // Right
})
```

- putting your `bindings` array in your `(click)` options, not in `@Component` or `@Directive`.

```ts
@Component({
  providers: [MyService] // Right
})
(click)({
  // providers: [MyService] Wrong
})
```

- Forgetting `()` after an annotation: `@Injectable()`, `@Optional()`, etc.

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

- Adding bindings to every component when you mean to have the same binding instance injected to each component (services for example).  For a class to be injectable it only needs to be in the `bindings` array of that component or any parent component (for example `@App`), but not both.  Putting it in both the component that has that binding injected in addition to a parent or ancestor will create two separate binding instances. The following example illustrates the issue:

```ts
let id = 0;
class MyService {
  constructor(){ this.id = id++; }
}

@Component({
  selector: 'my-component',
  providers: [MyService] // <-- Creates a new instance of MyService
})                      // Unnecessary because MyService is in App's bindings
(click)({
  template: 'Hello World'
})
class MyComp {
  // id is 0
  constructor(s: MyService) { console.log("MyService id is: " + s.id); }
}

@App({
  template: '<my-component></my-component>',
  providers: [MyService],
  directives: [MyComp]
})
class MyApp {
  // id is 1, s is a different instance than MyComp
  constructor(s: MyService) { console.log("MyService id is: " + s.id); }
}
```

<h2 id="Common_JS_errors">Common JS errors:</h2>

`Cannot resolve all parameters for YourClass(?). Make sure they all have valid type or annotations.`

May also be preceded by `Error during instantiation of Token(Promise<ComponentRef>)` if it's on your `@App` component.

This means that Angular is confused about one or more of the parameters for YourClass's constructor.  In order to do dependency injection (DI) Angular needs to know what kind of thing it's supposed to inject.  You let Angular know by specifying the class (the type) of the parameter. Make sure:

- you are importing the parameter's class
- you have properly annotated the parameter or specified its type

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

Sometimes circular references within your code can cause this error.  Circular references mean that two objects depend on each other, and so there is no way to declare both of them before each other.  To get around this, we can use the [`forwardRef`]() function built in to Angular 2.

```ts
@Component({
  selector: 'my-button'
})
(click)({
  template: `<div>
               <icon></icon>
               <input type="button" />
             </div>`
  directives: [forwardRef(() => MyIcon)] // MyIcon has not been defined yet
})                                       // forwardRef resolves as MyIcon when MyIcon is needed

@Directive({
  selector: 'icon'  
})
class MyIcon {
  constructor(containerButton: MyButton) {} // MyButton has been defined
}
```

-------

`No provider for ParamType! (MyClass -> ParamType)`

This means Angular knows what type of thing it is supposed to inject, but it doesn't know how to inject it. Make sure:

- if the parameter is a service, you have added the specified class to the list of bindings available to your app


```ts
import {MyService} from 'myservice';

@App({
  templateUrl: 'app/app.html',
  providers: [MyService] // Don't forget me!
})
class MyApp {
```

If the parameter is another component or directive (for example, a parent component), adding it to your list of bindings will make the error go away, but this will have the same effect as #4 of the [Common Mistakes](#Common_mistakes) above.  That is, you'll be creating a new instance of the component class (you can kind of think of it as service-ifying your component), but you aren't actually getting a reference to the component instance you want (the one from angular compiling your app).  Instead, make sure that the directive or component you expect to be injected is available to your component (e.g. that it is actually a parent if you are expecting it to be a parent). This is probably easiest understood with an example:

```ts
@Component({
  selector: 'my-comp'
})
(click)({
  template: '<div my-dir></div>',
  directives: [forwardRef(() => MyDir)]
})
class MyComp {
  constructor(){ this.name = "My Component"; }
}

@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor(c: MyComp) { <-- This is the line of interest

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
                           | Div (MyDir) | <- MyComp can be injected from parent
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

--------

`Can't bind to 'propertyName' since it isn't a known property of the 'elementName' element and there are no matching`
`directives with a corresponding property`

This one is pretty self explanatory, it happens when you try and bind a property on an element that doesn't have that property.  If the element is a component or has one or more directives on it, neither the component nor the directives have that property either.

```html
<!-- div doesn't have a 'foo' property -->
<div [foo]="bar"></div>
```
--------

`EXCEPTION: No provider for ControlContainer! (NgControlName -> ControlContainer)`

This error is a more specific version of the `No provider` error above.  It happens when you use a form control like [NgControlName](https://angular.io/docs/js/latest/api/core/NgControlName-class.html) without specifying a parent [NgForm](https://angular.io/docs/js/latest/api/core/NgForm-class.html) or [NgFormModel](https://angular.io/docs/js/latest/api/core/NgFormModel-class.html).  In most cases, this can be resolved by making sure your form control is within an actual form element.  NgForm uses `form` as a selector so this will instantiate a new NgForm:

```ts
@IonicView({
  template:
    '<form>' +
      '<input ng-control='login'>' +
    '</form>'
})
```
