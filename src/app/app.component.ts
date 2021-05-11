import { Component, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  // title = 'myNewApp';


  //name - id - phone

  // tags = ["angular", "11", "hello"];


  isDanger= false;
  isWarning= false;

  classes = ['box', 'red-border', 'yellow-background']

  currentProgress = 70;

  isChecked = false;

  canSave = true;
  isSpecial = true;
  isUnchanged = true;

  
  // isActive = true;
  // nullCustomer = null;
  // currentCustomer = {
  //   name: "Laura",
  // }

  btnClass = "btn-success";

  // classBtn(val: string) {
  //   this.btnClass = val;
  //   console.log(val)


  // }

  isSick = true;

  onFeel(val: boolean){
    this.isSick = val;
  }

  month =5;


 monthOptions = [{value: 1, lable: "Tháng 1"},
  {value: 2, lable: "Tháng 2"},
  {value: 3, lable: "Tháng 3"},
  {value: 4, lable: "Tháng 4"},]


  defaultBtn ={
    textGreen: true,
    redBackground: true,
  }


  @ViewChild("toggleCom") toggleCom?: ToggleComponent;

  changeStatus(){
    this.toggleCom?.toggle();
  }
}





