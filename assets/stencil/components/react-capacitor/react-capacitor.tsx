import { Component, State, h, Prop, Watch } from '@stencil/core';

import '@ionic/core';
import Prism from 'prismjs';

export type TabType = 'notifications' | 'camera' | 'geolocation';

@Component({
  tag: 'react-capacitor',
  styleUrl: 'react-capacitor.scss',
  shadow: true,
})
export class ReactCapacitor {
  @Prop() tab: TabType = 'camera';
  @State() activeTab: TabType = 'camera';

  constructor() {}

  @Watch('tab')
  handleTabChange() {
    this.activeTab = this.tab;
  }

  componentWillLoad() {}

  componentDidLoad() {}

  render() {
    return [
      <ul class="tab-content">
        {Object.keys(this.markup).map((key) => (
          <li class={this.activeTab === key ? 'active' : 'innactive'}>
            <pre>
              <code
                innerHTML={Prism.highlight(
                  this.markup[key].code,
                  Prism.languages.javascript,
                  'typescript'
                )}
              ></code>
            </pre>
          </li>
        ))}
      </ul>,
    ];
  }

  markup = {
    notifications: {
      dimensions: {
        x: 137,
        y: 134,
      },
      code: `
import { LocalNotifications } from '@capacitor/local-notifications';

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
        y: 125,
      },
      code: `
import { Camera, CameraResultType } from '@capacitor/camera';
const { Camera } = Plugins;

async takeProfilePicture() {
  // Take a picture or video, or load from the library
  const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
  });
}
`,
    },
    geolocation: {
      dimensions: {
        x: 122,
        y: 122,
      },
      code: `
import { Geolocation } from '@capacitor/geolocation';

// get the users current position
const position = await Geolocation.getCurrentPosition();

// grab latitude & longitude
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
`,
    },
  };
}
