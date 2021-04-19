import { Component, Prop, h, Host } from '@stencil/core';
import data from './bookData.json';

@Component({
  tag: 'ebook-switcher',
  styleUrl: 'ebook-switcher.scss',
  shadow: false
})
export class EbookSwitcher {

  @Prop({ reflect: true}) id = 'evaluating-ionic-enterprise';

  render() {
    const { Modal, Dots, id } = this;

    return (
      <Host>
        <Modal />
        <div class="container">
          <div class="wrapper">
            <div class="image-wrapper">
              <div class="dots-wrapper">
                <Dots class="dots-1" />
                <Dots class="dots-2" />
                <div class="image-wrapper-inner">
                  <img
                    loading="lazy"
                    width="312"
                    height="404"
                    src={data[id].image.url}
                    alt={data[id].image.alt}
                  />
                </div>
              </div>
            </div>
            <div class="heading-group">
              <h2>
                {data[id].text.normal}{' '}
                <em>{data[id].text.bold}</em>
              </h2>
              <a
                data-toggle="modal" data-target="#hubspotForm"
                onClick={(e) => {
                  e.preventDefault();
                  window.c('test', 'Testing', this, id);
                }}
               >Read the free eBook <span class="arrow">-&gt;</span></a
              >
            </div>
          </div>
        </div>
      </Host>
    );
  }

