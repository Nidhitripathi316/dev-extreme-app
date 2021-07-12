import { TestBed } from '@angular/core/testing';

import { PocFormService } from './poc-form.service';

describe('PocFormService', () => {
  let service: PocFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
