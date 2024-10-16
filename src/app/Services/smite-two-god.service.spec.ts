import { TestBed } from '@angular/core/testing';

import { SmiteTwoGodService } from './smite-two-god.service';

describe('SmiteTwoGodService', () => {
  let service: SmiteTwoGodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmiteTwoGodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
