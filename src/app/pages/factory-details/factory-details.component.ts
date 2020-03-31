import { Component, OnInit } from '@angular/core';
import {CatalogSliderService} from '../../services/catalogSlider/catalog-slider.service';
import {companyDetails} from '../../models/companyDetails';
import {LanguageService} from '../../services/languages/language.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factory-details',
  templateUrl: './factory-details.component.html',
  styleUrls: ['./factory-details.component.scss']
})
export class FactoryDetailsComponent implements OnInit {
  company:companyDetails;
  constructor(private Company: CatalogSliderService,private route: ActivatedRoute, public Currentlang: LanguageService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.Company.getCatalogSlides(id).subscribe(info=>{this.company=info,console.log(this.company)});
  
    console.log(id);
  }
  getLang(){
    return this.Currentlang.lang;
   }
}
