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
  @State() activeTab: 'card'|'button'|'listItem' = 'card';
  @State() activePlatform = 'ios';

  constructor() {
  }

  componentWillLoad() {
  }

  componentDidLoad() {
  }

  resizeIframe(el) {
    setTimeout(() => {
      // console.log(el.contentWindow.document.documentElement.scrollHeight)
      el.style.height = (el.contentWindow.document.documentElement.scrollHeight || 280) + 'px';
    }, 50)
  }


  render() {
    return [
      <header class="code-header">
        <ul class="tab-menu">
          <li class={this.activeTab === 'card' ? 'active' : 'innactive'}
              onClick={() => this.activeTab = 'card'}>Card</li>
          <li class={this.activeTab === 'button' ? 'active' : 'innactive'}
              onClick={() => this.activeTab = 'button'}>Button</li>
          <li class={this.activeTab === 'listItem' ? 'active' : 'innactive'}
              onClick={() => this.activeTab = 'listItem'}>List Item</li>
        </ul>,
        <a href="https://ionicframework.com/docs/components" target="_blank">See All</a>
      </header>,

      <header class="preview-header">
        <ion-segment mode="ios" 
                     value={this.activePlatform}
                     color="medium" 
                     onIonChange={e => this.activePlatform = e.detail.value }>
          <ion-segment-button value="ios">
            <ion-label>iOS</ion-label>
          </ion-segment-button>
          <ion-segment-button value="md">
            <ion-label>Android</ion-label>
          </ion-segment-button>
        </ion-segment>
      </header>,

      <ul class="tab-content">
        {Object.keys(this.markup).map(key => (
          <li class={this.activeTab === key ? 'active' : 'innactive'}>
            <pre>
              <code innerHTML={Prism.highlight(
                this.markup[key].display, 
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
            <iframe srcdoc={this.ionicInjector(this.markup[key].src)}
                    frameborder="0"
                    scrolling="no"
                    loading="lazy"
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
<script>window.Ionic = {
  config: {
    mode: '${this.activePlatform}'
  }
}</script>
${code}`;
  }

  markup = {
    card: {
      display: `
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
      src: `
        <style>
          html, body {
            height: 380px;
          }
          ion-card img {
            width: 100%;
            height: 120px;
          }
          
          ion-card ion-grid {
            --ion-grid-column-padding: 0;
            
            padding: 10px 0 0;
          }
          
          ion-card-content ion-col:last-child {
            text-align: right;
          }
          
          ion-card ion-button[fill="clear"] {
            --padding-end: 0;
            margin: 0;
          
            height: 30px;
          }
        </style>
        <ion-card>
          <img src="/img/homepage/demo-image.png" />
          <ion-card-header>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            <ion-card-title>Card Title</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-button size="small">Action</ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="clear" color="medium">
                    <ion-icon slot="icon-only" name="heart-outline"></ion-icon>
                  </ion-button>
                  <ion-button fill="clear" color="medium">
                    <ion-icon slot="icon-only" name="share-outline"></ion-icon>
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>`
    },

  button: {
    display:`
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
<ion-button color="dark">Dark</ion-button>

`,
    src: `
      <style>
        html, body {
          min-height: 300px;
        }
      </style>  
      <ion-app><ion-list>
        <!-- Default -->
        <ion-button>Default</ion-button>

        <!-- Anchor -->
        <ion-button href="javascript:void(0);">Anchor</ion-button>

        <!-- Colors -->
        <ion-button color="primary">Primary</ion-button>
        <ion-button color="secondary">Secondary</ion-button>
        <ion-button color="tertiary">Tertiary</ion-button>
        <ion-button color="success">Success</ion-button>
        <ion-button color="warning">Warning</ion-button>
        <ion-button color="danger">Danger</ion-button>
        <ion-button color="light">Light</ion-button>
        <ion-button color="medium">Medium</ion-button>
        <ion-button color="dark">Dark</ion-button>
      </ion-list></ion-app>`
  },

  listItem: {
    display: `
<h4>Discover</h4>
<h2>Music we think you'll love.</h2>
<IonList>
  {albums.map(album =>
    <IonItem key={album.id}>
      <IonThumbnail slot="start">
        <img src={album.artwork} />
      </IonThumbnail>
      <IonLabel>
        <h2>{album.title}</h2>
        <p>{album.artist}, {album.year}</p>
      </IonLabel>
    </IonItem>
  )}
</IonList>


`,
    src: `
      <style>
        html, body {
          min-height: 300px;
        }
        ion-thumbnail {
          --border-radius: 6px;
        }
      </style>
      <ion-app>
        <ion-content>
          <ion-list>
            <ion-item>
              <ion-thumbnail slot="start">
                <img src="https://upload.wikimedia.org/wikipedia/en/2/26/Iron_%26_Wine_-_Beast_Epic.jpg" />
              </ion-thumbnail>
              <ion-label>
                <h2>Beast Epic</h2>
                <p>Iron & Wine, 2017</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-thumbnail slot="start">
                <img src="https://media.pitchfork.com/photos/5c7425267ad40308b4a8835c/1:1/w_320/JapaneseHouse_GoodAtFalling.jpg" />
              </ion-thumbnail>
              <ion-label>
                <h2>Good At Falling</h2>
                <p>The Japanese House, 2019</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-thumbnail slot="start">
                <img src="https://upload.wikimedia.org/wikipedia/en/4/4f/Hallucinogen_%28EP%29_%28Front_Cover%29.png" />
              </ion-thumbnail>
              <ion-label>
                <h2>Hallucinogen</h2>
                <p>Kelela, 2015</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-thumbnail slot="start">
                <img src="https://upload.wikimedia.org/wikipedia/en/6/66/22%2C_A_Million_cover.jpg" />
              </ion-thumbnail>
              <ion-label>
                <h2>22, A Million</h2>
                <p>Bon Iver, 2016</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-thumbnail slot="start">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/F%28x%29_4_Walls_CD_Cover.jpg/220px-F%28x%29_4_Walls_CD_Cover.jpg" />
              </ion-thumbnail>
              <ion-label>
                <h2>4 Walls</h2>
                <p>f(x), 2015</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-app>`
    }
  }
}
