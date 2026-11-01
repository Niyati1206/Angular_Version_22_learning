import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-like-button',
  styleUrl: './like-button.css',
  templateUrl: './like-button.html',
})
export class LikeButton {
@Output() liked = new EventEmitter();
message:string ="You liked this post!";
  likeButton(){
    this.liked.emit(this.message);
  }
}
