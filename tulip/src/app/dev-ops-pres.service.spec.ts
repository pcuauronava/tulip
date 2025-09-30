import { TestBed } from '@angular/core/testing';

import { DevOpsPresService } from './dev-ops-pres.service';

describe('DevOpsPresService', () => {
  let service: DevOpsPresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevOpsPresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
