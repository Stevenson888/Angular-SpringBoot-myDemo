import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasideComponent } from './laside.component';

describe('LasideComponent', () => {
  let component: LasideComponent;
  let fixture: ComponentFixture<LasideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LasideComponent]
    });
    fixture = TestBed.createComponent(LasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
