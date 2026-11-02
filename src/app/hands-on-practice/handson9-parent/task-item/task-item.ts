import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task-item',
  styleUrl: './task-item.css',
  templateUrl: './task-item.html',
})
export class TaskItem {
 @Input()  value : string = "";
@Output() completed = new EventEmitter();
 markDone(){
  this.completed.emit(this.value);
 }
}
