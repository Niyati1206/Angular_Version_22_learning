import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child-component',
  styleUrl: './child-component.css',
  templateUrl: './child-component.html',
})
export class ChildComponent {
  @Input() userName : string | undefined;
}
