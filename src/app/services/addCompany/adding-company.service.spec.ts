import { TestBed } from '@angular/core/testing';

import { AddingCompanyService } from './adding-company.service';

describe('AddingCompanyService', () => {
  let service: AddingCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddingCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
