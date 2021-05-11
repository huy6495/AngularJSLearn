import { Component, OnInit } from '@angular/core';
import {Author, authors} from "../authors"


@Component({
  selector: 'app-author-list',
  template: `<app-author-detail *ngFor="let author of authors" [author]="author" (selectAuthor)="handleSelect($event)" (deleteAuthor)="handleDelete($event)"></app-author-detail>
             <h3>Current selected author: {{currentAuthor.firstName}} {{currentAuthor.lastName}}</h3>`,
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
   currentAuthor: Author= 
   {id: 1,
    firstName: "Flora",
    lastName: "Twell",
    email: "ftwell0@phoca.cz",
    gender: "Female",
    ipAddress: "99.180.237.33"};


   authors = authors;

   handleSelect(author: Author){
     this.currentAuthor = author;
   }

   handleDelete(id: number){
     this.authors = this.authors.filter(aut => aut.id !==id)

     if(this.currentAuthor.id == id){
       this.currentAuthor= this.authors[0];
     }
   }
  constructor() { }

  ngOnInit(): void {
  }

}
