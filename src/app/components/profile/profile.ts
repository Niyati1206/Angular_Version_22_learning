import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  name:string ="Niyati Sawant"
  age: number = 2;
  email:string="niyatisawant2017@gmail.com"
  contact:number= 9987908145
}
