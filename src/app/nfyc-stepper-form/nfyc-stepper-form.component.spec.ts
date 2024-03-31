import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfycStepperFormComponent } from './nfyc-stepper-form.component';

describe('NfycStepperFormComponent', () => {
  let component: NfycStepperFormComponent;
  let fixture: ComponentFixture<NfycStepperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfycStepperFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NfycStepperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
