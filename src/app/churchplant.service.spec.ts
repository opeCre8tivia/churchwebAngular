import { TestBed } from '@angular/core/testing';

import { ChurchplantService } from './churchplant.service';

describe('ChurchplantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChurchplantService = TestBed.get(ChurchplantService);
    expect(service).toBeTruthy();
  });
});
