
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details', component: ProductDetailComponent},
  {path: 'search/:searchTerm', component:SearchComponent},
  {path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
