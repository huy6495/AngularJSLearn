import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>()


  toggle(){
    this.checked = !this.checked
    this.checkedChange.emit(this.checked)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
