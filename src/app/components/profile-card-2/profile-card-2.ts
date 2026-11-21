import { Component, Input , input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card-2',
  styleUrl: './profile-card-2.css',
  templateUrl: './profile-card-2.html',
})
export class ProfileCard2 {
  // @Input() name = "";
  name = input(''); // newer way of doing things instead of writing @Input we can use input signal ...when using input signal write name() in html
  role : string ="Associate Engineer"
}
