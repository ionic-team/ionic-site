<h1 class="title">Routing and Deeplinking</h1>

<a class="improve-v2-docs" href='https://github.com/driftyco/ionic-site/edit/master/content/docs/v2/navigation/deeplinking/index.md'>
  Improve this doc
</a>

Pushing and popping views is a simple operation that can be made more powerful with URLs for routing and deeplinking. We can identify pages with a URL we share to users that brings them back to the exact page they were viewing when they left (including setting the history state if we desire), and we can have our Nav Controller navigate to pages based on a URL segment.

To enable linking directly to a page, we use the `@DeepLink` decorator, specifying a unique identifier for the page (the 'name') and a page segment that goes into the URL that maps to this page. This means we can have a long URL specifying a specific history state ora short one, but return to the app with this page at the top of the history stack:

```typescript
@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content>
  </ion-content>`
})
@DeepLink({
  name: 'login', // Unique identifer (no spaces) of this page for easy routing
  segment: 'user/login' // (optional) Segment in the URL that links to this page. Defaults to the name
})
export class LoginPage {
  constructor(public navCtrl: NavController) {}
}
```