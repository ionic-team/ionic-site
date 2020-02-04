import {
  Component,
  // Element,
  Prop,
  // State,
  h
} from '@stencil/core';

import '@ionic/core';

@Component({
  tag: 'home-components',
  styleUrl: 'home-components.scss',
  shadow: false
})
export class HomeComponents {

  constructor() {
  }

  componentWillLoad() {
  }

  componentDidLoad() {
  }


  render() {
    return [
      <h1>Hi there!</h1>,
      <ion-button>Yo</ion-button>
    ];
  }
}
