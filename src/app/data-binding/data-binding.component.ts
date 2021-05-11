import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  fullName ="Huy Nguyen";
  age = 18;
  email ="abc@gmail.com";
  avatar = "../../assets/img/imgBlackCar.jpg";


  showMessage(mes: string){
    alert("Hello " + mes)
  }

  increaseAge(){
    this.age++
  }
  constructor() { }

  ngOnInit(): void {
  }

}
