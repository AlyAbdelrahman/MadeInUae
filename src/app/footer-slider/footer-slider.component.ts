import { Component, OnInit ,ElementRef, AfterViewInit } from '@angular/core';
 import  Swiper from 'swiper';
//  import fs = require('fs');
import * as jquery from 'jquery';
@Component({
  selector: 'footer-slider',
  templateUrl: './footer-slider.component.html',
  styleUrls: ['./footer-slider.component.scss']
})
export class FooterSliderComponent implements OnInit {
  swiper: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    (function ($) {
      $(function () {
    
      var agSwiper = $('.footer-swiper-container');
    
      if (agSwiper.length > 0) {
    
        var sliderView = 1;
        var ww = $(window).width();
        console.log(ww)
        if (ww >= 1700) sliderView = 7;
        if (ww <= 1700) sliderView = 7;
        if (ww <= 1560) sliderView = 6;
        if (ww <= 1400) sliderView = 6;
        if (ww <= 1060) sliderView = 4;
        if (ww <= 800) sliderView = 3;
        if (ww <= 560) sliderView = 2;
        if (ww <= 400) sliderView = 1;
    
        var swiper = new Swiper('.footer-swiper-container', {
          slidesPerView: sliderView,
          spaceBetween: 0,
          loop: true,
          loopedSlides: 16,
          speed: 500,
          autoplay: true,
          autoplayDisableOnInteraction: true,
          centeredSlides: true
        });
    
        $(window).resize(function () {
          var ww = $(window).width();
          if (ww >= 1700) swiper.params.slidesPerView = 7;
          if (ww <= 1700) swiper.params.slidesPerView = 7;
          if (ww <= 1560) swiper.params.slidesPerView = 6;
          if (ww <= 1400) swiper.params.slidesPerView = 5;
          if (ww <= 1060) swiper.params.slidesPerView = 4;
          if (ww <= 800) swiper.params.slidesPerView = 3;
          if (ww <= 560) swiper.params.slidesPerView = 2;
          if (ww <= 400) swiper.params.slidesPerView = 1;
        });
    
        $(window).trigger('resize');
    
        // var mySwiper = document.querySelector('.swiper-container').swiper;
    
        agSwiper.mouseenter(function () {
          swiper.stopAutoplay;
         //console.log('slider stopped');
        });
    
        agSwiper.mouseleave(function () {
          swiper.startAutoplay;
        //  console.log('slider started again');
        });
      }
    
      });
    })(jquery);
   }
}
