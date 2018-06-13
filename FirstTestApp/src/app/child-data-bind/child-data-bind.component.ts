import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-data-bind',
  templateUrl: './child-data-bind.component.html',
  styleUrls: ['./child-data-bind.component.css']
})
export class ChildDataBindComponent implements OnInit {

  private testValue: string = '';
  @Output() private testChange = new EventEmitter();

  constructor() { }

  @Input()
  get test(){
    return this.testValue;
  }

  set test(val){
    this.testValue = val;
    this.testChange.emit(this.testValue);
  }

  ngOnInit() {
  }

}
