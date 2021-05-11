import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component'

@Component({
    selector: 'tab-group',
    template: `<div class="tab-headers">
    <div class="tab-header-item" *ngFor="let tab of TabPanelList; let idx = index" (click)="activeIndexChange.emit(idx)">
    {{tab.title}}
    <button (click)="removeTab(tab)">X</button>
    </div>
    </div>
    
    <div class="tab-body">
    <ng-container *ngTemplateOutlet="TabPanelList[activeIndex].panelBody"></ng-container>
    </div>`
})

export class NameComponent {
    TabPanelList: TabPanelComponent[] = [];
    @Input() activeIndex =0;
    @Output() activeIndexChange = new EventEmitter<number>()
    
    addTab(tab: TabPanelComponent){
        this.TabPanelList = [...this.TabPanelList, tab];
    }

    removeTab(tab: TabPanelComponent){
        let found = -1;
        this.TabPanelList = this.TabPanelList.filter((tp, index)=>{
            if(tp === tab){
                found = index;
                return false;
            }
            return true;

        })

        if(found === this.activeIndex){
            this.activeIndexChange.emit(found === this.TabPanelList.length? found-1 : found)
        }
    }
    constructor() { }

   
}