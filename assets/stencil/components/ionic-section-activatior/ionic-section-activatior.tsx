import { 
  Component, 
  // Prop, 
  State,
  Element
} from '@stencil/core';

import {
  TweenLite
} from "gsap/TweenLite";

@Component({
  tag: 'ionic-section-activator',
  styleUrl: 'ionic-section-activator.scss',
  shadow: false
})
export class IonicSectionActivator {
  @State() $currentItem: HTMLElement;
  @Element() el;

  duration = 10
  r = 58;
  scrollRef: null;

  animationStart(index) {
    this.$currentItem = this.el.querySelector(`li:nth-child(${index}) circle`);

    this.scrollRef = TweenLite.to(this.$currentItem , this.duration, {
      strokeDashoffset: 0,
      onCompleteScope: this,
      onComplete: function() {
        console.log('gets here')
        // jump back to starting position and restart the scroll in 1 frame
        // TweenLite.to(this.$countries, 0, {
        //   x: 0,
        //   lazy:true,
        //   onCompleteScope: this,
        //   onComplete: function() {
        //     this.scroll();
        //   }
        // })
      }
    })
  }

  componentDidLoad() {
    setTimeout(this.animationStart.bind(this), 2000, 1);
    setTimeout(this.animationStart.bind(this), 3000, 2);
    setTimeout(this.animationStart.bind(this), 4000, 3);
  }

  circle(percent = 0) {
    const circumference = this.r * 2 * Math.PI;
    return (
      <svg
        class="progress-ring"
        height="120"
        width="120">
        <circle
          class="progress-ring__circle"
          stroke="white"
          stroke-width="4"
          fill="transparent"
          r={this.r}
          cx="60"
          cy="60"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: circumference - percent / 100 * circumference

          }}
        />
      </svg>
    )
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            {this.circle(0)}
            <slot name="1"></slot>
          </li>
          <li>
            {this.circle(0)}
            <slot name="2"></slot>
          </li>
          <li>
            {this.circle()}
            <slot name="3"></slot>
          </li>
        </ul>
      </nav>
    );
  }
}
