import {Component, Input} from "@angular/core";

@Component({
    selector: "hello",
    template:`<h2>Hello {{ nameUser }}</h2>`,
    styles: [`h2 { font-family: Lato; }`]
})

export class Hello {
    @Input() nameUser: string= "";
    

    ngOnInit(){
        console.log("Hello Init");
    }

    ngOnDestroy(){
        console.log("Hello Destroy");
    }
}