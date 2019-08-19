import { TestBed } from '@angular/core/testing';

import { CategorypassService } from './categorypass.service';

describe('CategorypassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorypassService = TestBed.get(CategorypassService);
    expect(service).toBeTruthy();
  });
});
