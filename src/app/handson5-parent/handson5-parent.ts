import { Component, signal } from '@angular/core';
import { CounterDisplay } from './counter-display/counter-display';

@Component({
  imports: [CounterDisplay],
  selector: 'app-handson5-parent',
  styleUrl: './handson5-parent.css',
  templateUrl: './handson5-parent.html',
})
export class Handson5Parent {
  count = signal(0);
increaseCount(){
this.count.update(count=>count+1);
}
decreaseCount(){
this.count.update(count=>count-1);
}
}
