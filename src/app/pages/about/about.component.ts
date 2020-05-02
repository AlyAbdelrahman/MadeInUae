import { Component, OnInit } from '@angular/core';
import {aboutUs} from '../../models/aboutSection'
import { AboutUsService } from 'src/app/services/aboutUs/about-us.service';
import { LanguageService } from 'src/app/services/languages/language.service';
import {Title} from "@angular/platform-browser";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  AboutUs: aboutUs;

  constructor(public translate: TranslateService ,private titleService:Title,private AboutUsData : AboutUsService, public Currentlang: LanguageService) {
    this.titleService.setTitle(this.getLang()=='en'?'About Us':'عن البوابه');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get('aboutPortal').subscribe((res: string) => {
        titleService.setTitle(res);
      });
    });
   }

  ngOnInit(): void {
     this.AboutUsData.getAboutData().subscribe(info=>{this.AboutUs=info,console.log(this.AboutUs.description)});

  }
  getLang(){
    return this.Currentlang.lang;
  }

}
