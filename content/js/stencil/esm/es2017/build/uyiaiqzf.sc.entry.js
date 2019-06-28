import { h } from '../ionic-site-components.core.js';

class IconExternal {
    render() {
        return (h("svg", { class: "new-tab", viewBox: "0 0 12 12", "data-ssrc": "59.1" },
            h("g", { transform: "translate(0,1)", "data-ssrc": "59.0" },
                h("rect", { class: "new-tab__box", x: "0", y: "2", width: "9", height: "9", rx: "1.5", "data-ssrc": "59.0." }),
                h("path", { class: "new-tab__arrow", d: "M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z", "data-ssrc": "59.1." }))));
    }
    static get is() { return "icon-external"; }
    static get style() { return "icon-external{color:#a6b8d2;width:.8em;height:.8em;display:inline-block}icon-external svg{fill:currentColor}icon-external svg .new-tab__box{opacity:.5}icon-external svg .new-tab__arrow{-webkit-transition:transform .2s ease-out,fill .2s ease;transition:transform .2s ease-out,fill .2s ease;will-change:trasnform,fill}a:hover icon-external,icon-external:hover{color:#488aff}a:hover icon-external .new-tab__arrow,icon-external:hover .new-tab__arrow{-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)}"; }
}

export { IconExternal };
