import { Component, h } from '@stencil/core';

@Component({
  tag: 'twitter-script',
  shadow: false
})
export class TwitterScript {
  scriptEl: HTMLScriptElement;

  componentDidLoad() {
    const scriptValue = `
window.twttr = (function (d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0],
  t = window.twttr || {};
if (d.getElementById(id)) return t;
js = d.createElement(s);
js.id = id;
js.src = "https://platform.twitter.com/widgets.js";
fjs.parentNode.insertBefore(js, fjs);

t._e = [];
t.ready = function (f) {
  t._e.push(f);
};

return t;
}(document, "script", "twitter-wjs"));`

    const script = document.createElement('script') as HTMLScriptElement;

    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = scriptValue;
    document.body.appendChild(script);
  }

  componentDidUnload() {
    this.scriptEl && this.scriptEl.parentNode.removeChild(this.scriptEl);
  }

  render() {
    return <span />;
  }
}