import { TestBed } from '@angular/core/testing';
import { NfycService } from './nfyc.service';


describe('NfycService', () => {
  let service: NfycService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NfycService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
