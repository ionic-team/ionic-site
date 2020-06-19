import Prismic from 'prismic-javascript';
import { Component, Prop, h, Host, State } from '@stencil/core';
import defaultResources from './default.json';

@Component({
  tag: 'additional-resources',
  styleUrl: 'additional-resources.scss',
  shadow: false
})
export class AdditionalResources {
  @Prop() page: string = 'default';

  @State() headline: string = 'Related Reading';
  @State() resources: { [key: string]: any }[] = [];

  apiURL = 'https://ionicframeworkcom.prismic.io/api/v2';
  fields = ['title', 'tagline', 'hero_image', 'meta_image'];
  categories = ['article', 'blog', 'book', 'case-study', 'course', 'podcast', 'video', 'webinar', 'whitepaper'];


  async componentWillLoad() {
    let linkedFields = [];
    this.categories.forEach(category => {
      this.fields.forEach(field => {
        linkedFields.push(`${category}.${field}`);
      });
    });

    try {
      const api = await Prismic.getApi(this.apiURL);
      const response = await api.getSingle('related_resources', {'fetchLinks' : linkedFields});

      this.headline = this.page === 'default' ? 
        response.data.text.text : response.data[`${this.page}_text`].text;
      this.headline = this.headline ?? 'Related Reading';

      const resourcesTmp = this.page === 'default' ? 
        response.data.resources : response.data[`${this.page}_resources`];
      this.resources = resourcesTmp.map(r => r.resource);

      // console.log(this.headline, this.resources)
    } catch (e) {
      console.warn(e);
      console.log('Using default Related Resources instead');
      this.headline = 'Related Reading';
      this.resources = defaultResources;
    }
  }

  renderResource(resource) {
    console.log(resource)
    // default image in case it's not set
    let image = resource.data.hero_image ? 
      resource.data.hero_image.url.replace(/\?.*/,'') :
      'https://ionicframework.com/img/resource-center/card-webinar-hybrid-vs-native.png';
    image += '?auto=compress,format&fit=crop&';
    return (
      <li>
        <a href={`/resources/${resource.type === 'case-study' ? 'case-studies' : `${resource.type}s`}/${resource.uid}`}>
          <div class="img-wrapper">
            <img src={`${image}w=560&h=360`}
                 srcset={`${image}w=280&h=180 1x, ${image}w=560&h=360 2x`}
                 width="280" 
                 height="180" 
                 loading="lazy" 
                 alt={resource.data.title}/>
          </div>
          <h6>{resource.type}</h6>
          <h4>{resource.data.title}</h4>
          <p class="small">{resource.data.tagline}</p>
        </a>
      </li>
    )
  }

  render() {
    if (this.resources.length < 1) return;
    return (
      <Host class="resources">
        <hgroup>
          <h3>{this.headline}</h3>
          <h5>
            <a href="/resources">
              See all resources 
              <ion-icon name="ios-arrow-forward" role="img" class="md hydrated" aria-label="ios arrow forward"></ion-icon>
            </a>
          </h5>
        </hgroup>
        <ul class="cards">
          {this.resources.map(resource => this.renderResource(resource))}
        </ul>
      </Host>
    );
  }
}
