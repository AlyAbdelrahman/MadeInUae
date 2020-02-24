import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesCarouselComponent } from './slides-carousel/slides-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MuiltRowsSliderComponent } from './muilt-rows-slider/muilt-rows-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidesCarouselComponent,
    MuiltRowsSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [SlidesCarouselComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
