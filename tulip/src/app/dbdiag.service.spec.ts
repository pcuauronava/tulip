import { TestBed } from '@angular/core/testing';

import { DBDiagService } from './dbdiag.service';

describe('DBDiagService', () => {
  let service: DBDiagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBDiagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
