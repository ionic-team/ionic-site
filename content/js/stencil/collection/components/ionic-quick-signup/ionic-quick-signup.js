export class IonicQuickSignup {
    constructor() {
        this.showPricingNotice = false;
        this.buttonColor = 'white';
        this.transparentInput = false;
    }
    handleSubmit(_) {
        var hsutk = window.getCookie('hubspotutk');
        if (this.hsidRef)
            this.hsidRef.value = hsutk;
        return true;
    }
    render() {
        return (h("form", { class: `form quick-signup-form ${this.transparentInput ? 'transparent-input' : ''}`, role: "form", action: "https://dashboard.ionicframework.com/signup", method: "GET", onSubmit: e => this.handleSubmit(e) },
            h("input", { type: "hidden", name: "hsid", ref: e => this.hsidRef = e }),
            h("input", { type: "hidden", name: "source", value: "homepage-quick" }),
            h("div", { class: "form-group", id: "field-email" },
                h("div", { class: "row" },
                    h("div", { class: "col-sm-8 input-col" },
                        h("input", { class: "form-control", type: "email", placeholder: "Enter your email address", id: "id_email", name: "email", spellcheck: "false", required: true })),
                    h("div", { class: "col-sm-4" },
                        h("button", { type: "submit", class: `btn ${this.buttonColor}` }, "Get started")))),
            this.showPricingNotice ? (h("div", { class: "form-group" },
                "Ionic is free and open source for all developers. We also offer ",
                h("a", { href: "/pricing" }, "enterprise options"),
                " for teams that need support and premium features.")) : null));
    }
    static get is() { return "ionic-quick-signup"; }
    static get properties() { return {
        "buttonColor": {
            "type": String,
            "attr": "button-color"
        },
        "showPricingNotice": {
            "type": Boolean,
            "attr": "show-pricing-notice"
        },
        "transparentInput": {
            "type": Boolean,
            "attr": "transparent-input"
        }
    }; }
    static get style() { return "/**style-placeholder:ionic-quick-signup:**/"; }
}
