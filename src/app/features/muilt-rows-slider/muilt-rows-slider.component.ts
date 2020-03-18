import { Component, OnInit ,ElementRef, AfterViewInit } from '@angular/core';
import   Swiper from 'swiper';
import {MuiltRowSliderService} from '../../services/muiltRowSlider/muilt-row-slider.service';
import {muiltRowSlider} from '../../models/muiltRowSlider';
import {LanguageService} from '../../services/languages/language.service'
@Component({
  selector: 'muilt-rows-slider',
  templateUrl: './muilt-rows-slider.component.html',
  styleUrls: ['./muilt-rows-slider.component.scss']
})
export class MuiltRowsSliderComponent implements OnInit  {
  // mySwiper: Swiper;
  Slides:muiltRowSlider[];
  swiper: any;
  baseUrl:string='http://mbesher-002-site4.dtempurl.com/sector/';
  constructor(private elementRef: ElementRef , public SectorsData:MuiltRowSliderService,public Currentlang: LanguageService) { }

  ngOnInit(): void {
    this.SectorsData.getSlides().subscribe(Slide=>this.Slides=Slide);

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
      observer: true, 
      observeParents: true,
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

  getLang(){
    return this.Currentlang.lang;
   }
}
