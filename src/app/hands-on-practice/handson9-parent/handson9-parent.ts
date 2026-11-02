import { Component } from '@angular/core';
import { TaskItem } from './task-item/task-item';

@Component({
  imports: [TaskItem],
  selector: 'app-handson9-parent',
  styleUrl: './handson9-parent.css',
  templateUrl: './handson9-parent.html',
})
export class Handson9Parent {
  taskList = ['Study Angular', 'Practice TypeScript', 'Revise Signals'];
  taskCompleted(val:string){
    this.taskList = this.taskList.filter(task=> task!==val);
  } 
}
