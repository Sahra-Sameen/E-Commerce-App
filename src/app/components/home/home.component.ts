import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { product } from './../../data-type';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: product[] | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        const searchTerm = params['searchTerm'] ? params['searchTerm'].toLowerCase() : '';
        return this.productService.productList().pipe(
          map(products => {
            if (searchTerm) {
              return products.filter(product => product.title.toLowerCase().includes(searchTerm));
            }
            return products;
          })
        );
      })
    ).subscribe(filteredProducts => {
      this.productList = filteredProducts;
    });
  }

  addtocart(item: product): void {
    this.cartService.addtoCart(item);
  }
}
