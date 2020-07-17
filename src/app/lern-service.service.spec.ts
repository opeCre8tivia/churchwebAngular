import { TestBed } from '@angular/core/testing';

import { LernServiceService } from './lern-service.service';

describe('LernServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LernServiceService = TestBed.get(LernServiceService);
    expect(service).toBeTruthy();
  });
});
