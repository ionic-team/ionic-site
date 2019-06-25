import { Component } from '@stencil/core';

@Component({
  tag: 'ionic-blog-latest',
  styleUrl: 'ionic-blog-latest.scss',
  shadow: true
})
export class IonicBlogLatest {

  feedURL = 'https://ionicframework.com/blog/feed/json';

  constructor() {
    console.log('gets here')
    this.getLatest();
  }

  async getLatest() {
    const response = await fetch(this.feedURL).then(res => res.json());
    console.log(response)
  }


  render() {

    return (
      <h1>Gets here</h1>
    );
  }
}
