import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedUserFileComponent } from './submitted-user-file.component';

describe('SubmittedUserFileComponent', () => {
  let component: SubmittedUserFileComponent;
  let fixture: ComponentFixture<SubmittedUserFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedUserFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedUserFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
