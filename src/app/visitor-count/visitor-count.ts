import { Component , effect, signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-visitor-count',
  styleUrl: './visitor-count.css',
  templateUrl: './visitor-count.html',
})
export class VisitorCount {
  constructor(){
    effect(()=>{
      //console.log(this.count); //iska value hamesha 0 dikhega 
    console.log(this.counter1()); //iska value changes detect hoga and this changed values dikhega
    if(this.counter1()>10){
      alert("Visitor count has reached max");
      this.counter1.update(counting => counting-1);
    }
    })
  }
  count: number =0;
    updateCount(){
      this.count++;
    }
  counter1 = signal(0);
  updateSignal(){
    this.counter1.update(counter12 => counter12 +1)
  }
}
