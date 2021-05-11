import { Component, OnInit } from '@angular/core'; // ở trong ts, thì component là decorator, để truy suất

@Component({//cái dòng này để hiểu rằng là ở dưới nó là 1 cái com chứ ko phải là cái khác
    //How to create decorator in ts?
    selector: 'app-demo',//tên gọi
    // template: `
    // `,
    templateUrl: "./demo.component.html",
    // styles: [`
    // h1{
    //     color: red;
    // }
    // p{
    //     color: green;
    // }
    // `],
    styleUrls: ["./demo.component.scss"]//no cung la mang vi ban co the link nhieu file css
})

export class DemoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}