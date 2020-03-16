import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
 
  constructor( ) {
 
  }
  ngOnInit() {

    // this.cssUrl= this.sanitizer.bypassSecurityTrustResourceUrl('uae/src/css/style-ltr.css')
  }

  
}