  Modal = () => {
    const { id } = this;
    
    return (
      <div
        class="modal collapse fade"
        id="hubspotForm"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <svg data-toggle="modal" data-target="#hubspotForm" class="close-button" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0.0002498626708984375 0.014999866485595703 460.77471923828125 460.7449645996094" style={{enableBackground:"new 0 0 460.775 460.775"}} xmlSpace="preserve">
                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>
                </svg>
              <h2>{data[id].title}</h2>
              <hubspot-form form-id={data[id].formId}></hubspot-form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  Dots = (props) => (
    <svg width="165" height="161" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx="1.7" cy="1.7" r="1.7" fill="#8AA4FF"/><circle cx="1.7" cy="24.1" r="1.7" fill="#8AA4FF"/><circle cx="1.7" cy="46.5" r="1.7" fill="#8AA4FF"/><circle cx="1.7" cy="68.9" r="1.7" fill="#8AA4FF"/><circle cx="1.7" cy="91.3" r="1.7" fill="#8AA4FF"/><circle cx="1.7" cy="113.7" r="1.7" fill="#8AA4FF"/><circle cx="1.7" cy="136.1" r="1.7" fill="#8AA4FF"/><circle cx="1.7" cy="158.6" r="1.7" fill="#8AA4FF"/><circle cx="142.9" cy="1.7" r="1.7" fill="#8AA4FF"/><circle cx="142.9" cy="24.1" r="1.7" fill="#8AA4FF"/><circle cx="142.9" cy="46.5" r="1.7" fill="#8AA4FF"/><circle cx="142.9" cy="68.9" r="1.7" fill="#8AA4FF"/><circle cx="142.9" cy="91.3" r="1.7" fill="#8AA4FF"/><circle cx="142.9" cy="113.7" r="1.7" fill="#8AA4FF"/><circle cx="142.9" cy="136.1" r="1.7" fill="#8AA4FF"/><circle cx="142.9" cy="158.6" r="1.7" fill="#8AA4FF"/><circle cx="102.6" cy="1.7" r="1.7" fill="#8AA4FF"/><circle cx="102.6" cy="24.1" r="1.7" fill="#8AA4FF"/><circle cx="102.6" cy="46.5" r="1.7" fill="#8AA4FF"/><circle cx="102.6" cy="68.9" r="1.7" fill="#8AA4FF"/><circle cx="102.6" cy="91.3" r="1.7" fill="#8AA4FF"/><circle cx="102.6" cy="113.7" r="1.7" fill="#8AA4FF"/><circle cx="102.6" cy="136.1" r="1.7" fill="#8AA4FF"/><circle cx="102.6" cy="158.6" r="1.7" fill="#8AA4FF"/><circle cx="122.7" cy="1.7" r="1.7" fill="#8AA4FF"/><circle cx="122.7" cy="24.1" r="1.7" fill="#8AA4FF"/><circle cx="122.7" cy="46.5" r="1.7" fill="#8AA4FF"/><circle cx="122.7" cy="68.9" r="1.7" fill="#8AA4FF"/><circle cx="122.7" cy="91.3" r="1.7" fill="#8AA4FF"/><circle cx="122.7" cy="113.7" r="1.7" fill="#8AA4FF"/><circle cx="122.7" cy="136.1" r="1.7" fill="#8AA4FF"/><circle cx="122.7" cy="158.6" r="1.7" fill="#8AA4FF"/><circle cx="82.4" cy="1.7" r="1.7" fill="#8AA4FF"/><circle cx="82.4" cy="24.1" r="1.7" fill="#8AA4FF"/><circle cx="82.4" cy="46.5" r="1.7" fill="#8AA4FF"/><circle cx="82.4" cy="68.9" r="1.7" fill="#8AA4FF"/><circle cx="82.4" cy="91.3" r="1.7" fill="#8AA4FF"/><circle cx="82.4" cy="113.7" r="1.7" fill="#8AA4FF"/><circle cx="82.4" cy="136.1" r="1.7" fill="#8AA4FF"/><circle cx="82.4" cy="158.6" r="1.7" fill="#8AA4FF"/><circle cx="62.2" cy="1.7" r="1.7" fill="#8AA4FF"/><circle cx="62.2" cy="24.1" r="1.7" fill="#8AA4FF"/><circle cx="62.2" cy="46.5" r="1.7" fill="#8AA4FF"/><circle cx="62.2" cy="68.9" r="1.7" fill="#8AA4FF"/><circle cx="62.2" cy="91.3" r="1.7" fill="#8AA4FF"/><circle cx="62.2" cy="113.7" r="1.7" fill="#8AA4FF"/><circle cx="62.2" cy="136.1" r="1.7" fill="#8AA4FF"/><circle cx="62.2" cy="158.6" r="1.7" fill="#8AA4FF"/><circle cx="42" cy="1.7" r="1.7" fill="#8AA4FF"/><circle cx="42" cy="24.1" r="1.7" fill="#8AA4FF"/><circle cx="42" cy="46.5" r="1.7" fill="#8AA4FF"/><circle cx="42" cy="68.9" r="1.7" fill="#8AA4FF"/><circle cx="42" cy="91.3" r="1.7" fill="#8AA4FF"/><circle cx="42" cy="113.7" r="1.7" fill="#8AA4FF"/><circle cx="42" cy="136.1" r="1.7" fill="#8AA4FF"/><circle cx="42" cy="158.6" r="1.7" fill="#8AA4FF"/><circle cx="21.9" cy="1.7" r="1.7" fill="#8AA4FF"/><circle cx="21.9" cy="24.1" r="1.7" fill="#8AA4FF"/><circle cx="21.9" cy="46.5" r="1.7" fill="#8AA4FF"/><circle cx="21.9" cy="68.9" r="1.7" fill="#8AA4FF"/><circle cx="21.9" cy="91.3" r="1.7" fill="#8AA4FF"/><circle cx="21.9" cy="113.7" r="1.7" fill="#8AA4FF"/><circle cx="21.9" cy="136.1" r="1.7" fill="#8AA4FF"/><circle cx="21.9" cy="158.6" r="1.7" fill="#8AA4FF"/><circle cx="163.1" cy="1.7" r="1.7" fill="#8AA4FF"/><circle cx="163.1" cy="24.1" r="1.7" fill="#8AA4FF"/><circle cx="163.1" cy="46.5" r="1.7" fill="#8AA4FF"/><circle cx="163.1" cy="68.9" r="1.7" fill="#8AA4FF"/><circle cx="163.1" cy="91.3" r="1.7" fill="#8AA4FF"/><circle cx="163.1" cy="113.7" r="1.7" fill="#8AA4FF"/><circle cx="163.1" cy="136.1" r="1.7" fill="#8AA4FF"/><circle cx="163.1" cy="158.6" r="1.7" fill="#8AA4FF"/></svg>
  )
}