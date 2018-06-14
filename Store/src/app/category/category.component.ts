import {Component, OnInit} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {CartService} from "../service/cart.service";
import {CategoryService} from "../service/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  id: number;
  name: string;
  numberOfMemberProducts: number;
  products: Array<ProductComponent>;

  constructor(private cartService: CartService, private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  addProductToCart(product: ProductComponent) {
    this.cartService.addProduct(product);
  }
}
