import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  isDisabled:boolean = false;
  isDisable:boolean=false;
  isActive:boolean=false;
count:number =0;
  counter(action: string){
    if(action=='minus'){
     this.count>0 && this.count--;
    }else{
      this.count++;
    }
  }
  handle(eventName:string){
    console.log(eventName);
  }
doubleClickCount = 0;

onDoubleClick() {
  this.doubleClickCount++;
  alert('Double click works!');
  console.log('Double click happened');
}
}
