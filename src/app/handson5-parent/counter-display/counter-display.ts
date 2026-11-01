import { Component , Input, signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter-display',
  styleUrl: './counter-display.css',
  templateUrl: './counter-display.html',
})
export class CounterDisplay {
  @Input() count=signal(0);
  
}
