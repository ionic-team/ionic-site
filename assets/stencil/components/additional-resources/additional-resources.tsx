import Prismic from 'prismic-javascript';
import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'additional-resources',
  styleUrl: 'additional-resources.scss',
  shadow: false
})
export class AdditionalResources {
  apiURL = 'https://ionicframeworkcom.prismic.io/api/v2';

  @Prop() page: string = 'Main';

  async componentWillLoad() {
    const api = await Prismic.getApi('https://ionicframeworkcom.prismic.io/api/v2');
    const response = await api.getSingle('resources_landing',  {'fetchLinks' : ['article.author']});
    console.log(response)
  }

  render() {
    return (
      <Host>
        <hgroup>
          <h3>Related Reading</h3>
          <h5><a href="/resources">See all resources <ion-icon name="ios-arrow-forward" role="img" class="md hydrated" aria-label="ios arrow forward"></ion-icon></a></h5>
        </hgroup>
        <ul class="cards">
          <li>
            <a href="/resources/articles/what-is-a-ui-component-library">
              <div class="img-wrapper">
                <img src="/img/resource-center/card-what-is-a-ui-component-library.jpg" width="348" height="224" loading="lazy" alt="What is a UI Component Library"/>
              </div>
              <h6></h6>
              <h4></h4>
              <p class="small"></p>
            </a>
          </li>
        </ul>
      </Host>
    );
  }
}
