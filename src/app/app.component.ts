import { Component,OnInit } from '@angular/core';
import {LanguageService} from './services/languages/language.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  Selectedlang: any; 

  constructor(public lang:LanguageService , private router: Router, private route: ActivatedRoute  ) {
    this.route.queryParams.subscribe(params => {
      !this.lang.isSwitchedFromBtn?( params.lang=='en'?lang.adjustLang():''):console.log('***From');

    })
  }
    
  
  ngOnInit() {

  
  }


}

