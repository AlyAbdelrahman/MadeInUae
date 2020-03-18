import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/languages/language.service';
import {HomeSponserAsidesService} from '../../services/homeSponserAsides/home-sponser-asides.service';
import {AboutUsService} from '../../services/aboutUs/about-us.service'
import {homeSponser} from '../../models/homeSponsers'
import {aboutUs} from '../../models/aboutSection'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  Aside:homeSponser[];
  AboutUs:aboutUs;
  baseImageUrl:string ='http://mbesher-002-site4.dtempurl.com/Dalel/';
  

  constructor(private AsideData:HomeSponserAsidesService ,private AboutUsData : AboutUsService, public Currentlang: LanguageService) { }

  ngOnInit(): void {
    this.AsideData.getAsideData().subscribe(info=>this.Aside=info);
    this.AboutUsData.getAboutData().subscribe(info=>this.AboutUs=info);


  }
  getLang(){
    return this.Currentlang.lang;
   }

}
