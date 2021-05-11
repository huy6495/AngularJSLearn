import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-bt',
  templateUrl: './data-binding-bt.component.html',
  styleUrls: ['./data-binding-bt.component.css']
})

//auto detection
export class DataBindingBTComponent implements OnInit {
  email = "";
  FullName = "";

  setFullName(name: string){
    this.FullName = name;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
