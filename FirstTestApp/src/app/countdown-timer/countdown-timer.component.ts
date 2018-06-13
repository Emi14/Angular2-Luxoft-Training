import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  template: '<p>{{message}}</p>',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalld = 0;
  message = '';
  seconds = 11;

  constructor() {
  }

  ngOnInit() {
    this.start();
  }

  clearTimer() {
    clearInterval(this.intervalld);
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalld = window.setInterval(() => {
      if (this.seconds === 0) {
        this.message = 'Blast off!';
        this.seconds--;
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
        this.seconds--;
      }
    }, 1000);
  }
}
