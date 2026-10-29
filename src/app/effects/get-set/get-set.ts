import { Component, signal , WritableSignal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-get-set',
  styleUrl: './get-set.css',
  templateUrl: './get-set.html',
})
export class GetSet {
  name:WritableSignal<string> = signal('');
  resetButton(){
    this.name.set('Niyati Sawant');
  }
  setValue(val: string){
    this.name.set(val);
  }
}
