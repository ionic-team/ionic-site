import { h } from '../ionic-site-components.core.js';

class IonicSlider {
    constructor() {
        this.slideCount = 1;
        this.timer = null;
        this.old = null;
        this.upcoming = null;
        this.slideDelay = 10000;
        this.current = 0;
        this.status = [];
        this.ticker = 0;
        this.next = () => {
            this.goTo(this.current >= this.slideCount - 1 ? 0 : this.current + 1);
        };
        this.goTo = (slide) => {
            if (!this.status[slide])
                return;
            clearTimeout(this.timer);
            this.old = this.current;
            setTimeout(this.deactivate, 1000);
            this.upcoming = this.current = slide;
            this.status[slide].visible = true;
            this.status[slide].new = true;
            setTimeout(this.activate, 500);
            this.timer = setTimeout(this.next, this.slideDelay);
            this.ticker++;
        };
        this.deactivate = () => {
            this.status[this.old].active = false;
            this.status[this.old].visible = false;
            this.status[this.current].new = false;
            this.ticker++;
        };
        this.activate = () => {
            this.status[this.current].active = true;
            this.ticker++;
        };
        this.getClasses.bind(this);
        this.goTo.bind(this);
        this.activate.bind(this);
        this.deactivate.bind(this);
        this.next.bind(this);
        for (let i = 0; i < this.slideCount; i++) {
            this.status.push({
                visible: i === 0,
                active: i === 0,
                new: false
            });
        }
    }
    componentDidLoad() {
        this.timer = setTimeout(this.next, this.slideDelay);
    }
    getClasses(item) {
        return [
            this.status[item].visible ? 'visible' : '',
            this.status[item].active ? 'active' : '',
            this.status[item].new ? 'new' : ''
        ].join(' ');
    }
    render() {
        return [
            h("div", { class: this.getClasses(0) },
                h("slot", { name: "slide-0" })),
            h("div", { class: this.getClasses(1) },
                h("slot", { name: "slide-1" })),
            h("ul", { class: "dots" },
                h("li", { class: this.current === 0 ? 'active' : '', onClick: this.goTo.bind(this, 0) }),
                h("li", { class: this.current === 1 ? 'active' : '', onClick: this.goTo.bind(this, 1) }))
        ];
    }
    static get is() { return "ionic-slider"; }
    static get properties() { return {
        "current": {
            "state": true
        },
        "status": {
            "state": true
        },
        "ticker": {
            "state": true
        }
    }; }
    static get style() { return "ionic-slider{position:relative}ionic-slider>div,ionic-slider [slot^=slide-]{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}ionic-slider>div{display:none;-webkit-animation:fadeIn .5s ease;animation:fadeIn .5s ease}ionic-slider>div.visible{display:block}ionic-slider>div.visible.new{z-index:1}ionic-slider .dots{position:absolute;top:0;bottom:0;left:20px;padding:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;z-index:2}ionic-slider .dots li{height:8px;width:8px;border-radius:50%;border:1px solid hsla(0,0%,100%,.5);margin-bottom:4px;list-style:none;cursor:pointer;-webkit-transition:background-color .5s ease,border-color .5s ease;transition:background-color .5s ease,border-color .5s ease}ionic-slider .dots li.active{background-color:#fff;border-color:#fff}"; }
}

export { IonicSlider };
