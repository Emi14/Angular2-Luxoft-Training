import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CountdownTimerComponent} from "../countdown-timer/countdown-timer.component";

@Component({
  selector: 'app-countdown-parent-view-child',
  templateUrl: './countdown-parent-view-child.component.html',
  styleUrls: ['./countdown-parent-view-child.component.css']
})
export class CountdownParentViewChildComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  constructor() { }

  seconds(){ return 0;}

  ngAfterViewInit(): void {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start(){
    this.timerComponent.start();
  };
  stop(){
    this.timerComponent.stop();
  }

}
