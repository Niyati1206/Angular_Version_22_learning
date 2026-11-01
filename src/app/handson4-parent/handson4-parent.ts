import { Component } from '@angular/core';
import { StudentResult } from './student-result/student-result';

@Component({
  imports: [StudentResult],
  selector: 'app-handson4-parent',
  styleUrl: './handson4-parent.css',
  templateUrl: './handson4-parent.html',
})
export class Handson4Parent {
  studentRecords = [
    {studentName:'Niyati', marks:78},
    {studentName:'Priyanka', marks:28},
    {studentName:'Rahul', marks:45}
  ]

}
