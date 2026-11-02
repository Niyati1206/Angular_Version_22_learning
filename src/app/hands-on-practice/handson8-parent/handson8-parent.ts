import { Component } from '@angular/core';
import { CounterControls } from './counter-controls/counter-controls';

@Component({
  imports: [CounterControls],
  selector: 'app-handson8-parent',
  styleUrl: './handson8-parent.css',
  templateUrl: './handson8-parent.html',
})
export class Handson8Parent {
  count : number =0;
  calculate(val: number){
    this.count += val;
  }

}
