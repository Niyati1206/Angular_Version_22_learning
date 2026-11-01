import { Component, EventEmitter , Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-greeting-button',
  styleUrl: './greeting-button.css',
  templateUrl: './greeting-button.html',
})
export class GreetingButton {
  @Output() sayHello  = new EventEmitter<string>();
message: string = "Hello Parent";
  greet(){
    this.sayHello.emit(this.message) 
  }
}
