import { Component, OnInit ,ElementRef, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'muilt-rows-slider',
  templateUrl: './muilt-rows-slider.component.html',
  styleUrls: ['./muilt-rows-slider.component.scss']
})
export class MuiltRowsSliderComponent implements OnInit  {
  // mySwiper: Swiper;
  swiper: any;
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
   var mySwiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
    // prevButton: '.swiper-button-prev',
    // nextButton: '.swiper-button-next',
    slidesPerView: 3,
    spaceBetween:7,
   
    slidesPerColumn:2,
    slidesPerColumnFill: 'col',
    slidesPerGroup: 6,
    observer: true, 
    observeParents: true
    });
  }
}