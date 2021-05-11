import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {
  @Input() student = {name: "", age: 0};

  @Output() studentEmitter = new EventEmitter();

  onChooseStudent(){
    this.studentEmitter.emit(this.student)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
