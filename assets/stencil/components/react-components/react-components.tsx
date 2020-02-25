import {
  Component,
  // Element,
  // Prop,
  State,
  h,
  Prop,
  Watch
} from '@stencil/core';

import '@ionic/core';
import Prism from 'prismjs';


export type ComponentType = 'card' | 'lists' | 'actionSheet';

@Component({
  tag: 'react-components',
  styleUrl: 'react-components.scss',
  shadow: true
})
export class ReactComponents {
  @Prop() component: ComponentType = 'card';
  @State() activeTab: ComponentType = 'card';
  @State() activeView = 'preview';

  constructor() {
  }

  @Watch('component')
  handleComponentChange() {
    this.activeTab = this.component;
  }

  componentWillLoad() {
  }

  componentDidLoad() {
  }

  resizeIframe(el) {
    setTimeout(() => {
      console.log(el.contentWindow.document.documentElement.scrollHeight)
      el.style.height = (el.contentWindow.document.documentElement.scrollHeight || 350) + 'px';
    }, 50)
  }


  renderCode = (code) => {
    return (
      <pre><code innerHTML={Prism.highlight(
        code,
        Prism.languages.html, 
        'html'
      )}></code></pre>
    );
  }

  render() {
    return (
      <div class="grid">
        <header class="preview-header">
          <ion-segment mode="ios" 
                      value={this.activeView}
                      color="medium" 
                      onIonChange={e => this.activeView = e.detail.value }>
            <ion-segment-button value="preview">
              <ion-label>Preview</ion-label>
            </ion-segment-button>
            <ion-segment-button value="code">
              <ion-label>Code</ion-label>
            </ion-segment-button>
          </ion-segment>
        </header>

        <ul class={`preview-content${ this.activeView === 'code' ? ' code' : ''}`}>
          {Object.keys(this.markup).map(key => (
            <li class={this.activeTab === key ? 'active' : 'innactive'}>
              <iframe srcdoc={this.ionicInjector(this.markup[key].src)}
                      frameborder="0"
                      scrolling="no"
                      style={{ display: this.activeView === 'preview' ? 'block' : 'none' }}
                      onLoad={e => this.resizeIframe(e.target)}></iframe>
              {this.activeView === 'code' ? this.renderCode(this.markup[key].display) : null}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  ionicInjector(code) {
    return `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core@next/css/ionic.bundle.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core@next/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core@next/dist/ionic/ionic.js"></script>
<script>window.Ionic = {
  config: {
    mode: 'ios'
  }
}</script>
${code}`;
  }

  markup = {
    card: {
      display: `
<IonCard>
  <IonImg src="/assets/myImg.png"></IonImg>
  <IonCardContent>
    <IonCardHeader>
      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      <IonCardTitle>Card Title</IonCardTitle>
    </IonCardHeader>
    <p>
      Here’s a small text description for the card component. 
      Nothing more, nothing less.
    </p>
    <IonItem>
      <IonButton fill="solid">Action</IonButton>
      <IonIcon icon={heart} slot="end"></IonIcon>
      <IonIcon icon={share} slot="end"></IonIcon>
    </IonItem>
  </IonCardContent>
</IonCard>`,
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

  lists: {
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
    },
    
    actionSheet: {
      display: `
<IonButton
  onClick={() => setShowActionSheet(true)}
  expand="block">Show Action Sheet</IonButton>
<IonActionSheet
  isOpen={showActionSheet}
  onDidDismiss={() => setShowActionSheet(false)}
  buttons={buttons} />`,
      src: `
      <ion-app>
        <ion-content fullscreen class="ion-padding">
          <ion-button expand="block">Open Action Sheet</ion-button>
        </ion-content>
      </ion-app>
      <script type="module">
        import { actionSheetController } from 'https://cdn.jsdelivr.net/npm/@ionic/core@next/dist/ionic/index.esm.js';
        window.actionSheetController = actionSheetController;
      </script>
      <script>
        const button = document.querySelector('ion-button');
        button.addEventListener('click', handleButtonClick);
    
        async function handleButtonClick() {
          const actionSheet = await actionSheetController.create({
            header: 'Albums',
            buttons: [
              { text: 'Delete', role: 'destructive' },
              { text: 'Share' },
              { text: 'Play' },
              { text: 'Favorite' },
              { text: 'Cancel', role: 'cancel' }
            ]
          });
    
          await actionSheet.present();
        }
      </script>
    `
    }
  }
}
