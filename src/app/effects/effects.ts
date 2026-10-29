import { Component, signal, effect } from '@angular/core';
import { single } from 'rxjs';
import { InjectionContextExample } from './injection-context-example/injection-context-example';
import { DataTypes } from './data-types/data-types';
import { GetSet } from './get-set/get-set';

@Component({
  imports: [InjectionContextExample, DataTypes, GetSet],
  selector: 'app-effects',
  styleUrl: './effects.css',
  templateUrl: './effects.html',
})
export class Effects {
  color = 'black';
  fruit = signal('mango');
    speed = signal(0);
  constructor() {
    effect(() => {
      if (this.speed() > 0 && this.speed() < 80) {
        this.color = 'green';
      }
      if (this.speed() >= 80 && this.speed() < 120) {
        this.color = 'orange';
      }
      if (this.speed() > 120 ) {
        this.color = 'red';
      }
     // console.log(this.speed());
      
    })
    
  }



  increaseSpeed() {
    this.speed.update(n => n + 10);
     console.log('Current speed:', this.speed());
  }
  changeFruit(){
    this.fruit.set('orange');
  }

}
