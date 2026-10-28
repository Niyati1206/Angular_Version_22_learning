import { Component, effect, EffectRef, Injector, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-injection-context-example',
  styleUrl: './injection-context-example.css',
  templateUrl: './injection-context-example.html',
})
export class InjectionContextExample {
  speed= signal(0);
  constructor(private injector : Injector){}
  private speedEffect? : EffectRef;
  startMonitoring(){
     this.speedEffect = effect(()=>{
      console.log(this.speed());
    }, {injector: this.injector});
  }
    increaseSpeed() {
    this.speed.update(n => n + 10);
  }
  stopMonitoring() {
  this.speedEffect?.destroy();
}
}
