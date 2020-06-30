import { Component, h } from "@stencil/core";

@Component({
  tag: "ionic-social-auth",
  styleUrl: "ionic-social-auth.scss",
  shadow: false,
})
export class IonicSocialAuth {
  handleSubmit(e) {
    e.preventDefault();
    const id = e.target.id;
    const url = `/oauth/login/${id}` + window.location.search;
    window.location.assign(url);
  }

  render() {
    return (
      <form id="ionic-social-auth">
          <button type="button" id="github" class="btn btn-block" onClick={this.handleSubmit}>
            <ion-icon name="logo-github" size="small"></ion-icon>
            Continue with GitHub
          </button>
          <button type="button" id="bitbucket" class="btn btn-block" onClick={this.handleSubmit}>
            <ion-icon name="logo-bitbucket" size="small"></ion-icon>
            Continue with Bitbucket
          </button>
          <button type="button" id="gitlab" class="btn btn-block" onClick={this.handleSubmit}>
            <ion-icon name="logo-gitlab" size="small"></ion-icon>
            Continue with GitLab
          </button>
          <div class="or"><span>OR</span></div>
      </form>
    );
  }
}
