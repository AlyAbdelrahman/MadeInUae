import { TestBed } from '@angular/core/testing';

import { MuiltRowSliderService } from './muilt-row-slider.service';

describe('MuiltRowSliderService', () => {
  let service: MuiltRowSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuiltRowSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
