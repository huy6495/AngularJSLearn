import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Author} from "../authors"


@Component({
  selector: 'app-author-detail',
  template: `<div>
              <div> 
              <span (click)="selectAuthor.emit(author)">{{ author.firstName }} {{ author.lastName }}</span>
              <button (click)="deleteAuthor.emit(author.id)" style="margin-left: 10px; color: 'white'; background: 'red'">Delete</button>
              </div>
              
            </div>`,
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent {
    @Input() author:Author=
    {id: -1,
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    ipAddress: ""};
    @Output() selectAuthor = new EventEmitter<Author>();
    @Output() deleteAuthor = new EventEmitter<number>();


  constructor() {
     }
  
}
