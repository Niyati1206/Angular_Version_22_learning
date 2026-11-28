import { Component, signal , computed} from '@angular/core';
import { last } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-events-hard-question',
  styleUrl: './events-hard-question.css',
  templateUrl: './events-hard-question.html',
})
export class EventsHardQuestion {
  message = signal("");
  isLiked=signal<boolean|null>(null) ;
  score =computed(()=>{
    const v = this.isLiked();
    return v === true ? 1 : v === false ? -1 :0 ;
  })
  giveLast(event:KeyboardEvent){
 this.message.set(event.key);
  }

  reset(){
    this.message.set("");
  }

  action(n:boolean){
    this.isLiked.set(n);
  }
}
