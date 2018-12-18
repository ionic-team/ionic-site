// import { verticalChart } from './c3-helper';

import {
  Component,
  // Element,
  // Prop,
  // State
} from '@stencil/core';

@Component({
  tag: 'ionic-bar-chart',
  styleUrl: 'ionic-bar-chart.scss',
  shadow: false
})
export class IonicBarChart {
  // @Prop() data;

  // @State() active = false;
  // @Element() el;



  constructor() {
    // console.log(this.data)
  }

  componentWillLoad() {
    // console.log(this.data)
  }

  componentDidLoad() {
    // console.log('gets here', this.el)
    // verticalChart(JSON.parse(this.data), this.el);
  }

  render() {
    return [
      <h1>Testing, yo</h1>
    ];
  }
}
