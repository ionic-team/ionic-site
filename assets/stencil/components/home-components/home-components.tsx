import {
  Component,
  // Element,
  // Prop,
  State,
  h
} from '@stencil/core';

import '@ionic/core';
import Prism from 'prismjs';



@Component({
  tag: 'home-components',
  styleUrl: 'home-components.scss',
  shadow: false
})
export class HomeComponents {
  @State() activeTab: 'card'|'button'|'textInput' = 'card';
  @State() activePlatform = 'ios';

  constructor() {
  }

  componentWillLoad() {
  }

  componentDidLoad() {
  }

  resizeIframe(el) {
    setTimeout(() => {
      el.style.height = (el.contentWindow.document.documentElement.scrollHeight || 240) + 'px';
    }, 500)
    
  }


  render() {
    return [
      <header class="code-header">
        <ul class="tab-menu">
          <li class={this.activeTab === 'card' ? 'active' : 'innactive'}
              onClick={() => this.activeTab = 'card'}>Card</li>
          <li class={this.activeTab === 'button' ? 'active' : 'innactive'}
              onClick={() => this.activeTab = 'button'}>Button</li>
          <li class={this.activeTab === 'textInput' ? 'active' : 'innactive'}
              onClick={() => this.activeTab = 'textInput'}>Text Input</li>
        </ul>,
        <a href="https://ionicframework.com/docs/components">See All</a>
      </header>,

      <header class="preview-header">
        <ion-segment mode="ios" 
                     value={this.activePlatform}
                     color="medium" 
                     onIonChange={e => this.activePlatform = e.detail.value }>
          <ion-segment-button value="ios">
            <ion-label>iOS</ion-label>
          </ion-segment-button>
          <ion-segment-button value="android">
            <ion-label>Android</ion-label>
          </ion-segment-button>
        </ion-segment>
      </header>,

      <ul class="tab-content">
        {Object.keys(this.markup).map(key => (
          <li class={this.activeTab === key ? 'active' : 'innactive'}>
            <pre>
              <code innerHTML={Prism.highlight(
                this.markup[key], 
                Prism.languages.html, 
                'html'
              )}></code>
            </pre>
          </li>
        ))}
      </ul>,

      <ul class="preview-content">
        {Object.keys(this.markup).map(key => (
          <li class={this.activeTab === key ? 'active' : 'innactive'}>
            <iframe srcdoc={this.ionicInjector(this.markup[key])}
                    frameborder="0" 
                    scrolling="no" 
                    onLoad={e => this.resizeIframe(e.target)}></iframe>
          </li>
        ))}
      </ul>
    ];
  }

  ionicInjector(code) {
    return `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core@next/css/ionic.bundle.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core@next/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core@next/dist/ionic/ionic.js"></script>
${code}`;
  }

  markup = {
    card: `
<ion-card>
  <ion-img src="/assets/myImg.png"></ion-img>
  <ion-card-content>
    <ion-card-header>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      <ion-card-title>Card Title</ion-card-title>
    </ion-card-header>
    <p>Here’s a small text description for the card component. 
       Nothing more, nothing less.
    </p>
    <ion-item>
      <ion-button fill="solid">Action</ion-button>
      <ion-icon name="heart” slot="end”></ion-icon>
      <ion-icon name="share” slot="end”></ion-icon>
    </ion-item>
  </ion-card-content>
</ion-card>`,

  button: `
<!-- Default -->
<ion-button>Default</ion-button>

<!-- Anchor -->
<ion-button href="#">Anchor</ion-button>

<!-- Colors -->
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>`,

textInput: `
<!-- Input with value -->
<ion-input value="custom"></ion-input>

<!-- Input with placeholder -->
<ion-input placeholder="Enter Input"></ion-input>

<!-- Input with clear button when there is a value -->
<ion-input clearInput value="clear me"></ion-input>

<!-- Number type input -->
<ion-input type="number" value="333"></ion-input>

<!-- Disabled input -->
<ion-input value="Disabled" disabled></ion-input>

<!-- Readonly input -->
<ion-input value="Readonly" readonly></ion-input>
`,
  }
}
