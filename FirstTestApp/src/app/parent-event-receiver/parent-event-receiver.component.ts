import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-event-receiver',
  templateUrl: './parent-event-receiver.component.html',
  styleUrls: ['./parent-event-receiver.component.css']
})
export class ParentEventReceiverComponent implements OnInit {
  voters: Array<string> = [];

  agree: number=0;
  disagree: number=0;
  newTest: string;

  constructor() {
    this.voters.push("Master1");
    this.voters.push("Master2");
    this.voters.push("Master3");
  }

  ngOnInit() {
  }

  selectedVote(vote: boolean) {
    vote ? this.agree++ : this.disagree++;
  }
}
