import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfycConceptHomeComponent } from './nfyc-concept-home.component';

describe('NfycConceptHomeComponent', () => {
  let component: NfycConceptHomeComponent;
  let fixture: ComponentFixture<NfycConceptHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfycConceptHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NfycConceptHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
