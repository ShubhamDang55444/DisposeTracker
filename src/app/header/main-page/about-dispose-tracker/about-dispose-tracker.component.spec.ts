import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDisposeTrackerComponent } from './about-dispose-tracker.component';

describe('AboutDisposeTrackerComponent', () => {
  let component: AboutDisposeTrackerComponent;
  let fixture: ComponentFixture<AboutDisposeTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDisposeTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDisposeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
