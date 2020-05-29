import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateOtpComponent } from './candidate-otp.component';

describe('CandidateOtpComponent', () => {
  let component: CandidateOtpComponent;
  let fixture: ComponentFixture<CandidateOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
