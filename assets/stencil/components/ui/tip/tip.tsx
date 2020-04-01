import { Component, Element, Listen, State, Prop, h } from '@stencil/core';

const defaultBounds: ClientRect = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0,
};

@Component({
  tag: 'ui-tip',
  styleUrl: 'tip.scss'
})
export class UiTip {
  @Prop({ reflect: true }) text: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop() position: 'top' | 'right' | 'bottom' | 'left' = 'bottom';
  @State() isActive = false;
  @State() bounds: ClientRect;
  @Element() element: HTMLElement;

  @Listen('mouseenter')
  handleMouseEnter() {
    if (!this.disabled && this.element.firstElementChild) {
      this.bounds = this.getBounds(this.element.firstElementChild);
      this.isActive = true;
    }
  }

  @Listen('mousedown')
  @Listen('mouseleave')
  handleMouseLeave() {
    this.isActive = false;
  }

  getBounds(element: Element): ClientRect {
    return element.getBoundingClientRect();
  }

  hostData() {
    const { bounds = defaultBounds } = this;

    return {
      class: {
        'is-active': this.isActive,
        [this.position]: true,
      },
      style: {
        '--target-top': `${bounds.top}px`,
        '--target-right': `${bounds.right}px`,
        '--target-bottom': `${bounds.bottom}px`,
        '--target-left': `${bounds.left}px`,
        '--target-width': `${bounds.width}px`,
        '--target-height': `${bounds.height}px`,
      },
      'aria-label': this.text,
    };
  }

  render() {
    return <slot />;
  }
}
