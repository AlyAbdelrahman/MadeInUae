import { Component, OnInit } from '@angular/core';
import {BackendApiService} from '../../services/slider/backend-api.service';
import {LanguageService} from '../../services/languages/language.service';
import {Router} from '@angular/router';
import { Slide } from 'src/app/models/Slide';


@Component({
  selector: 'slides-carousel',
  templateUrl: './slides-carousel.component.html',
  styleUrls: ['./slides-carousel.component.scss']
})
export class SlidesCarouselComponent implements OnInit {
  Slides:Slide[];
  SearchTxt:any;
  baseUrl:string ='http://mbesher-002-site4.dtempurl.com/sliders/';
  constructor(private SlidesData:BackendApiService ,public Currentlang: LanguageService,private router: Router) {
    // console.log(Currentlang.getCurrentLanguage())

  }
  
  ngOnInit(): void {
    this.SlidesData.getSlides().subscribe(Slide=>this.Slides=Slide);
   
  }
  getLang(){
   return this.Currentlang.lang;
  }


  onSubmit(){
    this.router.navigate(['/Factories/'+this.SearchTxt]);
  }
}
