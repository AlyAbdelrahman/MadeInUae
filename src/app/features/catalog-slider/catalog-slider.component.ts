import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
import  Swiper from 'swiper';
import {companyDetails} from '../../models/companyDetails';
import {CatalogSliderService} from '../../services/catalogSlider/catalog-slider.service';
import { ActivatedRoute } from '@angular/router';
import {productsDetails} from '../../models/productsCategory'


@Component({
  selector: 'catalog-slider',
  templateUrl: './catalog-slider.component.html',
  styleUrls: ['./catalog-slider.component.scss']
})
export class CatalogSliderComponent implements OnInit {
  swiper: any;
  baseUrl:string='http://mbesher-002-site4.dtempurl.com/CompanyProduct/';
  companyDetails:productsDetails[];
  constructor(private catalogSlides: CatalogSliderService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;

     this.catalogSlides.getCatalogSlides(id).subscribe(Slide=>this.companyDetails=Slide.products);

  }

  ngAfterViewInit() {
    (function ($) {
      $(function () {
    
      var CaSwiper = $('.catalog-swiper-container');
    
      if (CaSwiper.length > 0) {
    
        var sliderView = 1;
        var ww = $(window).width();
        console.log(ww)
        if (ww >= 1700) sliderView = 3;
        if (ww <= 1700) sliderView = 3;
        if (ww <= 1560) sliderView = 3;
        if (ww <= 1400) sliderView = 3;
        if (ww <= 1060) sliderView = 3;
        if (ww <= 800) sliderView = 3;
        if (ww <= 560) sliderView = 2;
        if (ww <= 400) sliderView = 1;
    
        var swiper = new Swiper('.catalog-swiper-container', {
          navigation: {
            nextEl: '.Ca-swiper-button-next',
            prevEl: '.Ca-swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          centeredSlides: true,
          observer: true, 
          observeParents: true,
          slidesPerView: sliderView,
          spaceBetween: 50,
          loop: true,
           loopedSlides: 1,
          speed: 500,
        //  autoplay: true,
          // autoplayDisableOnInteraction: true,
        
        });
    
        $(window).resize(function () {
          var ww = $(window).width();
          if (ww >= 1700) swiper.params.slidesPerView = 3;
          if (ww <= 1700) swiper.params.slidesPerView = 3;
          if (ww <= 1560) swiper.params.slidesPerView = 3;
          if (ww <= 1400) swiper.params.slidesPerView = 3;
          if (ww <= 1060) swiper.params.slidesPerView = 3;
          if (ww <= 800) swiper.params.slidesPerView = 2;
          if (ww <= 560) swiper.params.slidesPerView = 2;
          if (ww <= 400) swiper.params.slidesPerView = 1;
        });
    
        $(window).trigger('resize');
    
        // var mySwiper = document.querySelector('.swiper-container').swiper;
    
        CaSwiper.mouseenter(function () {
          swiper.stopAutoplay;
         //console.log('slider stopped');
        });
    
        CaSwiper.mouseleave(function () {
          swiper.startAutoplay;
        //  console.log('slider started again');
        });
      }
    
      });
    })(jquery);
   }
}
