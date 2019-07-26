import { 
  Component, 
  // Prop, 
  State,
  Element,
  h
} from '@stencil/core';

import {
  TweenLite
} from "gsap/TweenLite";

@Component({
  tag: 'ionic-appflow-activator',
  styleUrl: 'ionic-appflow-activator.scss',
  shadow: false
})
export class IonicAppflowActivator {
  @State() $circles = [];
  @State() $lis = [];
  @State() screenshots = [];
  @State() active = null;
  @Element() el;

  duration = 6//seconds
  quickDuration = .25 //seconds
  r = 31; // radius
  circumference: number;
  gsRefs = [];
  scrollPause = null

  constructor()  {
    this.circumference = this.r * 2 * Math.PI;
    this.animationSelect = this.animationSelect.bind(this);
    this.animationStart = this.animationStart.bind(this);
  }

  componentDidLoad() {
    setTimeout(this.animationStart, 2000, 0);
    // setTimeout(this.animationStart, 3000, 2);
    // setTimeout(this.animationStart, 4000, 3);

    // recursive function to add all the circles
    const addCircle = (li, i) => {
      this.$lis[i] = li;
      this.$circles[i] = li.querySelector('.progress-ring__circle');
      this.screenshots[i] = li.querySelector('a').dataset.screenshot;
      if (li.nextElementSibling && li.nextElementSibling.nodeName === 'LI') {
        addCircle(li.nextElementSibling, i + 1);
      }
    }

    addCircle(this.el.querySelector('li:nth-child(1)'), 0);
    this.active = 0;
  }

  animationStart(index) {
    console.log('starting')
    if(window.pageYOffset > 1000) {
      console.log('pausing')
      this.scrollPause = setTimeout(this.animationStart, 5000, 0)
      return;
    }
    this.active = index;
    this.$lis[index].classList.add('active');
    TweenLite.to(this.$circles[index], .4, {
      opacity: 1
    });

    TweenLite.to(this.$circles[index], this.duration, {
      strokeDashoffset: String(0),
      onCompleteScope: this,
      onComplete: () =>  {
        // fade out and start the next animation
        this.animationStart(
          index >= this.$circles.length - 1 ? 0 : index + 1
        );
        this.$lis[index].classList.remove('active');
        TweenLite.to(this.$circles[index], .2, {
          opacity: 0,
          onCompleteScope: this,
          onComplete: () => {
            // jump back to starting position
            TweenLite.to(this.$circles[index], 0, {
              strokeDashoffset: String(this.circumference),
              lazy:true
            });
          }
        });
      }
    })
  }

  animationSelect(index) {
    this.$lis[index].classList.add('active');
    this.active = index;

    if (this.scrollPause) {
      clearTimeout(this.scrollPause);
    }

    this.animationStopOthers(index)
    TweenLite.to(this.$circles[index], this.quickDuration, {
      strokeDashoffset: String(0),
      opacity: 1,
      onCompleteScope: this,
      onComplete: () => {
        this.animationStopOthers(index);
        // this.animationStart(index);
      }}
    )
  }

  animationRestart(index) {

    this.animationStopOthers(index);
    TweenLite.to(this.$circles[index], .5, {
      strokeDashoffset: String(this.circumference * -1),
      lazy: true,
      onCompleteScope: this,
      onComplete: () => {
        TweenLite.to(this.$circles[index], 0, {
          strokeDashoffset: String(this.circumference),
          opacity: 0,
          lazy: true,
          onCompleteScope: this,
          onComplete: () => {
            this.animationStart(index);
          }
        })
      }
    })
  }

  animationStopOthers(index) {
    const circles = [];
    this.$circles.forEach((circle, i) => {
      if (i != index ) {
        circles.push(circle);
        this.$lis[i].classList.remove('active');
      }
    });
    TweenLite.to(circles, .2, {
      opacity: 0,
      lazy: true,
      onCompleteScope: this,
      onComplete: () => {
        TweenLite.to(circles, 0, {
          strokeDashoffset: String(this.circumference),
          opacity: 0,
          lazy: true
        });
      }
    })
  }

  circle(percent = 0) {
    return (
      <svg class="progress-ring" height="64" width="64" >
        <circle class="progress-ring__circle"
                stroke="#6C89F7"
                stroke-width="2"
                fill="transparent"
                r={this.r}
                cx="32"
                cy="32"
                style={{
                  strokeDasharray: 
                    `${this.circumference} ${this.circumference}`,
                  strokeDashoffset: 
                    String(this.circumference - percent / 100 * this.circumference)
                }}/>
      </svg>
    )
  }

  render() {
    return ([
      <div class="app-screenshot">
        {this.screenshots.map((screenshot, i) => 
          <img class={i === this.active ? 'active' : 'inactive'} 
               src={screenshot}/>
        )}
      </div>,
      <nav>
        <ul>
          <li onMouseEnter={() => this.animationSelect(0)}
              onMouseLeave={() => this.animationRestart(0)}>
            {this.circle()}
            <slot name="1"></slot>
          </li>
          <li onMouseEnter={() => this.animationSelect(1)}
              onMouseLeave={() => this.animationRestart(1)}>
            {this.circle()}
            <slot name="2"></slot>
          </li>
          <li onMouseEnter={() => this.animationSelect(2)}
              onMouseLeave={() => this.animationRestart(2)}>
            {this.circle()}
            <slot name="3"></slot>
          </li>
        </ul>
      </nav>
    ]);
  }
}
