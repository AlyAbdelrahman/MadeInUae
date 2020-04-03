import { Component, OnInit } from '@angular/core';
import  {CompaniesService} from '../../services/Companies/companies.service';
import { LanguageService } from 'src/app/services/languages/language.service';
import {CompaniesInfo} from '../../models/CompaniesInfo';
import {CompanyiesResults} from '../../models/companies'
import {homeSponser} from '../../models/homeSponsers'
import {HomeSponserAsidesService} from '../../services/homeSponserAsides/home-sponser-asides.service';


@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {
  Aside:homeSponser[];

  constructor(private AsideData:HomeSponserAsidesService,private GetCompanies:CompaniesService,public Currentlang: LanguageService) { }
  baseImageUrl:string ='http://mbesher-002-site4.dtempurl.com/sponsors/';
  baseCompanyImageUrl='http://mbesher-002-site4.dtempurl.com/Campany/';
 
   SearchedCompanies :CompaniesInfo  ={
      sectorId: 0,
      name: "",
      size: 4,
      pageNumber: 0
    };

    SearchedCompaniesResults:any;
  ngOnInit(): void {
   this.GetCompanies.getCompanyies(this.SearchedCompanies).subscribe(info=>{this.SearchedCompaniesResults=info,console.log(this.SearchedCompaniesResults)});
   this.AsideData.getAsideData().subscribe(info=>this.Aside=info);

  }
  getLang(){
    return this.Currentlang.lang;
  }


}
