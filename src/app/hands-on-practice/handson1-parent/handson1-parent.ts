import { Component } from '@angular/core';
import { UserProfile } from './user-profile/user-profile';

@Component({
  imports: [UserProfile],
  selector: 'app-handson1-parent',
  styleUrl: './handson1-parent.css',
  templateUrl: './handson1-parent.html',
})
export class Handson1Parent {
  username : string = "Priya";
}
