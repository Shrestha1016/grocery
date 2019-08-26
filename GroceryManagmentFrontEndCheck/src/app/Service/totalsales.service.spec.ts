import { TestBed } from '@angular/core/testing';

import { TotalsalesService } from './totalsales.service';

describe('TotalsalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TotalsalesService = TestBed.get(TotalsalesService);
    expect(service).toBeTruthy();
  });
});
