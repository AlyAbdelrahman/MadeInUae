import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../services/languages/language.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'uae';

  constructor(public Language :LanguageService  ) {

  }
  ngOnInit() {

    // this.cssUrl= this.sanitizer.bypassSecurityTrustResourceUrl('uae/src/css/style-ltr.css')
  }

  switchLang(){
    this.Language.switchLang();
  }

}

