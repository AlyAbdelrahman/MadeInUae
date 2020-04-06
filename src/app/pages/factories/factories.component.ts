import { Component, OnInit } from '@angular/core';
import  {CompaniesService} from '../../services/Companies/companies.service';
import { LanguageService } from 'src/app/services/languages/language.service';
import {CompaniesInfo} from '../../models/CompaniesInfo';
import {CompanyiesResults} from '../../models/companies'
import {homeSponser} from '../../models/homeSponsers'
import {HomeSponserAsidesService} from '../../services/homeSponserAsides/home-sponser-asides.service';
import {SectorsService} from '../../services/sectors/sectors.service';
import {sector} from '../../models/sector';


@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {
  Aside:homeSponser[];
  SearchedCompaniesResults:any;
  pages:any;

  searchTxt:any;

  startPgNumber:number=0;
  endPgNumber:number=1;

  paggerNumbers:number[]=[];
  CurrentPagePaggerNumbers:number[];
  constructor(private sectors:SectorsService ,private AsideData:HomeSponserAsidesService,private GetCompanies:CompaniesService,public Currentlang: LanguageService) { }
  baseImageUrl:string ='http://mbesher-002-site4.dtempurl.com/sponsors/';
  baseCompanyImageUrl='http://mbesher-002-site4.dtempurl.com/Campany/';
 
   SearchedCompanies :CompaniesInfo  ={
      sectorId: 0,
      name: "",
      size:1,
      pageNumber: 0
    };

    loading:boolean=false;
    NoRes:boolean=false;
    sectorsData:sector[];


  ngOnInit(): void {
   this.loading=true;
   this.GetCompanies.getCompanyies(this.SearchedCompanies).subscribe(info=>
   {
     this.loading=true,
     
     this.SearchedCompaniesResults=info,
    this.setPages(this.SearchedCompaniesResults.totalItems),
    this.loading=false,
    console.log(this.SearchedCompaniesResults)
  })

   this.AsideData.getAsideData().subscribe(info=>this.Aside=info);
   this.sectors.getSectors().subscribe(Sector=>{this.sectorsData=Sector});

  }

  getLang(){
    return this.Currentlang.lang;
  }

  setPages(itemsNumber){
    this.pages =Math.ceil(itemsNumber/this.SearchedCompanies.size);
    console.log(this.pages)
      for(let s=0;s<=this.pages;s++){
       this.paggerNumbers.push(s)
      }
    console.log('pages number',this.paggerNumbers)
  }

  

fn(){
  this.startPgNumber+=2
  this.endPgNumber=this.startPgNumber+1;
  console.log(this.startPgNumber,this.endPgNumber);
  this.CurrentPagePaggerNumbers=this.paggerNumbers.slice(this.startPgNumber,this.endPgNumber)
  console.log('next paggination numbers ',this.CurrentPagePaggerNumbers)
  // return [4,5,6]
}

onSubmit() {
  this.loading=true;

  const SearchedCompaniesTxt :any  ={
    name: this.searchTxt,
    size: 12,
    pageNumber: 0
  };
  this.GetCompanies.getCompanyies(SearchedCompaniesTxt).subscribe(info=>{this.SearchedCompaniesResults=info,this.setPages(this.SearchedCompaniesResults.totalItems),this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);

}
onSectorSelect(e){
  this.loading=true;

  const SearchedCompaniesTxt :any  ={
    sectorId: this.getSectorType( e.target.innerText),
    name: '',
    size: 12,
    pageNumber: 0
  };
  this.GetCompanies.getCompanyies(SearchedCompaniesTxt).subscribe(info=>{this.SearchedCompaniesResults=info,this.setPages(this.SearchedCompaniesResults.totalItems),this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);


}

getSectorType(company ){
  const companySector:any= this.sectorsData?this.sectorsData.filter(el=>el.name==company||el.nameAr==company?el.id:0):'';
  const companySectorId:any=companySector[0].id;
 return companySectorId;
 }


 getPagedata(pageNumber){
  const SearchedCompaniesTxt :any  ={
  
    name: '',
    size: 2,
    pageNumber: pageNumber
  };
  this.GetCompanies.getCompanyies(SearchedCompaniesTxt).subscribe(info=>{this.SearchedCompaniesResults=info,this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);

 }
}
