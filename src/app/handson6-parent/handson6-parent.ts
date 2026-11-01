import { Component } from '@angular/core';
import { GreetingButton } from './greeting-button/greeting-button';

@Component({
  imports: [GreetingButton],
  selector: 'app-handson6-parent',
  styleUrl: './handson6-parent.css',
  templateUrl: './handson6-parent.html',
})
export class Handson6Parent {
message : string="";
  recieveMessage(val:string){
this.message=val;
  }
}
