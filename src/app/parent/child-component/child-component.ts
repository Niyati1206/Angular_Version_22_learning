import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child-component',
  styleUrl: './child-component.css',
  templateUrl: './child-component.html',
})
export class ChildComponent {
  @Input() userName : string | undefined;
  @Output() selectedUser = new EventEmitter();
  @Output() removeUser = new EventEmitter();
  whichUser(name: string | undefined){
    console.log(name);
    this.selectedUser.emit(name);
  }
  deleteUser(name: string | undefined){
    console.log("Delete in child")
    this.removeUser.emit(name);
  }
}
