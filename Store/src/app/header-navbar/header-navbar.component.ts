import {Component, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  numberOfProducts: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.numberOfProducts = this.cartService.products.length;
  }

}
