import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `
  <div class="progress-bar-container" [style.backgroundColor]="backgroundColor">
    <div class="progress" [style]="{backgroundColor: progressColor, width: progress + '%'}">
    </div>
  </div>`,
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() set progress(val:number){

  };

  private _progress = 50;

  get progress(){
    return this._progress
  }
  @Input() backgroundColor = "#ccc";
  @Input() progressColor = "tomato"
  

  //Minh da biet duoc la lam sao export 1 so cai property, de component khac quan ly, de tang tinh reuse
  //Thong tin va viec minh su dung Input no sẽ ảnh hưởng ntn: mình phải nói đến lifecycle, đối với input có 2 lc quan trọng: OnIn, OnCh, constructor
  //constructor là luôn luôn chạy, đối với 1 component, tạo 1 cái instance lên là do angular.
  //ví dụ mình có 1 injection thì angular nó sẽ đưa vào khi khởi tạo

  constructor() {
    console.log("constructor", {progress: this.progress,
      backgroundColor: this.backgroundColor,
       progressColor: this.progressColor})
  }

  ngOnInit(){
    console.log("OnInit", {progress: this.progress,
      backgroundColor: this.backgroundColor,
       progressColor: this.progressColor})
  }

  ngOnChanges (changes: SimpleChanges){
    console.log("OnChanges", {progress: this.progress,
      backgroundColor: this.backgroundColor,
       progressColor: this.progressColor})
  }
}
