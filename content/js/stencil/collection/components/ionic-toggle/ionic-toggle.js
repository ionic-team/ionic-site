export class IonicToggle {
    componentDidLoad() {
    }
    selectionChanged(e) {
        const target = e.detail;
        const buttons = this.el.querySelectorAll('ionic-toggle-button');
        Array.prototype.forEach.call(buttons, (child) => {
            child.deselect();
        });
        const tabName = target.tab;
        target.select();
        console.log('Selecting this one', tabName, target);
        const tabs = this.el.querySelectorAll(`ionic-toggle-tab`);
        console.log('Found tabs', tabs);
        Array.prototype.forEach.call(tabs, (tab) => {
            tab.hide();
            if (tab.tab === tabName) {
                tab.show();
            }
        });
    }
    render() {
        return (h("div", { class: "toggle-content" },
            h("div", { class: "toggle-buttons" },
                h("slot", { name: "buttons" })),
            h("div", { class: "toggle-tabs" },
                h("slot", { name: "tabs" }))));
    }
    static get is() { return "ionic-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        }
    }; }
    static get listeners() { return [{
            "name": "toggleSelected",
            "method": "selectionChanged"
        }]; }
    static get style() { return "/**style-placeholder:ionic-toggle:**/"; }
}
