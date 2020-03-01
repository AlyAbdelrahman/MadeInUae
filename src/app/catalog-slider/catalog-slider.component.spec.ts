import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSliderComponent } from './catalog-slider.component';

describe('CatalogSliderComponent', () => {
  let component: CatalogSliderComponent;
  let fixture: ComponentFixture<CatalogSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
