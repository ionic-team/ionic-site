import { Component, Host, h, State, Listen } from '@stencil/core';


@Component({
  tag: 'auth-connect-promo',
  styleUrl: 'auth-connect-promo.scss',
  scoped: true
})
export class AuthConnectPromo {
  private backdropEl: HTMLElement;
  private overlayEl: HTMLElement;

  private container: {
    width: number,
    height: number
  }
  private overlay = {
    origin: {
      width: 396,
      height: 240
    },
    width: 396,
    height: 240,
  }
  private aspectRatio = {
    x: 16,
    y: 9,
  }
  private gutter = 15;
  private previousCoordinates: { left: number, top: number }
  private scaleRatio: { x: number, y: number };
  private fullSize: { width: number, height: number };
  private smallScreen: boolean;


  @State() coordinates: { left: number, top: number };
  @State() expanded = false;

  componentWillLoad() {
    this.sequence();
  }

  sequence() {
    this.getContainer();
    this.checkScreenSize();
    this.getFullSizeDimensions();
    this.getCoordinates();
    this.getScale();
  }

  getContainer = () => {
    const container = document.body.querySelector('.top.container') as HTMLElement;
    this.container = {
      width: container.offsetWidth,
      height: container.offsetHeight
    }
  }

  checkScreenSize() {
    this.smallScreen = window.innerWidth < 992;

    if (this.container.width < this.overlay.origin.width) {
      this.overlay.width = this.container.width;
    } else {
      this.overlay.width = this.overlay.origin.width;
    }
  }

  getCoordinates = () => { 
    const { expanded, smallScreen, fullSize } = this;

    if (expanded) {
      this.coordinates = {
        left: (window.innerWidth - fullSize.width) / 2 + window.scrollX,
        top: (window.innerHeight - fullSize.height) / 2 + window.scrollY,
      }
      return;
    }

   
    if (smallScreen) {
      const { left, top, width, height } = document.querySelector('#dummy-element').getBoundingClientRect();
      const leftVal = left + this.overlay.width / 2 - (this.fullSize.width / 2)
      const topVal = top + (height / 2) - (this.fullSize.height / 2)

      this.coordinates = {
        left: leftVal + window.scrollX - this.gutter,
        top: topVal + window.scrollY,
      }
      this.previousCoordinates = this.coordinates;
      return;
    }


    const { left, top, width, height } = document.querySelector('.spinner').getBoundingClientRect();
    const leftVal = left + (width / 2) - (this.fullSize.width / 2)
    const topVal = top + (height / 2) - (this.fullSize.height / 2)

    this.coordinates = {
      left: leftVal + window.scrollX,
      top: topVal + window.scrollY,
    }
    this.previousCoordinates = this.coordinates;
  }

  getScale = () => {
    const { fullSize, overlay } = this;
    this.scaleRatio = {
      x: overlay.width / fullSize.width,
      y: overlay.height / fullSize.height
    }
  }

  handlePlay = () => {   
    setTimeout(() => {
      this.overlayEl.classList.add("played");
    }, 1200)     
    document.body.classList.add("no-scroll");
    this.backdropEl.classList.add("modal-backdrop");
    this.backdropEl.classList.add("in");
   
    this.expanded = true;

    this.coordinates = {
      left: (window.innerWidth - this.fullSize.width) / 2 + window.scrollX,
      top: (window.innerHeight - this.fullSize.height) / 2 + window.scrollY,
    }    
  }

