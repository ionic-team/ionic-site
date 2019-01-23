# Ionic Version 4: From Angular to React, Vue, and Web Components

#### JAN 23, 2019 - 2 MIN READ by Dylan Schiemann

The Ionic 4 release represents a substantial change, moving from a mobile framework for Angular users to a framework-agnostic approach that adds support for React, Vue.js, and web components.

As explained by Ionic CEO Max Lynch, this change is driven by frontend churn:

> At the end of 2017, we started asking ourselves if our original dream was worth revisiting. It was clear that frontend developers would never settle on any specific frontend framework or libraries, so assuming otherwise was futile. At the same time, we were frustrated that Ionic could only be used by those that embraced Angular. While we loved Angular, we hated the idea that Ionic wasn’t achieving its original goal of being a toolkit for every web developer in the world.

Starting with this release, Ionic is distributed as a collection of approximately 100 web components, leveraging the custom elements and shadow DOM APIs. With these changes, developers may use Ionic's components in mobile, desktop, and progressive web apps via HTML tags supported by custom elements.

Ionic 4 moves from encouraging usage of its own CLI to that of the underlying framework to give developers the most out of their framework’s ecosystem. The official Vue.js and React Ionic bindings are in alpha at the time of the Ionic 4 release.

Similar to changes seen in several other modern frameworks like Dojo and Svelte, Ionic targets web standards where possible to minimize frontend framework churn and fragmentation.

Beyond its independence from specific frameworks, Ionic also focuses on being a web-based design system. Each Ionic component includes theme support for the latest iOS and material design standards. Ionic leverages CSS Custom Properties in each component to simplify theming of components.

Last year Ionic announced Stencil, a standalone web component compiler project. Ionic leverages Stencil to optimize for load and render performance. The web components benchmark compares the performance of Stencil and other web component frameworks.

Beyond the Ionic 4 release, the Ionic team looks forward to improvements for desktop-specific UI support, keyboard scenarios, theming, animations, and more. Additionally, Ionic is working to include Capacitor, a Cordova alternative, for new Ionic projects.

To get started with Ionic 4, install or update the Ionic CLI and then start an application:

```
npm install -g ionic
ionic start my-app
```

Ionic provides application starter templates and the Ionic conference reference application.

Ionic is open source software available under the MIT license. Contributions and feedback are encouraged via the Ionic GitHub project and should follow the Ionic contribution guidelines and code of conduct.