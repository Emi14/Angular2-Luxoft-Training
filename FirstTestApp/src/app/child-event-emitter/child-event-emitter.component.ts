import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-event-emitter',
  templateUrl: './child-event-emitter.component.html',
  styleUrls: ['./child-event-emitter.component.css']
})
export class ChildEventEmitterComponent implements OnInit {

  @Output() onVoted = new EventEmitter<boolean>();
  @Input() voter: string;
  voted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean){
    this.onVoted.emit(agreed);
    this.voted = true;
  }

}
