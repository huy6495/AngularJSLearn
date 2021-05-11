import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtProductItemComponent } from './bt-product-item.component';

describe('BtProductItemComponent', () => {
  let component: BtProductItemComponent;
  let fixture: ComponentFixture<BtProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
