import { TestBed } from '@angular/core/testing';

import { CaldepartService } from './caldepart.service';

describe('CaldepartService', () => {
  let service: CaldepartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaldepartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
