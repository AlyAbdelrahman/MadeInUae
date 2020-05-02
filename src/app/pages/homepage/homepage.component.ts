import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/languages/language.service';
import {HomeSponserAsidesService} from '../../services/homeSponserAsides/home-sponser-asides.service';
import {AboutUsService} from '../../services/aboutUs/about-us.service'
import {homeSponser} from '../../models/homeSponsers'
import {aboutUs} from '../../models/aboutSection'
import {Title} from "@angular/platform-browser";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  Aside:homeSponser[];
  AsideFound:boolean;
  AboutUs:aboutUs;
  baseImageUrl:string ='http://mbesher-002-site4.dtempurl.com/sponsors/';
  baseDaleImagelUrl:String='http://mbesher-002-site4.dtempurl.com/Dalel/';

  constructor(public translate: TranslateService,private titleService:Title,private AsideData:HomeSponserAsidesService ,private AboutUsData : AboutUsService, public Currentlang: LanguageService) {
    this.titleService.setTitle(this.getLang()=='en'?'Home':'الصفحه الرئيسيه');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get('homePage').subscribe((res: string) => {
        titleService.setTitle(res);
      });
    });
   }

  ngOnInit(): void {
    this.AsideData.getAsideData().subscribe(info=>{this.Aside=info,console.log('****Asi',info),this.Aside==[]?this.AsideFound=true:this.AsideFound=false});
    this.AboutUsData.getAboutData().subscribe(info=>this.AboutUs=info);


  }
  getLang(){
    return this.Currentlang.lang;
   }

}
