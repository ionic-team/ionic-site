import { Component, h } from '@stencil/core';

@Component({
  tag: 'icon-external',
  styleUrl: 'icon-external.scss',
  shadow: false
})
export class IconExternal {
  render() {
    return (
      <svg class="new-tab" viewBox="0 0 12 12" data-ssrc="59.1">
        <g transform="translate(0,1)" data-ssrc="59.0">
          <rect class="new-tab__box"
                x="0"
                y="2"
                width="9"
                height="9"
                rx="1.5"
                data-ssrc="59.0."></rect>
          <path class="new-tab__arrow"
                d="M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z" data-ssrc="59.1."></path>
        </g>
      </svg>
    );
  }
}
