import { Component, Input , EventEmitter , Output} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-add-to-cart-component',
  styleUrl: './add-to-cart-component.css',
  templateUrl: './add-to-cart-component.html',
})
export class AddToCartComponent {
  @Input() productName : string = "";
  @Output() productToCart = new EventEmitter();

  sendToParent(name1:string){
    this.productToCart.emit(name1);
  }
}
