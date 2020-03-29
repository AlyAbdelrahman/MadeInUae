import { TestBed } from '@angular/core/testing';

import { FooterSliderService } from './footer-slider.service';

describe('FooterSliderService', () => {
  let service: FooterSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
