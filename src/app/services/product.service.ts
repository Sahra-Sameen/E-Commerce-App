import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {product} from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  productList():Observable<product[]>{  
    return this.http.get<product[]>('https://fakestoreapi.com/products');
  }

  getProduct(id: string): Observable<product> {
    return this.http.get<product>(`https://fakestoreapi.com/products/${id}`);
  }
  

  deleteProduct(id:string){
    return this.http.delete(`https://fakestoreapi.com/products/${id}`);
  }

  searchProduct(query:string){
    return this.http.get<product[]>(`https://fakestoreapi.com/products?q=${query}`);

  }
}
