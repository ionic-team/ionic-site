import { h } from '../ionic-site-components.core.js';

const Close = () => (h("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", preserveAspectRatio: "", style: { 'enable-background': 'new 0 0 512 512' } },
    h("path", { d: "M256,307c-2.4,0-4.8-0.4-7-1.2L78.3,246.3c-11.1-3.9-17-16-13.1-27.1c3.9-11.1,16.1-16.9,27.2-13l157.9,55.1\n\tc3.7,1.3,7.7,1.3,11.3,0l157.9-55.1c11.1-3.9,23.3,2,27.2,13c3.9,11.1-2,23.2-13.1,27.1L263,305.8C260.8,306.6,258.4,307,256,307z" })));

class IonicSearch {
    constructor() {
        this.active = false;
        this.query = '';
        this.pending = 0;
        this.results = null;
        this.dragY = null;
        this.startY = null;
        this.screenHeight = null;
        this.URLS = () => {
            const api = 'https://api.swiftype.com/api/v1/public/engines/';
            const key = '9oVyaKGPzxoZAyUo9Sm8';
            return {
                autocomplete: query => `${api}suggest.json?q=${query}&engine_key=${key}`,
                search: query => `${api}search.json?q=${query}&engine_key=${key}`
            };
        };
        this.activate = this.activate.bind(this);
        this.close = this.close.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.touchStart = this.touchStart.bind(this);
        this.touchMove = this.touchMove.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
        this.urls = this.URLS();
    }
    activate() {
        this.active = true;
        this.el.classList.add('active');
        setTimeout(() => {
            this.el.querySelector('input').focus();
        }, 500, this);
    }
    close() {
        this.active = false;
        this.el.classList.remove('active');
        this.el.querySelector('input').blur();
        setTimeout(() => {
            this.el.querySelector('input').value = '';
            this.results = null;
        }, 500, this);
    }
    async onKeyUp(e) {
        if (e.keyCode === 27) {
            this.close();
            return;
        }
        if (e.target.value.length < 3) {
            this.results = null;
            return;
        }
        this.query = e.target.value;
        this.pending++;
        const resp = await fetch(this.urls.autocomplete(this.query));
        const res = await resp.json();
        this.pending--;
        this.results = res.records.page;
    }
    touchStart(e) {
        this.screenHeight = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        this.startY = Math.round(e.touches.item(0).screenY);
    }
    touchMove(e) {
        e.preventDefault();
        this.dragY = Math.max(0, Math.round((e.touches.item(0).screenY - this.startY) / this.screenHeight * 100));
        this.dragStyles = {
            transitionDuration: '.1s',
            transform: `translate3d(0, ${this.dragY}%, 0)`
        };
    }
    isFirefox() {
        return navigator.userAgent.indexOf("Firefox") != -1;
    }
    touchEnd() {
        if (this.dragY > 30) {
            this.close();
        }
        this.dragY = null;
        this.startY = null;
        this.dragStyles = {};
    }
    render() {
        return [
            h("div", { class: `search-box${this.active ? ' active' : ''}`, style: this.dragStyles, onTouchMove: e => this.results && this.results.length > 5 ?
                    null : e.preventDefault() },
                h("input", { type: "text", onKeyUp: this.onKeyUp, placeholder: "Search Ionic.." }),
                h("ion-icon", { class: `search-static ${this.active ? ' active' : ''}`, name: "md-search" }),
                this.mobile && !this.isFirefox() ?
                    h("div", { class: "mobile-close", onClick: this.close, onTouchStart: this.touchStart, onTouchMove: this.touchMove, onTouchEnd: this.touchEnd },
                        h(Close, null))
                    :
                        h("ion-icon", { class: `close ${this.active ? ' active' : ''}`, name: 'md-close', onClick: this.close }),
                this.results !== null ? h("ul", null,
                    this.results.map(result => h("li", null,
                        h("a", { href: result.url, title: result.title },
                            h("strong", null, result.title),
                            h("span", { innerHTML: result.highlight.sections })))),
                    this.results.length === 0 ?
                        h("li", null,
                            h("span", { class: "no-results" }, "No results"))
                        : null) : null,
                h("div", { class: `slot ${this.results === null ? '' : 'hidden'}` },
                    h("slot", null)),
                this.pending > 0 ? h("span", { class: "searching" }) : null),
            h("ion-icon", { class: `search ${this.active ? ' active' : ''}`, name: "md-search", onClick: this.active ? null : this.activate }),
            h("div", { class: `backdrop ${this.active ? 'active' : null}`, onClick: this.close })
        ];
    }
    static get is() { return "ionic-search"; }
    static get properties() { return {
        "active": {
            "state": true
        },
        "dragStyles": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "mobile": {
            "type": Boolean,
            "attr": "mobile"
        },
        "pending": {
            "state": true
        },
        "query": {
            "state": true
        },
        "results": {
            "state": true
        }
    }; }
    static get style() { return "\@-webkit-keyframes ionic-search-scan{0%{left:0}to{left:100%}}\@keyframes ionic-search-scan{0%{left:0}to{left:100%}}\@-webkit-keyframes ionic-search-scan-mobile{0%{left:calc(0% + 8px)}to{left:calc(100% - 16px)}}\@keyframes ionic-search-scan-mobile{0%{left:calc(0% + 8px)}to{left:calc(100% - 16px)}}ionic-search{display:block;display:inline-block}ionic-search svg{fill:#727a87}ionic-search ion-icon{font-size:18px;cursor:pointer}ionic-search ion-icon:hover svg{fill:#3880ff}ionic-search .search{right:115px;font-size:18px;margin-top:7px;color:#fff;-webkit-transition:opacity .2s,-webkit-transform .4s cubic-bezier(.23,1,.32,1);transition:opacity .2s,-webkit-transform .4s cubic-bezier(.23,1,.32,1);transition:opacity .2s,transform .4s cubic-bezier(.23,1,.32,1);transition:opacity .2s,transform .4s cubic-bezier(.23,1,.32,1),-webkit-transform .4s cubic-bezier(.23,1,.32,1)}ionic-search .search.active{cursor:default;opacity:0;-webkit-transform:scale3d(0,0,1);transform:scale3d(0,0,1)}ionic-search .search svg{fill:#a8b0be;width:18px;height:18px}ionic-search .search-static{left:15px;z-index:2;opacity:0;-webkit-transform:translate3d(0,-25px,0);transform:translate3d(0,-25px,0);-webkit-transition:opacity .1s,-webkit-transform .4s cubic-bezier(.23,1,.32,1);transition:opacity .1s,-webkit-transform .4s cubic-bezier(.23,1,.32,1);transition:transform .4s cubic-bezier(.23,1,.32,1),opacity .1s;transition:transform .4s cubic-bezier(.23,1,.32,1),opacity .1s,-webkit-transform .4s cubic-bezier(.23,1,.32,1)}ionic-search .close{right:11px;z-index:2;opacity:0;pointer-events:none;-webkit-transition:opacity .3s;transition:opacity .3s}ionic-search .close.active{pointer-events:all;opacity:1;-webkit-transform:none;transform:none}ionic-search input{width:100%;margin-left:0;padding-left:40px;padding-right:40px;outline:none;border:none;z-index:2;background:#fff;border-radius:6px;padding:14px 30px 14px 41px;font-size:14px;letter-spacing:-.01em;position:relative;opacity:0;-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0);-webkit-transition:opacity .2s,-webkit-transform .4s cubic-bezier(.23,1,.32,1);transition:opacity .2s,-webkit-transform .4s cubic-bezier(.23,1,.32,1);transition:opacity .2s,transform .4s cubic-bezier(.23,1,.32,1);transition:opacity .2s,transform .4s cubic-bezier(.23,1,.32,1),-webkit-transform .4s cubic-bezier(.23,1,.32,1)}ionic-search input::-webkit-input-placeholder{color:#a8b0be}ionic-search input:-ms-input-placeholder{color:#a8b0be}ionic-search input::-ms-input-placeholder{color:#a8b0be}ionic-search input::placeholder{color:#a8b0be}ionic-search .slot .hidden{display:none}ionic-search ul{position:relative;background:#fff;list-style:none;margin-top:4px;margin-bottom:0;border-radius:6px;text-align:left;padding:19px 3px;-webkit-box-shadow:0 8px 16px rgba(0,0,0,.08);box-shadow:0 8px 16px rgba(0,0,0,.08);opacity:0;-webkit-transform:translate3d(0,-50px,0);transform:translate3d(0,-50px,0);-webkit-transition:opacity .2s,-webkit-transform .5s cubic-bezier(.23,1,.32,1);transition:opacity .2s,-webkit-transform .5s cubic-bezier(.23,1,.32,1);transition:transform .5s cubic-bezier(.23,1,.32,1),opacity .2s;transition:transform .5s cubic-bezier(.23,1,.32,1),opacity .2s,-webkit-transform .5s cubic-bezier(.23,1,.32,1)}ionic-search ul strong{display:block;font-weight:600}ionic-search ul span{color:#767d88;font-size:12px}ionic-search ul span em{color:#727a87}ionic-search a,ionic-search ul .no-results{padding:8px 40px;color:#2a2f38}ionic-search a{display:inline-block;font-weight:600;width:100%;-webkit-transition:color .2s,background-color .2s;transition:color .2s,background-color .2s}ionic-search a:hover{color:#3880ff;background-color:#fafafa}ionic-search .searching{position:absolute;height:1px;width:8px;background:#3880ff;top:30px;left:0;-webkit-animation:ionic-search-scan 1s ease-in-out infinite;animation:ionic-search-scan 1s ease-in-out infinite}ionic-search .search-box{position:absolute;left:calc(50% - 330px);width:660px;top:10px;z-index:1;padding-top:2px;pointer-events:none;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}ionic-search .search-box ion-icon{top:17px;font-size:17px;position:absolute}ionic-search .search-box.active{pointer-events:all}ionic-search .search-box.active ul{-webkit-transform:none;transform:none;opacity:1;-webkit-transition-delay:.2s;transition-delay:.2s}ionic-search .search-box.active input{-webkit-transition-delay:.1s;transition-delay:.1s}ionic-search .search-box.active .close,ionic-search .search-box.active .search-static,ionic-search .search-box.active input{-webkit-transform:none;transform:none;opacity:1}ionic-search .search-box.active .close{-webkit-transition-delay:.4s;transition-delay:.4s}ionic-search .backdrop{background:rgba(0,8,24,.4);position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;pointer-events:none;-webkit-transition:all .4s ease;transition:all .4s ease}ionic-search .backdrop.active{opacity:1;pointer-events:all}ionic-search[mobile]{display:block}ionic-search[mobile] .search{color:#999;right:auto;left:0;bottom:0;font-size:28px;padding:22px;top:auto;z-index:3;position:fixed}ionic-search[mobile] .backdrop{top:0;background:rgba(0,0,0,.5);z-index:2}ionic-search[mobile] .search-box{width:auto;left:2px;right:2px;top:42px;bottom:0;padding:60px 12px 48px;position:fixed;z-index:3;background:#fff;border-top-left-radius:12px;border-top-right-radius:12px;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:-webkit-transform .4s cubic-bezier(.23,1,.32,1);transition:-webkit-transform .4s cubic-bezier(.23,1,.32,1);transition:transform .4s cubic-bezier(.23,1,.32,1);transition:transform .4s cubic-bezier(.23,1,.32,1),-webkit-transform .4s cubic-bezier(.23,1,.32,1)}ionic-search[mobile] .search-box.active{-webkit-transform:none;transform:none}ionic-search[mobile] .mobile-close{-webkit-transition-delay:0;transition-delay:0;left:calc(50% - 24px);top:0;left:0;right:0;position:absolute}ionic-search[mobile] .mobile-close svg{position:absolute;top:8px;width:40px;height:40px;left:calc(50% - 20px)}ionic-search[mobile] .searching{top:113px;z-index:3;-webkit-animation:ionic-search-scan-mobile 1s ease-in-out infinite;animation:ionic-search-scan-mobile 1s ease-in-out infinite}ionic-search[mobile] ul{opacity:1;-webkit-transform:none;transform:none;z-index:3;top:auto;-webkit-box-shadow:none;box-shadow:none;width:100%;max-height:calc(100vh - 154px);overflow:touch}ionic-search[mobile] .search-static{-webkit-transform:none;transform:none;opacity:1;z-index:3;top:71px;left:22px}ionic-search[mobile] a{padding-left:20px;padding-right:20px}ionic-search[mobile] input{margin:0 0 10px;padding:10px 40px 8px;background:#eceef2;border-radius:12px;width:100%}ionic-search[mobile]~.mobile-nav__pane{min-height:100%;background:#fff;-webkit-transition:transform .4s ease,border-radius .4s step-end;transition:transform .4s ease,border-radius .4s step-end}ionic-search[mobile].active~.mobile-nav__pane{border-radius:12px;-webkit-transform:scale3d(.97,.97,1);transform:scale3d(.97,.97,1);-webkit-transition:transform .4s ease;transition:transform .4s ease}.mobile-nav{background:#000!important}"; }
}

export { IonicSearch };
