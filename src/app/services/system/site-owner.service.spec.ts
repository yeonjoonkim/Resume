import { TestBed } from '@angular/core/testing';

import { SiteOwnerService } from './site-owner.service';

describe('SiteOwnerService', () => {
  let service: SiteOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
