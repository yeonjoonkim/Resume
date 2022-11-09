import { TestBed } from '@angular/core/testing';

import { NabDataService } from './nab-data.service';

describe('NabDataService', () => {
  let service: NabDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NabDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
