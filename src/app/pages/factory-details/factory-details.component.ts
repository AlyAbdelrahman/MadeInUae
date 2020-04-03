import { Component, OnInit } from '@angular/core';
import {CatalogSliderService} from '../../services/catalogSlider/catalog-slider.service';
import {companyDetails} from '../../models/companyDetails';
import {LanguageService} from '../../services/languages/language.service';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
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
  constructor(public sanitizer:DomSanitizer, private Company: CatalogSliderService,private route: ActivatedRoute, public Currentlang: LanguageService) { }

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
