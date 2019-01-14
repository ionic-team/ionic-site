import {
  Component,
  // Element,
  Prop,
  // State
} from '@stencil/core';

@Component({
  tag: 'ionic-bar-chart',
  styleUrl: 'ionic-bar-chart.scss',
  shadow: false
})
export class IonicBarChart {
  @Prop() data:string;
  @Prop() color:string;

  constructor() {
  }

  componentWillLoad() {
  }

  componentDidLoad() {
  }

  hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^\s?#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ` +
      `${parseInt(result[3], 16)}` : null;
}

  prepareData() {
    let max = 0;
    const color = this.color ? this.color.split(',') : ['#92E1A7', '#51A7FF'];
    const dataObj = JSON.parse(this.data.replace(/'/g, '"'));
    return Object.keys(dataObj).map((key) => {
      if (max < dataObj[key]) {
        max = dataObj[key];
      }
      return {
        name: key,
        value: parseInt(dataObj[key], 10)
      }
    }).map((item, i) => { 
      return {
        ...item,
        styles: {
          bar: {
            width:`${Math.round((item.value/max) * 100) }%`,
            background: i > 1 ? 
              // semi-greyed-out after the first two
              `rgba(91,112,139) linear-gradient(to right, ${color.map(item =>
                `rgba(${this.hexToRgb(item)}, .2)`
              ).join(', ')})` : 
              `linear-gradient(to right, ${color.join(', ')})`
          },
          text: {
            color: i > 1 ? '#5B708B' : color[color.length - 1]
          }
        }
      }
    });

  }

  render() {
    return [
      <figure>
        {this.prepareData().map(item => { 
          return [
          <div class="bar-container">
            <div class="bar" style={item.styles.bar}>
              <span style={item.styles.text}>{item.value}%</span>
            </div>
          </div>,
          <strong>{item.name}</strong>
        ]})}
      </figure>
    ];
  }
}
