import { TestBed } from '@angular/core/testing';

import { NabtradeSampleService } from './nabtrade-sample.service';

describe('NabtradeSampleService', () => {
  let service: NabtradeSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NabtradeSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
