import { TestBed } from '@angular/core/testing';

import { PocArrayService } from './poc-array.service';

describe('PocArrayService', () => {
  let service: PocArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
