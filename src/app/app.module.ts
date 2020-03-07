import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesCarouselComponent } from './slides-carousel/slides-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MuiltRowsSliderComponent } from './muilt-rows-slider/muilt-rows-slider.component';
import { FooterSliderComponent } from './footer-slider/footer-slider.component';
import { CatalogSliderComponent } from './catalog-slider/catalog-slider.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { FactoriesComponent } from './pages/factories/factories.component';
import { FactoryDetailsComponent } from './pages/factory-details/factory-details.component';
import { AddFactoryComponent } from './pages/add-factory/add-factory.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidesCarouselComponent,
    MuiltRowsSliderComponent,
    FooterSliderComponent,
    CatalogSliderComponent,
    HomepageComponent,
    AboutComponent,
    FactoriesComponent,
    FactoryDetailsComponent,
    AddFactoryComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [SlidesCarouselComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}