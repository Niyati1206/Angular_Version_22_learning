import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter-controls',
  styleUrl: './counter-controls.css',
  templateUrl: './counter-controls.html',
})
export class CounterControls {
  @Output() increaseOne = new EventEmitter();
  @Output() decreaseOne = new EventEmitter();

  increase(){
    this.increaseOne.emit(1);
  }

  decrease(){
    this.decreaseOne.emit(-1);
  }

}
