import { TestBed } from '@angular/core/testing';

import { APIUnitService } from './apiunit.service';

describe('APIUnitService', () => {
  let service: APIUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
