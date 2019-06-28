import { h } from '../ionic-site-components.core.js';

class IonicToggleButton {
    constructor() {
        this.selected = false;
    }
    deselect() {
        this.selected = false;
    }
    select() {
        this.selected = true;
    }
    handleSelected() {
        this.toggleSelected.emit(this);
    }
    hostData() {
        return {
            class: {
                selected: this.selected
            }
        };
    }
    render() {
        return (h("div", { onClick: _ => this.handleSelected() }, this.title));
    }
    static get is() { return "ionic-toggle-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "deselect": {
            "method": true
        },
        "select": {
            "method": true
        },
        "selected": {
            "state": true
        },
        "tab": {
            "type": String,
            "attr": "tab"
        },
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
    static get events() { return [{
            "name": "toggleSelected",
            "method": "toggleSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host{display:-ms-flexbox;display:flex;text-decoration:none;cursor:pointer;border:1px solid #eee;text-align:center;font-size:14px}:host,div{-ms-flex:1;flex:1}div{padding:16px}:host(:last-child){border-left:none}:host(.selected){background-color:#4f8ef7;color:#fff;font-weight:700}"; }
}

export { IonicToggleButton };
