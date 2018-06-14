import {Component, OnInit} from '@angular/core';
import {CategoryComponent} from "../category/category.component";
import {CategoryService} from "../service/category.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories: Array<CategoryComponent>;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.categories;
  }

}
