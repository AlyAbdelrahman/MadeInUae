import { Component, OnInit } from '@angular/core';
import {aboutUs} from '../../models/aboutSection'
import { AboutUsService } from 'src/app/services/aboutUs/about-us.service';
import { LanguageService } from 'src/app/services/languages/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  AboutUs: aboutUs;

  constructor(private AboutUsData : AboutUsService, public Currentlang: LanguageService) { }

  ngOnInit(): void {
    this.AboutUsData.getAboutData().subscribe(info=>{this.AboutUs=info,console.log(this.AboutUs.description)});

  }
  getLang(){
    return this.Currentlang.lang;
   }

}
