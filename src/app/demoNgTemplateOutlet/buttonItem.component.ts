import { Component, Input, Output, TemplateRef } from '@angular/core';

@Component({
    selector: 'button-item',
    template: `<ng-container *ngTemplateOutlet="inButton"></ng-container>`
})

export class ButtonItemComponent  {

    @Input() inButton: TemplateRef<any>;

    
    constructor() { }

    
}