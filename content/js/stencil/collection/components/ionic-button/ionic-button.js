export class IonicButton {
    constructor() {
        this.color = 'default';
        this.type = 'button';
        this.disabled = false;
    }
    render() {
        if (this.disabled) {
            return (h("button", { class: this.color, type: this.type, disabled: true },
                h("slot", null)));
        }
        return (h("button", { class: this.color, type: this.type },
            h("slot", null)));
    }
    static get is() { return "ionic-button"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return "/**style-placeholder:ionic-button:**/"; }
}
