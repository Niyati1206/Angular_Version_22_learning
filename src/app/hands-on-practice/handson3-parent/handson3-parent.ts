import { Component } from '@angular/core';
import { ProductCard } from './product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-handson3-parent',
  styleUrl: './handson3-parent.css',
  templateUrl: './handson3-parent.html',
})  
export class Handson3Parent {
  productName: string = "Laptop";
  price : number =55000;
  inStock : boolean =false;
}
