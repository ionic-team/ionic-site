import { Component, State } from '@stencil/core';

@Component({
  tag: 'ionic-slider',
  styleUrl: 'ionic-slider.scss',
  shadow: false
})
export class IonicSlider {

  
  slideCount = 1;
  timer = null;
  old = null;
  upcoming = null;
  slideDelay = 10000;

  @State() current = 0;
  @State() status = [];
  @State() ticker = 0;

  constructor() {
    this.getClasses.bind(this);
    this.goTo.bind(this);
    this.activate.bind(this);
    this.deactivate.bind(this);
    this.next.bind(this);

    for(let i = 0; i < this.slideCount; i++) {
      this.status.push({
        visible: i === 0,
        active: i === 0,
        new: false
      })
    }
  }

  componentDidLoad() {
    this.timer = setTimeout(this.next, this.slideDelay);
  }

  next = () => {
    this.goTo(this.current >= this.slideCount - 1 ? 0 : this.current + 1)
  }

  goTo = (slide: number) => {
    // slide doesn't exist
    if (!this.status[slide]) return;
    clearTimeout(this.timer);
    this.old = this.current;
    setTimeout(this.deactivate, 1000);
    this.upcoming = this.current = slide;
    this.status[slide].visible = true;
    this.status[slide].new = true;
    setTimeout(this.activate, 500);
    this.timer = setTimeout(this.next, this.slideDelay);
    this.ticker++;
    // return true;
  }

  deactivate = () => {
    this.status[this.old].active = false;
    this.status[this.old].visible = false;
    this.status[this.current].new = false;
    this.ticker++;
  }

  activate = () => {
    this.status[this.current].active = true;
    this.ticker++;
  }

  getClasses(item) {
    return [
      this.status[item].visible ? 'visible' : '',
      this.status[item].active ? 'active' : '',
      this.status[item].new ? 'new' : ''
    ].join(' ');
  }

  render() {
    return [
      <div class={this.getClasses(0)}>
        <slot name="slide-0"/>
      </div>,
      <div class={this.getClasses(1)}>
        <slot name="slide-1"/>
      </div>,
      <ul class="dots">
        <li class={this.current === 0 ? 'active' : ''}
            onClick={this.goTo.bind(this, 0)}></li>
        <li class={this.current === 1 ? 'active' : ''}
            onClick={this.goTo.bind(this, 1)}></li>
      </ul>
    ];
  }
}