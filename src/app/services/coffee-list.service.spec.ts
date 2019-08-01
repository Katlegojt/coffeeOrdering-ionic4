import { TestBed } from '@angular/core/testing';

import { CoffeeListService } from './coffee-list.service';

describe('CoffeeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoffeeListService = TestBed.get(CoffeeListService);
    expect(service).toBeTruthy();
  });
});
