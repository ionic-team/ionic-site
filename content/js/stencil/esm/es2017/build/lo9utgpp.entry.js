import { h } from '../ionic-site-components.core.js';

class IonicBarChart {
    constructor() {
    }
    componentWillLoad() {
    }
    componentDidLoad() {
    }
    hexToRgb(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (_, r, g, b) {
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
            };
        }).map((item, i) => {
            return Object.assign({}, item, { styles: {
                    bar: {
                        width: `${Math.round((item.value / max) * 100)}%`,
                        background: i > 1 ?
                            `rgba(91,112,139) linear-gradient(to right, ${color.map(item => `rgba(${this.hexToRgb(item)}, .2)`).join(', ')})` :
                            `linear-gradient(to right, ${color.join(', ')})`
                    },
                    text: {
                        color: i > 1 ? '#5B708B' : color[color.length - 1]
                    }
                } });
        });
    }
    render() {
        return [
            h("figure", null, this.prepareData().map(item => {
                return [
                    h("div", { class: "bar-container" },
                        h("div", { class: "bar", style: item.styles.bar },
                            h("span", { style: item.styles.text },
                                item.value,
                                "%"))),
                    h("strong", null, item.name)
                ];
            }))
        ];
    }
    static get is() { return "ionic-bar-chart"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "data": {
            "type": String,
            "attr": "data"
        }
    }; }
    static get style() { return "ionic-bar-chart{font-style:normal;font-weight:400;line-height:normal;font-size:16px;display:block;letter-spacing:-.04em}ionic-bar-chart .bar-container{width:100%;padding-right:50px;max-width:697px}ionic-bar-chart .bar{height:12px;position:relative;border-radius:2px}ionic-bar-chart .bar span{position:absolute;right:-40px;font-weight:500;top:-3px}ionic-bar-chart strong{margin-top:10px;display:block;font-weight:400;margin-bottom:34px}"; }
}

export { IonicBarChart };
