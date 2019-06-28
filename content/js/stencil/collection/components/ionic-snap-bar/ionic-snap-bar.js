export class IonicSnapBar {
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
    static get style() { return "/**style-placeholder:ionic-snap-bar:**/"; }
}
