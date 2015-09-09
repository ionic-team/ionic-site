import {Transition} from './transition';
import {Animation} from '../animations/animation';
const DURATION = 600;
const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
const OPACITY = 'opacity';
const TRANSLATEX = 'translateX';
const OFF_RIGHT = '100%';
const OFF_LEFT = '-33%';
const CENTER = '0%';
const OFF_OPACITY = 0.8;
class IOSTransition extends Transition {
  constructor(nav, opts) {
    super(nav, opts);
    this.duration(DURATION);
    this.easing(EASING);
    this.enteringView.to(TRANSLATEX, CENTER).to(OPACITY, 1);
    this.enteringTitle.fadeIn().to(TRANSLATEX, CENTER);
    this.leavingView.from(TRANSLATEX, CENTER).from(OPACITY, 1);
    this.leavingTitle.from(TRANSLATEX, CENTER).from(OPACITY, 1);
    if (opts.direction === 'back') {
      this.enteringView.from(TRANSLATEX, OFF_LEFT).from(OPACITY, OFF_OPACITY).to(OPACITY, 1);
      this.enteringTitle.from(TRANSLATEX, OFF_LEFT);
      this.leavingView.to(TRANSLATEX, OFF_RIGHT).to(OPACITY, 1);
      this.leavingTitle.to(TRANSLATEX, OFF_RIGHT).to(OPACITY, 0);
      if (this.leaving.enableBack() && this.viewWidth() > 200) {
        let leavingBackButtonText = new Animation(this.leaving.backButtonTextElement());
        leavingBackButtonText.fromTo(TRANSLATEX, CENTER, (this.viewWidth() / 2) + 'px');
        this.leavingNavbar.add(leavingBackButtonText);
      }
    } else {
      this.enteringView.from(TRANSLATEX, OFF_RIGHT).from(OPACITY, 1);
      this.enteringTitle.from(TRANSLATEX, OFF_RIGHT);
      this.leavingView.to(TRANSLATEX, OFF_LEFT).to(OPACITY, OFF_OPACITY);
      this.leavingTitle.to(TRANSLATEX, OFF_LEFT).to(OPACITY, 0);
      if (this.entering.enableBack() && this.viewWidth() > 200) {
        let enteringBackButtonText = new Animation(this.entering.backButtonTextElement());
        enteringBackButtonText.fromTo(TRANSLATEX, (this.viewWidth() / 2) + 'px', CENTER);
        this.enteringNavbar.add(enteringBackButtonText);
      }
    }
  }
}
Transition.register('ios', IOSTransition);
