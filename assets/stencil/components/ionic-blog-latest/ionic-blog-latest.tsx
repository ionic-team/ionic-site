import { 
  Component,
  State
} from '@stencil/core';

import { ForwardIcon, LogoBlog } from '../../icons';

@Component({
  tag: 'ionic-blog-latest',
  styleUrl: 'ionic-blog-latest.scss',
  shadow: false
})
export class IonicBlogLatest {

  @State() post:any = null;

  feedURL = 'https://ionicframework.com/blog/feed/json';

  constructor() {
    this.getLatest();
  }

  async getLatest() {
    const response = await fetch(this.feedURL).then(res => res.json());
    this.post = response.items[0];
  }


  render() {
    if (!this.post) {
      return (
        <a href="https://ionicframework.com/blog">
          <LogoBlog/>
          <span>Get the latest from the Ionic Blog&hellip;</span>
          <ForwardIcon/>
        </a>
      );
    }

    return (
      <a href={this.post.url}>
        <LogoBlog/>
        <span>{this.post.title}&hellip;</span>
        <ForwardIcon/>
      </a>
    );
  }
}
