import { Component } from '@angular/core';

@Component({
    selector: 'hello-world-ngIf',
    templateUrl: './hello-world-ngIf.component.html'
})

export class HelloWorldNgIf{
    bgColor="white";
    color= "black";
    message= "Click me to change color!";
    canEdit= false;
    changeColor(){
        this.canEdit = !this.canEdit;
        if(this.canEdit){
            this.bgColor = "black";
            this.color = "white";
            this.message= "Change again!";
        }else{
            this.bgColor="white";
            this.color= "black";
            this.message= "Click me to change color!";
        }
    }
}