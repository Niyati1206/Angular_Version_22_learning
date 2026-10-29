import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-getter-setter-signals',
  styleUrl: './getter-setter-signals.css',
  templateUrl: './getter-setter-signals.html',
})
export class GetterSetterSignals {
  username = signal('Niyati');
  userData = signal({
    studentLastName : 'Sawant',
    email : 'niyati@test.com'

  })
  get uName(){
    return this.username();
  }

  set uName(val: string){ //ye uName get aur set ke liye same rakhna hai 
    this.username.set(val);
  }

  get lastName(){
   return this.userData().studentLastName;
  }

  set lastName(val){
    this.userData.update((item)=>({...item, studentLastName:val})); //dont use .set() here as its object use update()
  }
  // similarly you can create get and set for email also
}
