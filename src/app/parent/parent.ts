import { Component, WritableSignal, signal } from '@angular/core';
import { ChildComponent } from './child-component/child-component';

@Component({
  imports: [ChildComponent],
  selector: 'app-parent',
  styleUrl: './parent.css',
  templateUrl: './parent.html',
})
export class Parent {
  // username : string ="Niyati Sawant";
  users = signal(['Niyu','Varu','Priya','Prabhakar']);
  newUser = signal('');
  AddUser(){
    this.users.update((data)=>([...data,this.newUser()]));
     this.newUser.set(''); //clear the input field once value is added to list
    
  }
}
