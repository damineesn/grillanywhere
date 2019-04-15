import { TestBed } from '@angular/core/testing';

import { FilterGrillerService } from './filter-griller.service';

describe('FilterGrillerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterGrillerService = TestBed.get(FilterGrillerService);
    expect(service).toBeTruthy();
  });
});
