import {Injectable} from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Array<ProductComponent>;

  constructor() {
    this.products = new Array<ProductComponent>();
    this.products.push(new ProductComponent(1,"Bread", "Whole grain bread", 1.34))
    this.products.push(new ProductComponent(2,"Honey", "Whole grain bread", 1.54))
    this.products.push(new ProductComponent(3,"Butter", "Whole grain bread", 2.34))
    this.products.push(new ProductComponent(3,"Milk", "Whole grain bread", 1.04))
  }

  removeProduct(index: number) {
    this.products.splice(index,1);
  }

  getSum(): number {
    return this.products.reduce((a,b)=> a+b.price,0)
  }

  addProduct(product: ProductComponent){
    this.products.push(product);
  }
}
