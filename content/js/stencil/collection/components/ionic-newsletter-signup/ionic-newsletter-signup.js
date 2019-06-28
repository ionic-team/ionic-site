import { EmailIcon } from './ico-email';
export class IonicNewsletterSignup {
    constructor() {
        this.placeholder = 'Email address';
        this.buttonText = 'Subscribe';
        this.darkMode = false;
        this.homepageMode = false;
        this.arrowMode = false;
        this.lg = false;
        this.kind = 'default';
        this.isLoading = false;
        this.hasSubmitted = false;
        this.email = null;
        this.hsFormIds = {
            default: '76e5f69f-85fd-4579-afce-a1892d48bb32',
            podcast: ''
        };
    }
    handleEmailChange(event) {
        this.email = event.target.value;
    }
    handleSubmit(e) {
        e.preventDefault();
        const email = this.email;
        this.isLoading = true;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/v1/newsletter");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.isLoading = false;
                var json = JSON.parse(xhr.responseText);
                this.hasSubmitted = json.ok;
                this.hubspotIdentify(email);
            }
        };
        xhr.send(JSON.stringify({ email: this.email, podcast: this.kind === 'podcast' }));
    }
    hubspotIdentify(email) {
        const _hsq = window['_hsq'] = window['_hsq'] || [];
        _hsq.push(["identify", {
                email: email
            }]);
        _hsq.push(["trackEvent", {
                id: "Signed Up for Newsletter",
                value: true
            }]);
        var xhr = new XMLHttpRequest();
        var url = [
            'https://api.hsforms.com/submissions/v3/integration/submit',
            '3776657',
            '76e5f69f-85fd-4579-afce-a1892d48bb32'
        ].join('/');
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json);
            }
        };
        xhr.send(JSON.stringify({
            fields: [{
                    name: 'email',
                    value: this.email
                }],
            context: {
                hutk: document.cookie.match(/hubspotutk=(.*?);/)[1],
                pageUri: window.location.href,
                pageName: document.title
            }
        }));
    }
    getFormClass() {
        let str = this.darkMode ? 'dark' : '';
        if (this.arrowMode) {
            str += ' arrow';
        }
        if (this.homepageMode) {
            str += ' homepage';
        }
        if (this.lg) {
            str += ' lg';
        }
        return str;
    }
    render() {
        return (h("form", { onSubmit: (e) => this.handleSubmit(e), class: this.getFormClass() },
            this.homepageMode ? h(EmailIcon, null) : '',
            h("input", { name: "email", type: "email", value: this.email, onInput: () => this.handleEmailChange(event), disabled: this.isLoading, placeholder: this.placeholder, required: true }),
            h("ionic-button", { color: this.darkMode ? 'white' : 'default', type: "submit", disabled: this.isLoading || this.hasSubmitted }, this.hasSubmitted ? 'Added!' :
                this.arrowMode || this.homepageMode ?
                    h("ion-icon", { name: "md-arrow-forward" }) : this.buttonText)));
    }
    static get is() { return "ionic-newsletter-signup"; }
    static get properties() { return {
        "arrowMode": {
            "type": Boolean,
            "attr": "arrow-mode"
        },
        "buttonText": {
            "type": String,
            "attr": "button-text"
        },
        "darkMode": {
            "type": Boolean,
            "attr": "dark-mode"
        },
        "email": {
            "state": true
        },
        "hasSubmitted": {
            "state": true
        },
        "homepageMode": {
            "type": Boolean,
            "attr": "homepage-mode"
        },
        "isLoading": {
            "state": true
        },
        "kind": {
            "type": String,
            "attr": "kind"
        },
        "lg": {
            "type": Boolean,
            "attr": "lg"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        }
    }; }
    static get style() { return "/**style-placeholder:ionic-newsletter-signup:**/"; }
}
