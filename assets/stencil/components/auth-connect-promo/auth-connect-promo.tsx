import { Component, Host, h, State } from '@stencil/core';


@Component({
  tag: 'auth-connect-promo',
  styleUrl: 'auth-connect-promo.scss',
  scoped: true
})
export class AuthConnectPromo {
  private videoEl: HTMLIFrameElement;
  private container: {
    width: number,
    height: number
  }
  private overlay = {
    width: 396,
    height: 240,
  }
  private aspectRatio = {
    x: 16,
    y: 9,
  }
  private previousCoordinates: { left: number, top: number }

  @State() fullSize: { width: number, height: number };
  @State() scaleRatio: { x: number, y: number };
  @State() coordinates: { left: number, top: number };
  @State() expanded = false;

  componentWillLoad() {
    this.container = {
      width: document.body.offsetWidth,
      height: document.body.offsetHeight
    }

    this.getFullSizeDimensions();
    this.getCoordinates();
    this.getScale();   
  }

  getCoordinates = () => {
    const { left, top, width, height } = document.querySelector('.spinner').getBoundingClientRect();
    const leftVal = left + (width / 2) - (this.fullSize.width / 2)
    const topVal = top + (height / 2) - (this.fullSize.height / 2)
    this.coordinates = {
      left: leftVal,
      top: topVal,
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
    document.body.classList.add("no-scroll");  
    this.expanded = true;
    this.coordinates = {
      left: (this.coordinates.left + this.fullSize.width - window.innerWidth) / 2,
      top: 0,
    }

    setTimeout(() => {
      const src = this.videoEl.src;
      this.videoEl.src = src.substring(0, src.length - 1).concat('1');
    }, 5000)
    
  }
  renderVideo = () => {

      
  }

  getFullSizeDimensions = () => {
    const { aspectRatio } = this;
    if (window.innerWidth  > window.innerHeight) {
      console.log("got here");
      this.fullSize = {
        width: .9 * window.innerWidth,
        height: .9 * window.innerWidth * (aspectRatio.y / aspectRatio.x)
      }
    } else {
      this.fullSize = {
        width: this.container.width,
        height: this.container.width * (aspectRatio.y / aspectRatio.x),
      }
    }
  }

  handleExit = () => {
    document.body.classList.remove('no-scroll');
    this.expanded = false;
    const src = this.videoEl.src;
    this.videoEl.src = src.substring(0, src.length - 1).concat('0');
    this.coordinates = this.previousCoordinates;
  }

  render() {
    const { coordinates, fullSize, scaleRatio, expanded } = this;
    return (
      <Host class={{ "expanded": expanded }}>
        <div class="background-overlay" onClick={() => this.handleExit()}></div>
        <div
          class="wrapper"
          style={{
            '--left': coordinates.left.toString().concat('px'),
            '--top': coordinates.top.toString() + 'px',
            '--width': fullSize.height.toString(),
            '--height': fullSize.width.toString(),
            '--scale-x': scaleRatio.x.toString(),
            '--scale-y': scaleRatio.y.toString()
          }}
        >
          <div class="overlay">
            <div class="video">
              <div class="standin"></div>
              <iframe ref={e => this.videoEl = e} src="https://www.youtube.com/embed/rq9MEt_gOf0?autoplay=1&amp;mute=0" frameborder="0" allowFullScreen></iframe>
            </div>
            <svg
              class="blur"
              viewBox="0 0 396 240"
              width={fullSize.width} height={fullSize.height}
              fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100%" height="100%" rx="16" fill="white" fill-opacity="0.4" />
            </svg>
            <svg class="circles" width="288" height="288" viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.06" cx="144" cy="144" r="144" fill="#00CEAB" />
              <circle opacity="0.12" cx="144" cy="144" r="96" fill="#00CEAB" />
            </svg>
            <div class="play-circle" role="button" aria-label="play video" onClick={!expanded ? this.handlePlay : () => {}}>
              <svg class="outer-circle" width="120" height="120" viewBox="-60 -60 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="60" fill="white" />
              </svg>
              <svg class="play" width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.14453 47.7187C4.35307 47.7173 3.57563 47.5098 2.88867 47.1168C1.3418 46.2402 0.380157 44.5386 0.380157 42.6914V5.30858C0.380157 3.4562 1.3418 1.75979 2.88867 0.883226C3.59199 0.479022 4.39097 0.27116 5.2021 0.281364C6.01323 0.291569 6.80672 0.519465 7.49965 0.941234L39.4491 20.0658C40.1149 20.4833 40.6638 21.0631 41.0443 21.7507C41.4248 22.4384 41.6244 23.2115 41.6244 23.9974C41.6244 24.7833 41.4248 25.5564 41.0443 26.2441C40.6638 26.9318 40.1149 27.5115 39.4491 27.9291L7.49449 47.0587C6.78537 47.4874 5.97316 47.7156 5.14453 47.7187Z" fill="#00CEAB" />
              </svg>
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
