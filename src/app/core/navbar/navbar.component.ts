import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
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

