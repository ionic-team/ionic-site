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
  tag: 'home-native',
  styleUrl: 'home-native.scss',
  shadow: false
})
export class HomeNative {
  @State() activeTab: 'identityVault'|'camera'|'geolocation' = 'identityVault';

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
          <li class={this.activeTab === 'identityVault' ? 'active' : 'innactive'}
              onClick={() => this.activeTab = 'identityVault'}>Identity Vault</li>
          <li class={this.activeTab === 'camera' ? 'active' : 'innactive'}
              onClick={() => this.activeTab = 'camera'}>Camera</li>
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

      <ul class="preview-icon">
        {Object.keys(this.markup).map(key => (
          <li class={this.activeTab === key ? 'active' : 'innactive'}>
            <img src={`/img/homepage/icon-native-${key}.png`} 
                 title={key}
                 loading="lazy"
                 width={this.markup[key].dimensions.x}
                 height={this.markup[key].dimensions.y}/>
          </li>
        ))}
      </ul>
    ];
  }

  markup = {
    identityVault: {
      dimensions: {
        x: 137,
        y: 134
      },
      code: `
logout() {
  // lock the vault when the user logs out
  this.identityVault.lock();
}

onVaultReady() {
  // unlock the vault using biometrics
  this.identityVault.unlock();
}

onVaultUnlocked() {
  // restore the session when the vault is unlocked
  this.session = await this.identityVault.restoreSession();
}`,
    },

    camera: {
      dimensions: {
        x: 119,
        y: 125
      },
      code: `
async takeProfilePicture() {
  // Take a picture or video, or load from the library
  const picture = await this.camera.getPicture({
    encodingType: this.camera.EncodingType.JPEG
  });

  // confirm that users choice of picture
  const msg = "Set as new profile picture?";
  const confirmed = await this.dialogs.confirm(msg);
  if (confirmed) {
    // upload the picture to the server
    return this.userService.uploadProfilePic(picture);
  }
}`,
    },

    geolocation: {
      dimensions: {
        x: 122,
        y: 122
      },
      code: `
async plotCurrentLocation() {
  // get the users current position
  const position = await this.geolocation.getCurrentPosition();

  // grab latitude & longitude
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // place a pin on map at users current coordinates
  this.mapService.dropPin(latitude, longitude);
}



`,
    }
  }
}