  getFullSizeDimensions = () => {
    const { aspectRatio, gutter } = this;
    const ratio = aspectRatio.x / aspectRatio.y;
    const ratioInverse = aspectRatio.y / aspectRatio.x;

    if (window.innerWidth * aspectRatio.y  >= window.innerHeight * aspectRatio.x) {
      const height = window.innerHeight * ratio >= this.container.width ? this.container.width * ratioInverse : window.innerHeight;
      this.fullSize = {
        width: (height - gutter * 2) * ratio,
        height: height - (gutter * 2)
      }
    } else {
      // let widthRounded = Math.round(this.container.width);
      // let heightRounded = Math.round(this.container.height);

      // let deviance = widthRounded / heightRounded - ratio;
      
      // if (deviance > .1 || deviance < -.1) {
      //   console.log("got here", deviance);
      // }

      // while(deviance > .2 || deviance < -.2) {
      //   widthRounded - 1;
      //   deviance = widthRounded / heightRounded - ratio;
      // }
      this.fullSize = {        
        width: this.container.width,
        height: this.container.width * ratioInverse,
      }

      
    }
  }

  handleExit = () => {
    this.overlayEl.classList.remove("played");
    document.body.classList.remove('no-scroll');
    this.backdropEl.classList.remove("modal-backdrop");
    this.backdropEl.classList.remove("in");
    this.expanded = false;
    this.coordinates = this.previousCoordinates;
    this.getCoordinates();
  }

  @Listen('resize', { target: 'window'})
  updateItemOffsets() {
    requestAnimationFrame(() => {
      this.sequence();
    })
  }

  render() {
    const { coordinates, fullSize, scaleRatio, expanded } = this;
    return (
      <Host
      style={{
        '--left': coordinates.left.toString().concat('px'),
        '--top': coordinates.top.toString().concat('px'),
        '--width': fullSize.width.toString().concat('px'),
        '--height': fullSize.height.toString().concat('px'),
        '--scale-x': scaleRatio.x.toString(),
        '--scale-y': scaleRatio.y.toString()
      }}
      class={{ "expanded": expanded }}>
        <div id="backdrop" ref={e => {this.backdropEl = e}} class="fade" onClick={() => this.handleExit()}></div>
        <div
          class="wrapper"          
        >
          <div class="overlay" ref={e => this.overlayEl = e}>
            <div class="video">
              <div class="standin"></div>
              <slot />
            </div>
            <svg
              class="blur"
              viewBox="0 0 396 240"
              width={fullSize.width} height={fullSize.height}
              fill="white" xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
            <div class="transparent-circles">
              <svg class="big-circle" width="288" height="288" viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.06" cx="144" cy="144" r="144" fill="#00CEAB" />
              </svg>
              <svg class="small-circle" width="288" height="288" viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.12" cx="144" cy="144" r="96" fill="#00CEAB" />
              </svg>
            </div>
            <div
              class="play-circle"
              role="button"
              aria-label="play video"
              onClick={!expanded ? this.handlePlay : () => {}}>
              <svg class="outer-circle" width="120" height="120" viewBox="-60 -60 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="60" fill="white" />
              </svg>
              <svg class="play" width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.14453 47.7187C4.35307 47.7173 3.57563 47.5098 2.88867 47.1168C1.3418 46.2402 0.380157 44.5386 0.380157 42.6914V5.30858C0.380157 3.4562 1.3418 1.75979 2.88867 0.883226C3.59199 0.479022 4.39097 0.27116 5.2021 0.281364C6.01323 0.291569 6.80672 0.519465 7.49965 0.941234L39.4491 20.0658C40.1149 20.4833 40.6638 21.0631 41.0443 21.7507C41.4248 22.4384 41.6244 23.2115 41.6244 23.9974C41.6244 24.7833 41.4248 25.5564 41.0443 26.2441C40.6638 26.9318 40.1149 27.5115 39.4491 27.9291L7.49449 47.0587C6.78537 47.4874 5.97316 47.7156 5.14453 47.7187Z" fill="#00CEAB" />
              </svg>
            </div>
            <p class={{ subtitle: true, toggle: expanded}}
            
            style={{
              'top': ((this.fullSize.height - this.overlay.height) / 2 + this.overlay.height + 12).toString().concat('px'),
            }}>See how Auth Connect works</p>
          </div>
          
        </div>
        
      </Host>
    )
  }
}
