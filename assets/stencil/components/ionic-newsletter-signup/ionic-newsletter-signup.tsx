import { Component, Prop, State } from '@stencil/core';
import { EmailIcon } from './ico-email';

@Component({
  tag: 'ionic-newsletter-signup',
  styleUrl: 'ionic-newsletter-signup.scss',
  shadow: false
})
export class IonicNewsletterSignup {

  @Prop() placeholder: string = 'Email address';
  @Prop() buttonText: string = 'Subscribe';
  @Prop() darkMode: boolean = false;
  @Prop() homepageMode: boolean = false;
  @Prop() arrowMode: boolean = false;
  @Prop() lg: boolean = false;
  @Prop() kind: string = 'default';

  @State() isLoading: boolean = false;
  @State() hasSubmitted: boolean = false;
  @State() email: string = null;

  hsFormIds = {
    default: '76e5f69f-85fd-4579-afce-a1892d48bb32',
    podcast: ''
  }

  handleEmailChange(event) {
    this.email = event.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.email;
    this.isLoading = true;
    var xhr = new XMLHttpRequest();   // new HttpRequest instance
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
    xhr.send(JSON.stringify({ email: this.email, podcast: this.kind === 'podcast'}));
  }

  hubspotIdentify(email: string) {
    const _hsq = window['_hsq'] = window['_hsq'] || [];
    _hsq.push(["identify",{
      email: email
    }]);
     _hsq.push(["trackEvent", {
        id: "Signed Up for Newsletter",
        value: true
    }]);

    // Send 
    var xhr = new XMLHttpRequest();
    var url = [
      'https://api.hsforms.com/submissions/v3/integration/submit',
      '3776657',
      '76e5f69f-85fd-4579-afce-a1892d48bb32'].join('/');
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json)
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
    return (
      <form
        onSubmit={(e) => this.handleSubmit(e)}
        class={this.getFormClass()}>

        {this.homepageMode ? <EmailIcon/> : ''}

        <input
          name="email"
          type="email"
          value={this.email}
          onInput={() => this.handleEmailChange(event)}
          disabled={this.isLoading}
          placeholder={this.placeholder}
          required />

        <ionic-button
          color={this.darkMode ? 'white' : 'default'}
          type="submit"
          disabled={this.isLoading || this.hasSubmitted}>

          {this.hasSubmitted ? 'Added!' :
            this.arrowMode || this.homepageMode ?
              <ion-icon name="md-arrow-forward"></ion-icon> : this.buttonText
          }
        </ionic-button>
      </form>
    );
  }
}
