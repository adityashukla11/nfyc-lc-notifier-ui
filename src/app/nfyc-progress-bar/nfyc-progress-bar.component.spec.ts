import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfycProgressBarComponent } from './nfyc-progress-bar.component';

describe('NfycProgressBarComponent', () => {
  let component: NfycProgressBarComponent;
  let fixture: ComponentFixture<NfycProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfycProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NfycProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
