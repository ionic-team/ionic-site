import { Component, State, Listen, Element, h } from '@stencil/core';
import { TweenLite } from "gsap/TweenLite";
import { publishIcon, updatesIcon, buildsIcon, automationsIcon } from './activator-icons'

const screens: any = [
  {
    name: 'App Publishing',
    description: 'Publish directly to the Apple and Google App Stores.',
    icon: publishIcon,
    image: '/img/appflow/screen-app-publishing.png'
  },
  {
    name: 'Live Updates',
    description: 'Deploy live app updates in real-time.',
    icon: updatesIcon,
    image: '/img/appflow/screen-live-updates.png'
  },
  {
    name: 'Native Builds',
    description: 'Compile native app binaries in the cloud.',
    icon: buildsIcon,
    image: '/img/appflow/screen-native-builds.png'
  },
  {
    name: 'Automations',
    description: 'Fully automate your app delivery pipeline.',
    icon: automationsIcon,
    image: '/img/appflow/screen-automations.png'
  },
]


@Component({
  tag: 'ionic-appflow-activator',
  styleUrl: 'ionic-appflow-activator.scss',
  shadow: false
})
export class IonicAppflowActivator {
  @Element() el: HTMLElement;

  @State() currentScreen: number = null;
  @State() isPaused: boolean = false;

  duration = 6;//seconds
  indicators = [];
  tween: any = null;

  componentDidLoad() {
    this.currentScreen = 0;
    setTimeout(this.start.bind(this), 2000);
  }

  start() {
    const indicator = this.indicators[this.currentScreen];

    TweenLite.set(indicator, {
      width: 0,
      alpha: 1
    });

    this.tween = TweenLite.to(indicator, this.duration, {
      width: '100%',
      onComplete: () => {
        this.increment();
      }
    });
  }

  override(index) {
    if (this.currentScreen === index) return;
    this.tween.pause();
    this.increment(index);
  }

  increment(index?) {
    TweenLite.to(this.indicators[this.currentScreen], 0.4, {
      alpha: 0
    });

    if (index !== undefined) {
      this.currentScreen = index;
      this.start();
      return;
    }

    this.currentScreen = (this.currentScreen >= screens.length - 1) ? 0 : this.currentScreen + 1;
    this.start();
  }

  @Listen('scroll', {target: 'window'})
  onScroll() {
    if (this.tween === null) return false;
    const rect = this.el.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight) && (rect.bottom >= 0);

    if (isVisible && this.isPaused) {
      this.tween.play();
      this.isPaused = false;
    }
    if (!isVisible && !this.isPaused) {
      this.tween.pause();
      this.isPaused = true;
    }
  }

  render() {
    return ([
      <div class="app-screenshot">
        {screens.map((screen, i) =>
          <div class={`screen ${i === this.currentScreen ? 'animate-in' : 'animate-out'}`}>
            <img src={screen.image}/>
          </div>
        )}
      </div>,
      <div class="nav">
        <div class="container">
          <ul>
            {screens.map((screen, i) =>
              <li
                class={(i === this.currentScreen) ? 'active' : 'default'}
                onMouseEnter={() => this.override(i)}>
                {screen.icon(i === this.currentScreen ? 'active' : 'default')}
                <h5>{screen.name}</h5>
                <p>{screen.description}</p>
                <div class="indicator" ref={(el) => this.indicators[i] = el}></div>
              </li>
            )}
          </ul>
        </div>
      </div>
    ]);
  }
}

