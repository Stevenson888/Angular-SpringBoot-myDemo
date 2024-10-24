import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RasideComponent } from './raside.component';

describe('RasideComponent', () => {
  let component: RasideComponent;
  let fixture: ComponentFixture<RasideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RasideComponent]
    });
    fixture = TestBed.createComponent(RasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
