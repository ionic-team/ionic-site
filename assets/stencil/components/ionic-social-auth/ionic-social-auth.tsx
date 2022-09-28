import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "ionic-social-auth",
  styleUrl: "ionic-social-auth.scss",
  shadow: false,
})
export class IonicSocialAuth {
  @Prop() clientId: string;

  handleSubmit(e) {
    e.preventDefault();
    const id = e.target.id;
    const url = `/oauth/login/${id}` + window.location.search;
    window.location.assign(url);
  }

  render() {
    return (
      <form id="ionic-social-auth">
        {this.clientId == "zendesk"
          ? [
              <h3 class="title-support-account">
                Use your Ionic Support Account
              </h3>,
              <a
                href="https://ionic.zendesk.com/access/normal"
                id="zendesk"
                class="btn btn-block"
              >
                <svg
                  width="17"
                  height="17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6.14v7.36H1.9L8 6.14ZM8 3.5a3.05 3.05 0 1 1-6.1 0H8ZM9 13.5a3.05 3.05 0 1 1 6.1 0H9ZM9 10.86V3.5h6.1L9 10.86Z"
                    fill="#fff"
                  />
                </svg>
                Continue -&gt;
              </a>,
              <div class="or">
                <span>OR</span>
              </div>,
              <h3 class="title-ionic-account">Use your Ionic Account</h3>,
            ]
          : null}
        <button
          type="button"
          id="github"
          class="btn btn-block"
          onClick={this.handleSubmit}
        >
          <ion-icon name="logo-github" size="small"></ion-icon>
          Continue with GitHub
        </button>
        <button
          type="button"
          id="bitbucket"
          class="btn btn-block"
          onClick={this.handleSubmit}
        >
          <ion-icon name="logo-bitbucket" size="small"></ion-icon>
          Continue with Bitbucket
        </button>
        <button
          type="button"
          id="gitlab"
          class="btn btn-block"
          onClick={this.handleSubmit}
        >
          <ion-icon name="logo-gitlab" size="small"></ion-icon>
          Continue with GitLab
        </button>
        <div class="or">
          <span>OR</span>
        </div>
      </form>
    );
  }
}
