import { Component,OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

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
  files = ["assets/css/style-rtl.css","assets/css/style-ltr.css"]
  constructor(public sanitizer: DomSanitizer, public translate: TranslateService  ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang(this.lang);
  }
  ngOnInit() {

    // this.cssUrl= this.sanitizer.bypassSecurityTrustResourceUrl('uae/src/css/style-ltr.css')
  }

  switchLang() {
    
    var oldlink = document.getElementById("mycss"); // by default rtl
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("id","mycss");
      if(this.lang=='en'){
        this.translate.use('ar');
        newlink.setAttribute("href", this.files[0]); 
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    
        this.lang='ar'
      }
      else{
        this.translate.use('en');
        newlink.setAttribute("href", this.files[1]); 
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    
        this.lang='en'
      }

  }
}

