import { Component, Prop, State, h } from '@stencil/core';
import moment from 'moment';

@Component({
  tag: 'home-countdown',
  styleUrl: 'home-countdown.scss',
  shadow: false
})
export class HomeCountdown {
  @Prop() eventStart: string = '1593007200';

  @State() days: number;
  @State() hours: number;
  @State() minutes: number;
  @State() seconds: number;


  componentWillLoad() {
    this.update();
    setInterval(this.update.bind(this), 1000);
  }

  update() {
    const eventTime = parseInt(this.eventStart, 10) * 1000;
    const currentTime = new Date().getTime();
    const diffTime = eventTime - currentTime;
    const duration = moment.duration(diffTime, 'milliseconds');

    this.days = moment.duration(duration).days();
    this.hours = moment.duration(duration).hours();
    this.minutes = moment.duration(duration).minutes();
    this.seconds = moment.duration(duration).seconds();
  }

  render() {
    return(
      <ul>
        <li>
          <strong>{this.days}</strong>
          <span>DAY{this.days == 1 ? '' : 'S'}</span>
        </li>
        <li>
          <strong>{this.hours}</strong>
          <span>HOUR{this.hours == 1 ? '' : 'S'}</span>
        </li>
        <li>
          <strong>{this.minutes}</strong>
          <span>MINUTE{this.minutes == 1 ? '' : 'S'}</span>
        </li>
        <li>
          <strong>{this.seconds}</strong>
          <span>SECOND{this.seconds == 1 ? '' : 'S'}</span>
        </li>
      </ul>
    );
  }
}
