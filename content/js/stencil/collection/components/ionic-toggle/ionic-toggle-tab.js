export class IonicToggleTab {
    constructor() {
        this.hidden = true;
    }
    hide() {
        this.hidden = true;
    }
    show() {
        this.hidden = false;
    }
    hostData() {
        return {
            style: {
                display: this.hidden ? 'none' : 'block'
            }
        };
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "ionic-toggle-tab"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "hidden": {
            "state": true
        },
        "hide": {
            "method": true
        },
        "show": {
            "method": true
        },
        "tab": {
            "type": String,
            "attr": "tab"
        }
    }; }
}
