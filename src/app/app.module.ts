import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldNgIf } from './hello-wolrd-ngIf/hello-world-ngIf.component';
import { HelloWorldBindingComponent } from './hello-world-binding/hello-world-binding.component';
import { HelloWorldDi } from './hello-world-di/hello-world-di.component';
import { HelloWorldInterpolation } from './hello-world-interpolation/hello-world-interpolation.component';
import { Hello } from './hello.component';
import { HuyComponent } from './huy/huy.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingBTComponent } from './data-binding-bt/data-binding-bt.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { CrudProductBtComponent } from './crud-product-bt/crud-product-bt.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { BookingBusComponent } from './booking-bus/booking-bus.component';
import { SeatItemComponent } from './seat-item/seat-item.component'
import { TabPanelComponent } from './tab/tab-panel.component';
import { ButtonGroupComponent } from './demoNgTemplateOutlet/buttonLGroup.component';
import { ButtonItemComponent } from './demoNgTemplateOutlet/buttonItem.component';
import { BtMuaHangComponent } from './bt-mua-hang/bt-mua-hang.component';
import { BtProductItemComponent } from './bt-product-item/bt-product-item.component';
import { BtGioHangComponent } from './bt-gio-hang/bt-gio-hang.component';

@NgModule({
  declarations: [
    AppComponent,
    HuyComponent,
    HelloWorldBindingComponent,
    HelloWorldInterpolation,
    HelloWorldNgIf,
    HelloWorldDi,
    Hello,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
    DemoComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    SideBarComponent,
    FooterComponent,
    DataBindingComponent,
    DataBindingBTComponent,
    DemoDirectiveComponent,
    CrudProductBtComponent,
    StudentListComponent,
    StudentItemComponent,
    BookingBusComponent,
    SeatItemComponent,
    TabPanelComponent,
    ButtonGroupComponent,
    ButtonItemComponent,
    BtMuaHangComponent,
    BtProductItemComponent,
    BtGioHangComponent,
    //Từ đó về sau có thể sài ở bất cứ đâu sau khi khai báo

    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//Tich hop tat ca chuc nang xu ly form
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
