import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsrecordComponent } from './newsrecord.component';

describe('NewsrecordComponent', () => {
  let component: NewsrecordComponent;
  let fixture: ComponentFixture<NewsrecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsrecordComponent]
    });
    fixture = TestBed.createComponent(NewsrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
