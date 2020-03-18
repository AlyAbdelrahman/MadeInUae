import { TestBed } from '@angular/core/testing';

import { HomeSponserAsidesService } from './home-sponser-asides.service';

describe('HomeSponserAsidesService', () => {
  let service: HomeSponserAsidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeSponserAsidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
