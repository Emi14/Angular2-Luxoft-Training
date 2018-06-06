import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/compiler/src/core";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
