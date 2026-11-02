import { Component } from '@angular/core';
import { LikeButton } from './like-button/like-button';

@Component({
  imports: [LikeButton],
  selector: 'app-handson7-parent',
  styleUrl: './handson7-parent.css',
  templateUrl: './handson7-parent.html',
})
export class Handson7Parent {
  showMessage : string ="";
  recieveLike(value : string ){
    this.showMessage = value;
  }
}
