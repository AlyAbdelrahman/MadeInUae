import { Component, OnInit } from '@angular/core';
import  {CompaniesService} from '../../services/Companies/companies.service';
import { LanguageService } from 'src/app/services/languages/language.service';
import {CompaniesInfo} from '../../models/CompaniesInfo';
import {CompanyiesResults} from '../../models/companies'
import {homeSponser} from '../../models/homeSponsers'
import {HomeSponserAsidesService} from '../../services/homeSponserAsides/home-sponser-asides.service';
import {SectorsService} from '../../services/sectors/sectors.service';
import {sector} from '../../models/sector';
import { ActivatedRoute } from '@angular/router';
import {CitiesService} from '../../services/cities/cities.service';
import {City} from '../../models/city'

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrls: ['./factories.component.scss']
})
export class FactoriesComponent implements OnInit {
  Aside:homeSponser[];
  AsideFound:boolean;
  SearchedCompaniesResults:any;
  pages:any;

  searchTxt:any;

  startPgNumber:number=0;
  endPgNumber:number=1;

  paggerNumbers:number[]=[];
  CurrentPagePaggerNumbers:number[];
  constructor(private CitiesService:CitiesService ,private route: ActivatedRoute,private sectors:SectorsService ,private AsideData:HomeSponserAsidesService,private GetCompanies:CompaniesService,public Currentlang: LanguageService) { }
  baseImageUrl:string ='http://mbesher-002-site4.dtempurl.com/sponsors/';
  baseCompanyImageUrl='http://mbesher-002-site4.dtempurl.com/Campany/';
 
   SearchedCompanies :CompaniesInfo  ={
      sectorId: 0,
      name: "",
      size:2,
      pageNumber: 0
    };

    loading:boolean=false;
    NoRes:boolean=false;
    sectorsData:sector[];
    citiesInfo:City[];
    selectedCities:any="";

    pageNumber:number=0;
    isSearching:boolean=false;
    searchingObj:any;
    LastPage:number;

  ngOnInit(): void {
   this.loading=true;
   this.pageNumber=0;
   const paramsSearchTxt = this.route.snapshot.paramMap.get('searchTxt');
   if(paramsSearchTxt == null){
   console.log('searched txt',paramsSearchTxt)
   this.GetCompanies.getCompanyies(this.SearchedCompanies).subscribe(info=>
   {
     this.loading=true,
     
     this.SearchedCompaniesResults=info,
     this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
     console.log('>>>>',this.LastPage)
    // this.setPages(this.SearchedCompaniesResults.totalItems),
    this.loading=false,
    console.log(this.SearchedCompaniesResults)
  })
   }
   else{
    this.pageNumber=0;
    const SearchedCompaniesTxt :any  ={
      name: paramsSearchTxt,
      size: 2,
      pageNumber: this.pageNumber
    };
    console.log('params searched obj',SearchedCompaniesTxt)
    this.GetCompanies.getCompanyies(SearchedCompaniesTxt).subscribe(info=>{this.SearchedCompaniesResults=info,
      this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
      this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);
  
    }
    this.CitiesService.getCitiesData().subscribe(cityInfo=>{this.citiesInfo=cityInfo,console.log('**',this.citiesInfo)});
   this.AsideData.getAsideData().subscribe(info=>{this.Aside=info,this.Aside==[]?this.AsideFound=true:this.AsideFound=false});
   this.sectors.getSectors().subscribe(Sector=>{this.sectorsData=Sector});
  }

  getLang(){
    return this.Currentlang.lang;
  }
  selectName()
  {
  alert('asa');
  }

nxt(){
  this.loading=true;
  if(!this.isSearching){
  this.SearchedCompanies.pageNumber+=1;
  this.GetCompanies.getCompanyies(this.SearchedCompanies).subscribe(info=>
    {
      this.SearchedCompaniesResults=info,
      this.loading=false
    })
  console.log(this.pageNumber)
  }
  else{
    this.SearchedCompanies.pageNumber+=1;
    this.searchingObj.pageNumber=this.SearchedCompanies;
    this.GetCompanies.getCompanyies(this.searchingObj).subscribe(info=>{this.SearchedCompaniesResults=info,this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);

  }
}


prev(){
  this.loading=true;
  if(!this.isSearching){
  this.SearchedCompanies.pageNumber-=1;
  this.GetCompanies.getCompanyies(this.SearchedCompanies).subscribe(info=>
    {
      this.SearchedCompaniesResults=info,
      this.loading=false
    })
  console.log(this.pageNumber)
  }
  else{
    this.SearchedCompanies.pageNumber-=1;
    this.searchingObj.pageNumber=this.SearchedCompanies;
    this.GetCompanies.getCompanyies(this.searchingObj).subscribe(info=>{this.SearchedCompaniesResults=info,this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);

  }
}
onSubmit() {
  this.loading=true;
  this.pageNumber=0;
  const SearchedCompaniesTxt :any  ={
    name: this.searchTxt,
    size: 2,
    pageNumber: this.pageNumber
  };
  this.GetCompanies.getCompanyies(SearchedCompaniesTxt).subscribe(info=>
    {this.SearchedCompaniesResults=info,
    this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
    this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);

}
onSectorSelect(e){
  this.isSearching=true;
  this.loading=true;
  this.pageNumber=0;
  
  const SearchedCompaniesTxt :any  ={
    sectorId: this.getSectorType( e.target.innerText),
    name: '',
    size: 2,
    pageNumber: 0
  };
  this.searchingObj=SearchedCompaniesTxt;
  this.GetCompanies.getCompanyies(this.searchingObj).subscribe(info=>
    {this.SearchedCompaniesResults=info,this.loading=false,
      this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
      this.loading=false},
    err=>console.log(err),
    ()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);
}

getSectorType(company ){
  const companySector:any= this.sectorsData?this.sectorsData.filter(el=>el.name==company||el.nameAr==company?el.id:0):'';
  const companySectorId:any=companySector[0].id;
 return companySectorId;
 }


 getPagedata(){
  const SearchedCompaniesTxt :any  ={
    name: '',
    size: 5,
    pageNumber: this.pageNumber
    };
  this.GetCompanies.getCompanyies(SearchedCompaniesTxt).subscribe(info=>{this.SearchedCompaniesResults=info,this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);

 }
}
