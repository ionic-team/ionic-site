import { 
  Component,
  State
} from '@stencil/core';

import { LogoBlog } from '../../icons';

@Component({
  tag: 'ionic-blog-latest',
  styleUrl: 'ionic-blog-latest.scss',
  shadow: true
})
export class IonicBlogLatest {

  @State() post:any = null;

  feedURL = 'https://ionicframework.com/blog/feed/json';

  constructor() {
    console.log('gets here')
    this.getLatest();
  }

  async getLatest() {
    const response = await fetch(this.feedURL).then(res => res.json());
    this.post = response.items[0]
  }


  render() {
    if (!this.post) {
      return <slot/>
    }

    return (
      <a href="https://ionicframework.com/blog/quick-guide-comparing-ionic-and-flutter/">
        <LogoBlog/>
        <span>Any now for something completely different...</span>
        {/* include '_includes/svg/ico-forward.svg' */}
      </a>
    );
  }
}
