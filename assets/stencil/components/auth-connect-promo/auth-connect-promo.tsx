import { Component, Prop, Host, h, State, Listen } from '@stencil/core';


@Component({
  tag: 'auth-connect-promo',
  styleUrl: 'auth-connect-promo.scss',
  scoped: true
})
export class AuthConnectPromo {
  private windowWidth: number;
  private windowHeight: number;
  private overlayWidth = 396;
  private overlayHeight = 240;
  private aspectRatioX = 16
  private aspectRatioY = 9;
  private targetDimensions: { width: number, height: number } = { width: undefined, height: undefined};
  @State() scaleRatios: { x: number, y: number } = { x: undefined, y: undefined};
  @State() expand = false;
  @State() coordinates: {left: number, top: number } = { left: undefined, top: undefined};

  componentWillLoad() {

    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    
    this.getTargetDimensions();
    this.getOrigin();
    this.getScale();
    
  }

  getOrigin (){
    const { top, left, height, width } = document.querySelector('.spinner').getBoundingClientRect();
    this.coordinates = {
      left: left + (width / 2) - (this.targetDimensions.width / 2),
      top: top + (height / 2) - (this.targetDimensions.height / 2)
    }
  }

  getScale = () => {
    const { scaleRatios, targetDimensions, overlayWidth, overlayHeight } = this;
    scaleRatios.x = overlayWidth / targetDimensions.width;
    scaleRatios.y = overlayHeight / targetDimensions.height;
    console.log(this.scaleRatios);
  }

  handlePlay = () => {
    this.expand = true;
    this.scaleRatios = {
      x: 1,
      y: 1
    }
    this.coordinates = {
      left: 0,
      top: 0
    }
  }

  getTargetDimensions = () => {
    const { windowWidth, windowHeight, aspectRatioX, aspectRatioY, targetDimensions } = this;
    if (windowWidth * aspectRatioX > windowHeight * aspectRatioY) {
      targetDimensions.width = .9 * windowWidth;
      targetDimensions.height = targetDimensions.width / (aspectRatioX / aspectRatioY );
    }
  }

  render() {
    const { windowWidth, windowHeight, expand } = this;
    return (
      <Host
        style={{
          '--left': this.coordinates.left.toString() + 'px',
          '--top': this.coordinates.top.toString() + 'px',
          '--scale-x': this.scaleRatios.x.toString(),
          '--scale-y': this.scaleRatios.y.toString()
        }}
      >
        <div class="overlay">
          <svg
            class={{
              'background': true,
              'expand': expand
            }}
            width={windowWidth} height={windowHeight}
            viewBox="0 0 396 240"
            fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="396" height="240" rx="16" fill="white" fill-opacity="0.4" />
          </svg>
          <svg class="circles" width="288" height="288" viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.06" cx="144" cy="144" r="144" fill="#00CEAB" />
            <circle opacity="0.12" cx="144" cy="144" r="96" fill="#00CEAB" />
          </svg>
          <div class="play-circle" role="button" aria-label="play video" onClick={this.handlePlay}>
            <svg class="outer-circle" width="120" height="120" viewBox="-60 -60 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle r="60" fill="white" />
            </svg>
            <svg class="play" width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.14453 47.7187C4.35307 47.7173 3.57563 47.5098 2.88867 47.1168C1.3418 46.2402 0.380157 44.5386 0.380157 42.6914V5.30858C0.380157 3.4562 1.3418 1.75979 2.88867 0.883226C3.59199 0.479022 4.39097 0.27116 5.2021 0.281364C6.01323 0.291569 6.80672 0.519465 7.49965 0.941234L39.4491 20.0658C40.1149 20.4833 40.6638 21.0631 41.0443 21.7507C41.4248 22.4384 41.6244 23.2115 41.6244 23.9974C41.6244 24.7833 41.4248 25.5564 41.0443 26.2441C40.6638 26.9318 40.1149 27.5115 39.4491 27.9291L7.49449 47.0587C6.78537 47.4874 5.97316 47.7156 5.14453 47.7187Z" fill="#00CEAB" />
            </svg>
          </div>
        </div>
      </Host>
    )
  }
}
