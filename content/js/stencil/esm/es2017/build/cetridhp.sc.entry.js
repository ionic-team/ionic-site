import { h } from '../ionic-site-components.core.js';

class IonicSnapBar {
    constructor() {
        this.active = false;
    }
    componentDidLoad() {
        setTimeout(() => {
            this.active = true;
        }, 2500);
    }
    close() {
        this.active = false;
    }
    render() {
        return [
            h("div", { class: `wrapper ${this.active ? 'active' : ''}` },
                h("slot", null)),
            h("div", { id: "snap-bar-close", class: "close", onClick: this.close.bind(this) }, "\u00D7")
        ];
    }
    static get is() { return "ionic-snap-bar"; }
    static get properties() { return {
        "active": {
            "state": true
        }
    }; }
    static get style() { return "ionic-snap-bar{background:-webkit-gradient(linear,left top,right top,from(#17203d),to(#1f2c53));background:linear-gradient(90deg,#17203d,#1f2c53);display:none;width:100%;position:relative;padding:0 24px;z-index:1;font-family:Eina,Helvetica Neue,Helvetica,sans-serif}ionic-snap-bar.hydrated{display:block}ionic-snap-bar .wrapper{padding:0 16px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;color:hsla(0,0%,100%,.6);margin:0 auto;max-width:586px;height:0;-webkit-transition:height .4s ease,padding .4s ease;transition:height .4s ease,padding .4s ease}ionic-snap-bar .wrapper.active{height:48px;padding-top:13px;padding-bottom:13px}ionic-snap-bar .wrapper.active>*{-webkit-transform:scaleY(1);transform:scaleY(1)}ionic-snap-bar .wrapper.active+.close{opacity:1;pointer-events:all}ionic-snap-bar .wrapper>*{font-size:1em;font-weight:600;display:inline-block;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transition:transform .2s ease;transition:transform .2s ease}ionic-snap-bar .wrapper a{border-radius:1.8em;text-transform:uppercase;color:#fff;text-decoration:none;background:rgba(56,128,255,.28);display:inline-block;padding:6px 12px 4px;font-size:10px;letter-spacing:.1em;margin-bottom:2px;-webkit-transition:background .2s ease;transition:background .2s ease;font-weight:800}ionic-snap-bar .wrapper a:after{content:\"\";border:solid #fff;border-width:0 1px 1px 0;display:inline-block;padding:3px;margin-left:2px;vertical-align:1px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}ionic-snap-bar .wrapper a:hover{background:rgba(56,128,255,.4)}ionic-snap-bar .wrapper h1,ionic-snap-bar .wrapper h2,ionic-snap-bar .wrapper h3,ionic-snap-bar .wrapper h4,ionic-snap-bar .wrapper strong{font-weight:700;color:#fff;letter-spacing:.01em}ionic-snap-bar .close{color:hsla(0,0%,100%,.3);position:absolute;font-size:24px;right:16px;top:5px;cursor:pointer;pointer-events:none;opacity:0;-webkit-transition:opacity .4s ease,color .2s ease;transition:opacity .4s ease,color .2s ease}ionic-snap-bar .close:hover{color:hsla(0,0%,100%,.5)}"; }
}

export { IonicSnapBar };
