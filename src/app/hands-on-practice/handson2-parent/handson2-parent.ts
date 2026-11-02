import { Component } from '@angular/core';
import { AddToCartComponent } from './add-to-cart-component/add-to-cart-component';

@Component({
  imports: [AddToCartComponent],
  selector: 'app-handson2-parent',
  styleUrl: './handson2-parent.css',
  templateUrl: './handson2-parent.html',
})
export class Handson2Parent {
  productName: string = "Headphones";
  cart : string[] =['car','brush'];

  productToCart(productName: string){
   this.cart.push(productName);
  }
}
