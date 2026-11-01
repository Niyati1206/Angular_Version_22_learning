import { Component , Input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-profile',
  styleUrl: './user-profile.css',
  templateUrl: './user-profile.html',
})
export class UserProfile {
  @Input() userName : string | undefined;
}
