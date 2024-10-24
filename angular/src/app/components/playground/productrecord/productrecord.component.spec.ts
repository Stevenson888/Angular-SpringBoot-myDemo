import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductrecordComponent } from './productrecord.component';

describe('ProductrecordComponent', () => {
  let component: ProductrecordComponent;
  let fixture: ComponentFixture<ProductrecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductrecordComponent]
    });
    fixture = TestBed.createComponent(ProductrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
