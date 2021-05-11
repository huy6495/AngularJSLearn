import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  studentSelect =  {name: "Huy", age: 12};

  studentList = [{name: "Huy", age:12},{name: "Hoang", age:15},{name: "Hai", age:16},{name: "Nam", age:11} ];

  setStudent(event:any){
    this.studentSelect = event;
  }
}
