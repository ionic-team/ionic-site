import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'ionic-newsletter-signup',
  styleUrl: 'ionic-newsletter-signup.scss',
  shadow: false
})
export class IonicNewsletterSignup {

  @Prop() placeholder: string = 'Email address';
  @Prop() buttonText: string = 'Subscribe';
  @Prop() darkMode: boolean = false;
  @Prop() arrowMode: boolean = false;
  @Prop() lg: boolean = false;

  @State() isLoading: boolean = false;
  @State() hasSubmitted: boolean = false;
  @State() email: string = null;

  handleEmailChange(event) {
    this.email = event.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.isLoading = true;
    var xhr = new XMLHttpRequest();   // new HttpRequest instance
    xhr.open("POST", "/api/v1/newsletter");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
      console.log(xhr)
      if (xhr.readyState === 4 && xhr.status === 200) {
          this.isLoading = false;
          var json = JSON.parse(xhr.responseText);
          this.hasSubmitted = json.ok;
      }
    };
    xhr.send(JSON.stringify({ email: this.email}));
  }

  getFormClass() {
    let str = this.darkMode ? 'dark' : '';
    if (this.arrowMode) {
      str += ' arrow';
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
            this.arrowMode ?
              <ion-icon name="md-arrow-forward"></ion-icon> : this.buttonText
          }
        </ionic-button>
      </form>
    );
  }
}
