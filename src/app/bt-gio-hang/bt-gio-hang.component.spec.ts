import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtGioHangComponent } from './bt-gio-hang.component';

describe('BtGioHangComponent', () => {
  let component: BtGioHangComponent;
  let fixture: ComponentFixture<BtGioHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtGioHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtGioHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
