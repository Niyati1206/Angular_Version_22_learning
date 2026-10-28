import { Component, signal, computed, effect } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-learning-computed-signals',
  styleUrl: './learning-computed-signals.css',
  templateUrl: './learning-computed-signals.html',
})
export class LearningComputedSignals {
  constructor(){
    effect(()=>{
      console.log("height", this.height());
      console.log("width", this.width());
      console.log("area", this.area());
    })
  }

  height=signal(0);
  width=signal(0);
  area = computed(()=> this.height() * this.width());

  updateHeight(){
    this.height.update(n=> n+10);
  }
  updateWidth(){
    this.width.update(n=> n+10);
  }
}
