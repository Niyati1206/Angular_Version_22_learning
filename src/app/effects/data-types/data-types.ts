import { Component, signal , WritableSignal, computed , Signal} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-data-types',
  styleUrl: './data-types.css',
  templateUrl: './data-types.html',
})
export class DataTypes {
   // Writable string signal
  data: WritableSignal<string> = signal<string>('anil');

  // Writable array signal
  users: WritableSignal<string[]> =
    signal<string[]>(['anil', 'sidhu', 'peter']);

  // Read-only computed signal
  speed: Signal<number> = computed<number>(() => 90);

  handleData() {
    this.data.set('Sidhu');

    this.users.update(items => [...items, 'bruce']);

    console.log(this.data());
    console.log(this.users());
    console.log(this.speed());
  }
}
