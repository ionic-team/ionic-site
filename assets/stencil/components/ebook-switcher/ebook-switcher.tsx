import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ebook-switcher',
  styleUrl: 'ebook-switcher.scss',
  shadow: false
})
export class EbookSwitcher {

  data = {
    'hybrid-vs-native': {
      image: {
        url: 'https://images.prismic.io/ionicframeworkcom/dc70a9c1-eb1f-4e1a-8a89-ab6db635caba_book-hybrid-vs-native%402x.png?auto=compress,format',
        alt: ''
      },
      text: {
        normal: "Learn the differences between hybrid and native apps.",
        bold: "We break down all the myths and misconceptions."
      }
    }
  }

  @Prop() id: string;

  render() {
    const { data, id } = this;

    return (
      <Host>
        <div class="container">
          <div class="wrapper">
            <div class="image-wrapper">
              <img
                loading="lazy"
                width="624"
                height="808"
                src={data[id].image.url}
                alt={data[id].image.alt}
              />
            </div>
            <div class="heading-group">
              <h2>
                {data[id].text.normal}{' '}
                <span>{data[id].text.normal}</span>
              </h2>
              <a
                data-toggle="modal" data-target="#hubspotForm"
                // onclick="(e) => {
                //   e.preventDefault();
                //   c('test', 'home-cards', this, 'hybrid-v-native');
                // }"
               >Read the free eBook <span class="arrow">-&gt;</span></a
              >
            </div>
          </div>
        </div>
      </Host>
    );
  }
}


