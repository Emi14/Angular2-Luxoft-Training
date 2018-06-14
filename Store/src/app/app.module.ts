import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderNavbarComponent} from './header-navbar/header-navbar.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ProfileComponent} from './profile/profile.component';
import {CategoryComponent} from './category/category.component';
import {ProductComponent} from './product/product.component';
import {ShopComponent} from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    HomeComponent,
    CheckoutComponent,
    ProfileComponent,
    CategoryComponent,
    ProductComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'checkout', component: CheckoutComponent},
      {
        path: 'shop', component: ShopComponent,
        children: [
          {path: ':categoryId', component: CategoryComponent}
        ]
      },
      {path: 'profile', component: ProfileComponent},
      {path: '', component: HomeComponent},
      {path: '**', redirectTo: ''}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
