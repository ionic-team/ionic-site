import * as c3 from 'c3';

export function horizontalChart(data, el, categories) {
  if (!data.data && !categories) {
    var dataFiltered = Object.keys(data).map(function(k) {
      return {label: k, value: data[k]};
    }).sort(function(a, b) {
      if(a.value < b.value) return 1;
      if(a.value > b.value) return -1;
      return 0;
    });

    var bars = ['data1'].concat(dataFiltered.map(function(bar) {
      return bar.value;
    }));
    var labels = dataFiltered.map(function(bar) {
      return bar.label;
    });

    return c3.generate({
      bindto: el[0],
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
        left: 250,
      },
      size: {
        height: 20 * labels.length
      },
      bar: {
        width: {
          ratio: 0.2 // this makes bar width 50% of length between ticks
        }
      },
      axis: {
        rotated: true,
        x: {
          type: 'category',
          categories: labels,
          tick: {
            multiline: false,
            outer: false
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
      },
      oninit: function () {
        this.main.append('rect')
            .style('fill', 'white')
            .attr('x', 0.5)
            .attr('y', -0.5)
            .attr('width', this.width)
            .attr('height', this.height)
          .transition().duration(5000)
            .attr('x', this.width)
            .attr('width', 0)
          .remove();
      }
    });
  }
}

export function verticalChart(data, el) {
  console.log('gets here')
  var colors = {};
  data.data.forEach(function(bar, i) {
    colors['data' + (i + 1)] = bar.color;
  });
  var columns = data.data.map(function(k, i) {
    return ['data' + (i + 1)].concat(k.values);
  })
  let names = {};
  data.data.forEach(function(bar, i) {
    names['data' + (i + 1)] = bar.name;
  });

  // console.log(colors, columns)
  console.log('test', c3)
  return c3.generate({
    bindto: el[0],
    data: {
      columns: columns,
      type: 'bar',
      labels: {
        // show: true,
        format: function(v) { return v + '%'; }
      },
      colors: colors,
      names: names
    },
    bar: {
      width: {
        ratio: 0.8 // this makes bar width 50% of length between ticks
      }
    },
    grid: {
      y: {
        show: true
      }
    },
    axis: {
      x: {
        type: 'category',
        categories: data.categories,
        tick: {
          multiline: false,
          outer: false
        },
        height: 50,
        width: 200
      },
      y: {
        tick: {
          format: function(v) { return v + '%'; }
        }
      }
    },
    legend: {
      show: true
    },
    tooltip: {
      show: false
    }
  });
}