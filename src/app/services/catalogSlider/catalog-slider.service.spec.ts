import { TestBed } from '@angular/core/testing';

import { CatalogSliderService } from './catalog-slider.service';

describe('CatalogSliderService', () => {
  let service: CatalogSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
