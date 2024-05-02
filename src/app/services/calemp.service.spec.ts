import { TestBed } from '@angular/core/testing';

import { CalempService } from './calemp.service';

describe('CalempService', () => {
  let service: CalempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
