import { Component, OnInit } from '@angular/core';
import {CatalogSliderService} from '../../services/catalogSlider/catalog-slider.service';
import {companyDetails} from '../../models/companyDetails';
import {LanguageService} from '../../services/languages/language.service';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Title} from "@angular/platform-browser";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({
  selector: 'app-factory-details',
  templateUrl: './factory-details.component.html',
  styleUrls: ['./factory-details.component.scss']
})
export class FactoryDetailsComponent implements OnInit {
  company:companyDetails;
  youTubeVideo: any;
  mapIfram:any;
  baseImageurl='http://mbesher-002-site4.dtempurl.com/Campany/';
  constructor(public translate: TranslateService,private titleService:Title,public sanitizer:DomSanitizer, private Company: CatalogSliderService,private route: ActivatedRoute, public Currentlang: LanguageService) { 
    this.titleService.setTitle(this.getLang()=='en'?'Industrial sectors':'الاقسام الصناعيه');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get('IndustrialSectors').subscribe((res: string) => {
        titleService.setTitle(res);
      });
    });
   }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.Company.getCatalogSlides(id).subscribe(info=>
      {
        this.company=info,console.log(this.company);
        this.youTubeVideo = this.sanitizer.bypassSecurityTrustHtml(
          this.company.youTubeVideoUrl
        );
        this.mapIfram = this.sanitizer.bypassSecurityTrustHtml(
          this.company.mapFrameUrl
        );
      });
  
    console.log(id);
  }
  getLang(){
    return this.Currentlang.lang;
   }

   photoURL() {
    return this.sanitizer.bypassSecurityTrustUrl(this.company.youTubeVideoUrl);
  }
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

}
