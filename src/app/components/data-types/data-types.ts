import { Component } from '@angular/core';

type Role = 'admin' | 'user' | 'guest';
interface user{
  name: string;
  age:number;
  email:string;
  isAlcoholic?: boolean;
  contact:number;
  role: Role;
}
@Component({
  imports: [],
  selector: 'app-data-types',
  styleUrl: './data-types.css',
  templateUrl: './data-types.html',
})
export class DataTypes {
  // name: string="Niyati Sawant";
  // age : number=23;
  // isAdult: boolean=true;
  // hobbies : string[]=['Reading','Skating','Gym'];
  // marks = [
  //   {subject:'English', score:20},
  //   {subject:'Maths', score:18},
  //   {subject:'Science', score:25},
  //   {subject:'History', score:27}
  // ];
  // message:string= this.isAdult==true ? "Adult": "Minor";

  users: user[] = [
  { name: 'Niyati', email: 'niyati@example.com', age: 23,isAlcoholic: true, contact:9977862645, role: 'admin' },
  {name: 'Subhadip', email: 'subh@example.com', age: 25,isAlcoholic: false, contact:9836401837, role: 'user' },
  { name: 'Pranjal', email: 'pranjal@example.com', age: 22, isAlcoholic: false, contact:77783927193, role: 'guest' },
];
  
}