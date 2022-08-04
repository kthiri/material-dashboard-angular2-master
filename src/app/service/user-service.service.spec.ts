import { TestBed } from '@angular/core/testing';

import { USerServiceService } from './user-service.service';

describe('USerServiceService', () => {
  let service: USerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(USerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
