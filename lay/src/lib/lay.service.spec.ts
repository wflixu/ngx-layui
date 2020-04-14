import { TestBed } from '@angular/core/testing';

import { LayService } from './lay.service';

describe('LayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayService = TestBed.get(LayService);
    expect(service).toBeTruthy();
  });
});
