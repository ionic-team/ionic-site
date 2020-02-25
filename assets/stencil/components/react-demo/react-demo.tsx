import { Component, Element, h } from '@stencil/core';
@Component({
  tag: 'ionic-react-demo',
  styleUrl: 'react-demo.scss',
  shadow: true
})
export class IonicReactDemo {
  @Element() el: Element;

  componentDidLoad() {
  }

  render() {
    return (
      <div class="toggle-content">
      </div>
    );
  }
}