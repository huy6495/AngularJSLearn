import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProductBtComponent } from './crud-product-bt.component';

describe('CrudProductBtComponent', () => {
  let component: CrudProductBtComponent;
  let fixture: ComponentFixture<CrudProductBtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProductBtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProductBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
