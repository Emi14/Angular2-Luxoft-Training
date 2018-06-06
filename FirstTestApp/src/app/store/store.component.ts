import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  products: Array<Product>;

  constructor() {
    this.products = [];
  }

  ngOnInit() {
  }

  addProduct(name: string, manufacturer: string, price: number) {
    let product = new Product(name, manufacturer, price);
    this.products.push(product);
  }
}
