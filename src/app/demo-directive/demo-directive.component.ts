import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  name= "";
  isLogin = false;

  monthOptions = [{value: 1, lable: "Tháng 1"},
  {value: 2, lable: "Tháng 2"},
  {value: 3, lable: "Tháng 3"},
  {value: 4, lable: "Tháng 4"},]

  handleLogin(username: string, pass: string){
    if(username=="cybersoft"&&pass=="cybersoft"){
      this.name = username;
      this.isLogin = true;
    }
  }
}
