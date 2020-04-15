import { Component, Element, Prop } from '@stencil/core';
import c3 from 'c3';

@Component({
  tag: 'bar-chart',
  styleUrl: 'bar-chart.scss',
  shadow: false
})
export class BarChart {

  @Prop() graphData: string | object = {};
  @Prop() color: string = 'blue';

  @Element() el;

  data = {};
  defaultColor = '#73849A';
  barChartGradients = `
    <svg id="bar-chart-gradients" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pink-gradient">
          <stop offset="0%" stop-color="#F9BFD7" />
          <stop offset="100%" stop-color="#F37BAB" />
        </linearGradient>
        <linearGradient id="blue-gradient">
          <stop offset="0%" stop-color="#87B3FF" />
          <stop offset="100%" stop-color="#3780FF" />
        </linearGradient>
        <linearGradient id="yellow-gradient">
          <stop offset="0%" stop-color="#FCEEB4" />
          <stop offset="100%" stop-color="#F7D443" />
        </linearGradient>
        <linearGradient id="green-gradient">
          <stop offset="0%" stop-color="#8BF49D" />
          <stop offset="100%" stop-color="#3EED5B" />
        </linearGradient>
      </defs>
    </svg>`

  componentWillLoad() {
    const gradientsExist = !!document.getElementById('bar-chart-gradients');
    if (!gradientsExist) {
      // add hidden SVG of gradient defs if it doesn't exist yet
      const parser = new DOMParser();
      const $svg = parser.parseFromString(this.barChartGradients, 'text/html');
      document.body.appendChild($svg.body);
    }

    this.data = typeof this.graphData === 'string' ? JSON.parse(this.graphData) : this.graphData;

    var data = Object.keys(this.data).map((k) => {
      return {label: k, value: this.data[k]};
    });

    const bars = ['data1'].concat(data.map(function(bar) {
      return bar.value;
    }));
    const labels = data.map(function(bar) {
      return bar.label;
    });

    c3.generate({
      bindto: this.el,
      data: {
        columns: [ bars ],
        type: 'bar',
        labels: {
          show: true,
          format: function(v) { return v + '%'; }
        },
        colors: {
          data1: this.defaultColor
        },
      },
      padding: {
        left: 218,
      },
      size: {
        height: 37 * labels.length
      },
      bar: {
        width: {
          ratio: 0.3 // bar height
        }
      },
      axis: {
        rotated: true,
        x: {
          type: 'category',
          categories: labels,
          tick: {
            multiline: false,
            outer: true,
          },
          height: 50,
          width: 200
        },
        y: {
          show: false
        }
      },
      legend: {
        show: false
      },
      tooltip: {
        show: false
      }
    });
  }

  render() {
    return;
  }
}
