import {Animation} from '../animations/animation';
const SHOW_NAVBAR_CSS = 'show-navbar';
const SHOW_VIEW_CSS = 'show-view';
const SHOW_BACK_BUTTON = 'show-back-button';
let TransitionRegistry = {};
export class Transition extends Animation {
  constructor(nav, opts) {
    super();
    let enteringItem = this.entering = nav.getStagedEnteringItem();
    let leavingItem = this.leaving = nav.getStagedLeavingItem();
    this.enteringView = new Animation(enteringItem.viewElement());
    this.enteringView.before.addClass(SHOW_VIEW_CSS);
    this.enteringView.onPlay(() => {
      enteringItem.postRender();
    });
    this.add(this.enteringView);
    if (opts.navbar !== false) {
      let enteringNavbar = this.enteringNavbar = new Animation(enteringItem.navbarElement());
      enteringNavbar.before.addClass(SHOW_NAVBAR_CSS);
      if (enteringItem.enableBack()) {
        let enteringBackButton = this.enteringBackButton = new Animation(enteringItem.backButtonElement());
        enteringBackButton.before.addClass(SHOW_BACK_BUTTON).fadeIn();
        enteringNavbar.add(enteringBackButton);
      }
      this.enteringTitle = new Animation(enteringItem.titleElement());
      enteringNavbar.add(this.enteringTitle);
      this.add(enteringNavbar);
      this.enteringNavbarItems = new Animation(enteringItem.navbarItemElements());
      this.enteringNavbarItems.fadeIn();
      enteringNavbar.add(this.enteringNavbarItems);
    }
    if (leavingItem) {
      this.leavingView = new Animation(leavingItem.viewElement());
      this.leavingView.after.removeClass(SHOW_VIEW_CSS);
      let leavingNavbar = this.leavingNavbar = new Animation(leavingItem.navbarElement());
      leavingNavbar.after.removeClass(SHOW_NAVBAR_CSS);
      let leavingBackButton = this.leavingBackButton = new Animation(leavingItem.backButtonElement());
      leavingBackButton.after.removeClass(SHOW_BACK_BUTTON).fadeOut();
      leavingNavbar.add(leavingBackButton);
      this.leavingTitle = new Animation(leavingItem.titleElement());
      leavingNavbar.add(this.leavingTitle);
      this.leavingNavbarItems = new Animation(leavingItem.navbarItemElements());
      this.leavingNavbarItems.fadeOut();
      leavingNavbar.add(this.leavingNavbarItems);
      this.add(this.leavingView, leavingNavbar);
    }
  }
  viewWidth() {
    return this._w || (this._w = this.leaving && this.leaving.viewElement().offsetWidth);
  }
  static create(nav, opts = {}) {
    const name = opts.animation || 'ios';
    let TransitionClass = TransitionRegistry[name];
    if (!TransitionClass) {
      TransitionClass = Transition;
    }
    return new TransitionClass(nav, opts);
  }
  static register(name, TransitionClass) {
    TransitionRegistry[name] = TransitionClass;
  }
}
