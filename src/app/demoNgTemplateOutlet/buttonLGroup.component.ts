import { Component } from '@angular/core';

@Component({
    selector: 'button-group',
    template: `<ng-template #buttonTemp let-label="label" let-btn="btn" let-dis="dis" let-className="className">
    <button [ngClass]="[className? className: '']" [disabled]="dis" (click)="onLabel(label)">{{label}}</button>
    </ng-template>
    
    <ng-container [ngTemplateOutlet]="buttonTemp"
              [ngTemplateOutletContext]="{ label: '1', className: 'btn btn-danger mx-2', dis: true}">
</ng-container>
<ng-container [ngTemplateOutlet]="buttonTemp"
              [ngTemplateOutletContext]="{ label: '2', className: 'btn-success mx-2'}">
</ng-container>
<ng-container [ngTemplateOutlet]="buttonTemp"
              [ngTemplateOutletContext]="{ label: '3', className: 'btn-warning btn', dis: true}">
</ng-container>
<ng-container [ngTemplateOutlet]="buttonTemp"
              [ngTemplateOutletContext]="{ label: '4', className: 'btn-primary mx-2'}">
</ng-container>
<p>{{label}}</p>`
})

export class ButtonGroupComponent  {
    label = 0;
    onLabel(lab: number){
        this.label = lab;
        console.log(this.label)
    }
    constructor() { }

    
}