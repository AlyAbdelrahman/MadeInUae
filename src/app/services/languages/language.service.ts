import { Injectable } from '@angular/core';

import { DomSanitizer, SafeStyle, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  CurrentLang:string ='ar';
  lang:string='ar';
  currentL:string;
  files = ["assets/css/style-rtl.css","assets/css/style-ltr.css"]
  constructor(private route: ActivatedRoute,private router: Router,public sanitizer: DomSanitizer, public translate: TranslateService  ) {
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
  arabic(){
    var oldlink = document.getElementById("mycss"); // by default rtl
    var swiperlink =document.getElementById("swipermin");
    console.log('************8ar')
    this.translate.use('ar');
    oldlink.remove();
    swiperlink.remove();
    document.head.innerHTML = document.head.innerHTML + '<link id="swipermin" rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">'
    document.head.innerHTML = document.head.innerHTML + '<link href="assets/css/style-rtl.css"  type="text/css"  id="mycss"  rel="stylesheet" />'
    this.lang='ar'
    this.router.navigate([location.pathname], { queryParams: { lang: 'ar' } ,queryParamsHandling: 'merge'});
  }
  english(){
    var oldlink = document.getElementById("mycss"); // by default rtl
    var swiperlink =document.getElementById("swipermin");
    console.log('************en')
    this.translate.use('en');
    oldlink.remove();
    swiperlink.remove();
    document.head.innerHTML = document.head.innerHTML + '<link id="swipermin" rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">'
    document.head.innerHTML = document.head.innerHTML + '<link href="assets/css/style-ltr.css"  type="text/css"  id="mycss"  rel="stylesheet" />'
    this.lang='en'
    this.router.navigate([location.pathname], { queryParams: { lang: 'en' },queryParamsHandling: 'merge' });
  }
  adjustStartUrl(){
    this.router.navigate([location.pathname], { queryParams: { lang: 'en' },queryParamsHandling: 'merge' });

  }
  adjustLang(){
    console.log('**adj')
    this.route.queryParams.subscribe(params => {
      params.lang=='en'?this.english():this.arabic()
     }).unsubscribe()
  }
  switchLang() {
    
    // var oldlink = document.getElementById("mycss"); // by default rtl
    // var swiperlink =document.getElementById("swipermin");
    // console.log(this.route.snapshot.params.lang)
    this.route.queryParams.subscribe(params => {
      params.lang=='en'?this.arabic():this.english()
     }).unsubscribe()
    // console.log(this.route.snapshot.paramMap)
    // if(this.route.snapshot.paramMap.get('lang')=='en'){

    //   }
    // else if ( this.route.snapshot.paramMap.get('lang')=='ar'){
    //   console.log('***************en')
     
    // }
    // else{
    //   console.log('hamada')
    // }

  }

}
