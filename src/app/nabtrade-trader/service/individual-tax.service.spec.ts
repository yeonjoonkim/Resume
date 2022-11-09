import { TestBed } from '@angular/core/testing';

import { IndividualTaxService } from './individual-tax.service';

describe('IndividualTaxService', () => {
  let service: IndividualTaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualTaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
