import { Component, signal , computed} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {

  firstName  = signal("Niyati")
  lastName= signal("Sawant")
  fullname= computed(()=> `${this.firstName()}  ${this.lastName()}`)
  initialsName =computed(()=> `${this.firstName()[0]}${this.lastName()[0]}`)
  time : number = 0;
  message: string ="Hey "

  // fullName(){
  //   this.fullname = this.firstName + " " + this.lastName;
  //   console.log(this.fullname);
  //   return this.fullname;
    
  // }
  // initials(){
  //   this.initialsName= this.firstName[0] + " " + this.lastName[0];
  //   console.log(this.initialsName);
  //   return this.initialsName;
  // }

  greeting(){
    this.time = new Date().getHours();
    console.log(this.time);
    if(this.time >=0  && this.time <12){
      this.message= "Good morning " + this.fullname();
    }else if( this.time>= 12 && this.time< 18){
      this.message=  "Good afternoon " + this.fullname();
    }else{
      this.message=  "Good evening " + this.fullname();
    }
  return this.message;
  }
}
