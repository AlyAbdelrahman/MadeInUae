import { Component, OnInit ,ElementRef, AfterViewInit } from '@angular/core';
import   Swiper from 'swiper';
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
   this.swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // nextButton: '.swiper-button-next',
  //   prevButton: '.swiper-button-prev',
    // slidesPerView: 3,
    // spaceBetween:20,
    // slidesPerColumn:2,
    // slidesPerColumnFill: 'col',
    // slidesPerGroup: 6,
    // observer: true, 
    // observeParents: true,
      slidesPerView: 1,
        slidesPerColumn:1,
        slidesPerGroup: 1,
        
        spaceBetween:1,
        
    breakpoints: {
      640: {
        slidesPerView:3,
        slidesPerColumn:1,
        slidesPerGroup: 1,
        
        spaceBetween:0,
      },
      // 1100: {
      //   slidesPerView: 2,
      // },
    
      810: {
        // slidesPerView: 2,
        // slidesPerColumn:1,
        // slidesPerGroup: 1,
        // spaceBetween:50,

        slidesPerView: 3,
        spaceBetween:20,
        slidesPerColumn:2,
        slidesPerColumnFill: 'col',
        slidesPerGroup: 6,
        observer: true, 
        observeParents: true,
      },
     
    }
    });
  }
}
