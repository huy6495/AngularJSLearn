import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtMuaHangComponent } from './bt-mua-hang.component';

describe('BtMuaHangComponent', () => {
  let component: BtMuaHangComponent;
  let fixture: ComponentFixture<BtMuaHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtMuaHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtMuaHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
