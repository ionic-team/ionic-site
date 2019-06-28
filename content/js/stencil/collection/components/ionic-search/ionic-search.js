import { Close } from './arrow.svg';
export class IonicSearch {
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
    static get style() { return "/**style-placeholder:ionic-search:**/"; }
}
