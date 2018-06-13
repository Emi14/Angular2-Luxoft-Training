import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  id : string;
  products: Array<Product>;

  constructor(private route: ActivatedRoute) {
    this.products = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  addProduct(name: string, manufacturer: string, price: number) {
    let product = new Product(name, manufacturer, price);
    this.products.push(product);
  }
}
