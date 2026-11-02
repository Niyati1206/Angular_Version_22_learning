import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  @Input() productName: string ="";
  @Input() price : number = 0;
  @Input() inStock: boolean = false;
}
