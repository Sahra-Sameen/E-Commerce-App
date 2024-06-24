import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../../data-type';
import { error } from 'node:console';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  // productData: product | undefined;

  // constructor(private activeRoute: ActivatedRoute, private product: ProductService) { }
  // ngOnInit(): void {

  //   let productId = this.activeRoute.snapshot.paramMap.get('productId');
  //   console.warn(productId);
  //   if (productId) {
  //     this.product.getProduct(productId).subscribe((result: product) => {
  //       console.warn(result);
  //       this.productData = result;

  //     },
  //       (error) => {
  //         console.error("Error fetching Product:", error);
  //       }
  //     )
  //   }

  // }


}
