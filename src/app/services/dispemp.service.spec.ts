import { TestBed } from '@angular/core/testing';

import { DispempService } from './dispemp.service';

describe('DispempService', () => {
  let service: DispempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
