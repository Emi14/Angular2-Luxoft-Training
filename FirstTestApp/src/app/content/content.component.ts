import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  name: string;
  flag: boolean;
  isBordered: boolean;
  cities: Array<string>;
  currentHero: any = {firstName:'',lastName:''};

  constructor() {
    this.name = 'Gogu';
    this.flag = true;
    this.isBordered = true;
    this.cities = ['Miami', 'Sao Paolo', 'New York'];
  }

  ngOnInit() {
  }

  hello() {
    this.flag = !this.flag;
    this.isBordered = !this.isBordered;
    // alert('Hello world, ' + this.name + '!');
    this.cities.push(this.name);
  }

  deleteEntry(index: number) {
    this.cities.splice(index,1);
  }

  callPhone(phone: HTMLInputElement) {
    console.log(phone);
  }
}
