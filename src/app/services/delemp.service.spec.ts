import { TestBed } from '@angular/core/testing';

import { DelempService } from './delemp.service';

describe('DelempService', () => {
  let service: DelempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
