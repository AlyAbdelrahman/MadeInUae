import { Component,OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'uae';
  cssUrl: SafeResourceUrl ;
  lang:string='ar';
  currentL:string;
  
  constructor(public sanitizer: DomSanitizer, public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang(this.lang);
  }
  ngOnInit() {

    this.cssUrl= this.sanitizer.bypassSecurityTrustResourceUrl('uae/src/css/style-ltr.css')
  }

  switchLang() {
    
      if(this.lang=='en'){
        this.translate.use('ar');
        this.lang='ar'
      }
      else{
        this.translate.use('en');
        this.lang='en'
      }

  }
}

