import {Component, OnInit} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products: Array<ProductComponent>;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.cartService.products;
  }

  removeProduct(index: number) {
    this.cartService.removeProduct(index);
  }

  getSum():number {
    return this.cartService.getSum();
  }
}
