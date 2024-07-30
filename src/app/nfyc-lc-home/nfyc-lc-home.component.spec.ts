import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfycLcHomeComponent } from './nfyc-lc-home.component';

describe('NfycLcHomeComponent', () => {
  let component: NfycLcHomeComponent;
  let fixture: ComponentFixture<NfycLcHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfycLcHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NfycLcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
