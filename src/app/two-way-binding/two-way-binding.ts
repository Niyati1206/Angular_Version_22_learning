import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-two-way-binding',
  styleUrl: './two-way-binding.css',
  templateUrl: './two-way-binding.html',
})
export class TwoWayBinding {
  // name: WritableSignal<string> = signal('Niyati');
  // age:number=0;

  userData= signal({
    name:"Niyati Sawant",
    age: 23,
    email:"niyatisawant@test.com"
  })
  updateUserData(key:string, val: string){
    // if(key=='name'){
    //    this.userData.update((item)=>({...item, name:val}));
    // }
    //     if(key=='age'){
    //    this.userData.update((item)=>({...item, age:parseInt(val)}));
    // }
    //     if(key=='email'){
    //    this.userData.update((item)=>({...item, email:val}));
    // }
    // OR YOU CAN SIMPLY OPTIMIZE TO BELOW 
 this.userData.update((item)=>({...item, [key]:val}));
   
  }
}
