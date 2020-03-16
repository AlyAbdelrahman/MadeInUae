import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiltRowsSliderComponent } from './muilt-rows-slider.component';

describe('MuiltRowsSliderComponent', () => {
  let component: MuiltRowsSliderComponent;
  let fixture: ComponentFixture<MuiltRowsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuiltRowsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiltRowsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
