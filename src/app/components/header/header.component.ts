import { Component } from '@angular/core';
import { product } from '../../data-type';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchText:any;
  
  constructor(private http:HttpClient){}
  searchProduct(query: string) {
    return this.http.get<product[]>(`https://fakestoreapi.com/products?q=${query}`);
  }
  
}
