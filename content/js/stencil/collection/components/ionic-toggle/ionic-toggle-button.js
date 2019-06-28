export class IonicToggleButton {
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
    static get style() { return "/**style-placeholder:ionic-toggle-button:**/"; }
}
