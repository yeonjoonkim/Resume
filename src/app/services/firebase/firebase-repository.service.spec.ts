import { TestBed } from '@angular/core/testing';

import { FirebaseRepositoryService } from './firebase-repository.service';

describe('FirebaseRepositoryService', () => {
  let service: FirebaseRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
