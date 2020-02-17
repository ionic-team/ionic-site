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
  tag: 'react-capacitor',
  styleUrl: 'react-capacitor.scss',
  shadow: true
})
export class ReactCapacitor {
  @State() activeTab: 'notifications' | 'camera' | 'geolocation' = 'notifications';

  constructor() {
  }

  componentWillLoad() {
  }

  componentDidLoad() {
  }


  render() {
    return [
      <header class="code-header">
        <ul class="tab-menu">
          <li class={this.activeTab === 'camera' ? 'active' : 'innactive'}
              onClick={() => this.activeTab = 'camera'}>Camera</li>
          <li class={this.activeTab === 'notifications' ? 'active' : 'innactive'}
              onClick={() => this.activeTab = 'notifications'}>Notifications</li>
          <li class={this.activeTab === 'geolocation' ? 'active' : 'innactive'}
              onClick={() => this.activeTab = 'geolocation'}>Geolocation</li>
        </ul>,
        <a href="https://ionicframework.com/docs/native" target="_blank">See All</a>
      </header>,

      <ul class="tab-content">
        {Object.keys(this.markup).map(key => (
          <li class={this.activeTab === key ? 'active' : 'innactive'}>
            <pre>
              <code innerHTML={Prism.highlight(
                this.markup[key].code, 
                Prism.languages.javascript, 
                'typescript'
              )}></code>
            </pre>
          </li>
        ))}
      </ul>,

      /*
      <ul class="preview-icon">
        {Object.keys(this.markup).map(key => (
          <li class={this.activeTab === key ? 'active' : 'innactive'}>
            <img src={`/img/homepage/icon-native-${key}.png`} 
                 title={key}
                 width={this.markup[key].dimensions.x}
                 height={this.markup[key].dimensions.y}/>
          </li>
        ))}
      </ul>
      */
    ];
  }

  markup = {
    notifications: {
      dimensions: {
        x: 137,
        y: 134
      },
      code: `
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

LocalNotifications.schedule({
  notifications: [
    {
      title: "On sale",
      body: "Widgets are 10% off. Act fast!",
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    }
  ]
});`,
    },

    camera: {
      dimensions: {
        x: 119,
        y: 125
      },
      code: `
import { Plugins } from '@capacitor/core';
const { Camera } = Plugins;
// Take a picture or video, or load from the library
const picture = await Camera.getPicture({
  encodingType: this.camera.EncodingType.JPEG
});`,
    },

    geolocation: {
      dimensions: {
        x: 122,
        y: 122
      },
      code: `
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
// get the users current position
const position = await Geolocation.getCurrentPosition();

// grab latitude & longitude
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
`,
    }
  }
}
