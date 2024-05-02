import { TestBed } from '@angular/core/testing';

import { DispleaveService } from './displeave.service';

describe('DispleaveService', () => {
  let service: DispleaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispleaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
