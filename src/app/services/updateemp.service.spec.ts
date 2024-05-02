import { TestBed } from '@angular/core/testing';

import { UpdateempService } from './updateemp.service';

describe('UpdateempService', () => {
  let service: UpdateempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
