import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-student-result',
  styleUrl: './student-result.css',
  templateUrl: './student-result.html',
})
export class StudentResult {
  @Input() studentRecords : any=[];
  

}
