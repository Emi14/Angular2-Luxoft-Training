import {Injectable} from '@angular/core';
import {CategoryComponent} from "../category/category.component";
import {ProductComponent} from "../product/product.component";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Array<CategoryComponent>;

  constructor() {
    this.categories = new Array<CategoryComponent>();
    this.categories.push(this.createCategory());
  }

  createCategory(id: number, name: string, numberOfMemberProducts: number): CategoryComponent{
    let category = new CategoryComponent();
    category.id=id;
    category.name=name;
    category.numberOfMemberProducts=numberOfMemberProducts;

    category.products = new Array<ProductComponent>();
    category.products.push(new ProductComponent(1,"Bread", "Whole grain bread", 1.34))
    category.products.push(new ProductComponent(2,"Honey", "Whole grain bread", 1.54))
    category.products.push(new ProductComponent(3,"Butter", "Whole grain bread", 2.34))
    category.products.push(new ProductComponent(3,"Milk", "Whole grain bread", 1.04))

    return category;
  }
}
