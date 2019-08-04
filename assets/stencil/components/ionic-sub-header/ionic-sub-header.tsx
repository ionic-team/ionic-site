import { Component, Element, Prop, State, h } from '@stencil/core';
import { ChevronDown } from '../../icons';

@Component({
  tag: 'ionic-sub-header',
  styleUrl: 'ionic-sub-header.scss',
  shadow: false
})
export class IonicSubHeader {

  @Prop() darkMode = true;

  @State() mobileDropdownActive = false;
  @State() stuck = false;
  @State() queued = false;
  @Element() el;

  observer: IntersectionObserver;

  constructor() {
    this.handleMobileToggleClick = this.handleMobileToggleClick.bind(this);
  }

  getTriggerEl() {
    // return (<div class="ionic-sub-header__trigger"></div>)
    const trigger = document.createElement('div');
    trigger.id = 'ionic-sub-header__trigger';
    return trigger;
  }

  componentDidLoad() {
    this.el.before(this.getTriggerEl());
    this.init();
    requestAnimationFrame(()=>{
      this.el.classList.add('ionic-sub-header--initialized');
    })
  }

  init() {
    this.observer = new IntersectionObserver(entries => {
      if (this.queued) return;
  
      // no intersection with screen
    	if(!this.stuck && entries[0].intersectionRatio === 0) {
        this.queued = true;
        requestAnimationFrame(() => {
          this.el.classList.add('ionic-sub-header--stuck');
          this.stuck = true;
          this.queued = false;
        });
  
    	// fully intersects with screen
      } else if(this.stuck && entries[0].intersectionRatio === 1) {
        this.queued = true;
        requestAnimationFrame(() => {
          this.el.classList.remove('ionic-sub-header--stuck');
          this.stuck = false;
          this.queued = false;
        })
      }
    }, { threshold: [0,1] })

    if (this.el) {
      this.observer.observe(document.getElementById('ionic-sub-header__trigger'));
      setTimeout(() => {
        this.el.classList.add('ionic-sub-header--initialized');
        document.querySelector('.navbar-default').classList.add('navbar--not-fixed');
      }, 405)
    }
  }

  handleMobileToggleClick() {
    this.el.classList.toggle('ionic-sub-header--mobile-active');
  }

  render() {
    return (
      <div class="container">
        <slot name="title"/>
        <slot name="breadcrumbs"/>
        <slot name="left"/>
        <a class="ionic-sub-header__mobile-toggle"
           onClick={this.handleMobileToggleClick}>
          <ChevronDown/>
        </a>
        <slot name="right"/>
      </div>
    );
  }
}
