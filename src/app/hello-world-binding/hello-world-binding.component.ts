import {Component} from "@angular/core"

@Component({
    selector: "hello-world-binding",
    templateUrl: "./hello-world-binding.component.html",
})

export class HelloWorldBindingComponent {
    fontColor = "red";
    sayHelloId = 2;
    canClick = false;
    message = "Tui lam duoc roi nao";
    sayMessage=()=>{
        alert(this.message)
    }

}