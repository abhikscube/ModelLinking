import { TestBed } from '@angular/core/testing';

import { PulledModelService } from './pulled-model.service';

describe('PulledModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PulledModelService = TestBed.get(PulledModelService);
    expect(service).toBeTruthy();
  });
});
