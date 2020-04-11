import { Component, Element, Prop, h, State } from '@stencil/core';
import c3 from 'c3';

@Component({
  tag: 'bar-chart',
  styleUrl: 'bar-chart.scss',
  shadow: false
})
export class BarChart {

  @Prop() graphData: string | object = {};
  @Prop() color: string = '#b2becd';
  @Prop() highlightFirst: number;
  @State() data = {};

  @Element() el;

  componentDidLoad() {
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

    const chart = c3.generate({
      bindto: this.el,
      data: {
        columns: [ bars ],
        type: 'bar',
        labels: {
          show: true,
          format: function(v) { return v + '%'; }
        },
        colors: {
          data1: '#4a8bfc'
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
