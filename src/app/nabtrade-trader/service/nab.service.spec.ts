import { TestBed } from '@angular/core/testing';

import { NabService } from './nab.service';

describe('NabService', () => {
  let service: NabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
