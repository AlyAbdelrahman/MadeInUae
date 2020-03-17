import { Injectable } from '@angular/core';

import { DomSanitizer, SafeStyle, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  CurrentLang:string ='ar';
  lang:string='ar';
  currentL:string;
  files = ["assets/css/style-rtl.css","assets/css/style-ltr.css"]
  constructor(public sanitizer: DomSanitizer, public translate: TranslateService  ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang(this.lang);
  }
  // getCurrentLanguage(){
  //   const cssLink = document.getElementById("mycss").getAttribute("href");
    
  //   if(cssLink.includes('style-rtl.css')){
  //     this.CurrentLang='ar';
  //     return this.CurrentLang
  //   }
  //   else{
  //     this.CurrentLang='en';
  //     return 'en'
  //   }
  // }

  // setCurrentLanuage(lang){
  //   this.CurrentLang=lang;


  // }



  switchLang() {
    
    var oldlink = document.getElementById("mycss"); // by default rtl
    var swiperlink =document.getElementById("swipermin");
    if(this.lang=='en'){
        this.translate.use('ar');
        oldlink.remove();
        swiperlink.remove();
        document.head.innerHTML = document.head.innerHTML + '<link id="swipermin" rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">'
        document.head.innerHTML = document.head.innerHTML + '<link href="assets/css/style-rtl.css"  type="text/css"  id="mycss"  rel="stylesheet" />'
        this.lang='ar'
      }
    else{
      this.translate.use('en');
      oldlink.remove();
      swiperlink.remove();
      document.head.innerHTML = document.head.innerHTML + '<link id="swipermin" rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">'
      document.head.innerHTML = document.head.innerHTML + '<link href="assets/css/style-ltr.css"  type="text/css"  id="mycss"  rel="stylesheet" />'

  
      this.lang='en'
    }

  }

}
