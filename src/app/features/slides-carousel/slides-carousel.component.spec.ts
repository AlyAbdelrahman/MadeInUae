import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesCarouselComponent } from './slides-carousel.component';

describe('SlidesCarouselComponent', () => {
  let component: SlidesCarouselComponent;
  let fixture: ComponentFixture<SlidesCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
