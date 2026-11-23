import { RegularExpressionLiteralExpr } from '@angular/compiler';
import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-events-practice',
  styleUrl: './events-practice.css',
  templateUrl: './events-practice.html',
})
export class EventsPractice {
  typed : string ="";
  count= signal(0);
  // showAlert(){
  //   alert("You have clicked Alert")
  // }

  increase(){
    this.count.update(n=>n+1);
  }
  decrease(){
    if(this.count() > 0){
          this.count.update(n=>n-1);
    }else{
      this.count.set(0);
    }
  }

  reset(){
    this.count.set(0);
  }
  message(event: KeyboardEvent){
    this.typed = (event.target as HTMLInputElement).value;
  }
}
