import { Component, OnInit ,OnChanges} from '@angular/core';
import  {CompaniesService} from '../../services/Companies/companies.service';
import { LanguageService } from 'src/app/services/languages/language.service';
import {CompaniesInfo} from '../../models/CompaniesInfo';
import {CompanyiesResults} from '../../models/companies'
import {homeSponser} from '../../models/homeSponsers'
import {HomeSponserAsidesService} from '../../services/homeSponserAsides/home-sponser-asides.service';
import {SectorsService} from '../../services/sectors/sectors.service';
import {sector} from '../../models/sector';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';  
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

  baseImageUrl:string ='http://mbesher-002-site4.dtempurl.com/sponsors/';
  baseCompanyImageUrl='http://mbesher-002-site4.dtempurl.com/Campany/';

  constructor(private router: Router,private CitiesService:CitiesService ,private route: ActivatedRoute,private sectors:SectorsService ,private AsideData:HomeSponserAsidesService,private GetCompanies:CompaniesService,public Currentlang: LanguageService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

   
 
   SearchedCompanies :CompaniesInfo  ={
      sectorId: 0,
      name: "",
      size:2,
      pageNumber: 0
    };

    SearchedCompaniesWithCity :any  ={
      name: "",
      cityId:0,
      size:2,
      pageNumber: 0
    };
    SearchedCompaniesWithName :any  ={
      name: "",
      size:2,
      pageNumber: 0
    };


    paramsSectorID:any;
    parmsCityId:any;
    paramsSearchedText:any;


    loading:boolean=false;
    NoRes:boolean=false;
    sectorsData:sector[];
    citiesInfo:City[];
    selectedCities:any="";
    selectedCityId:number;
    pageNumber:number=0;
    isSearching:boolean=false;
    searchingObj:any;
    LastPage:number;

  ngOnInit(): void {
   this.loading=true;
   this.pageNumber=0;

    
    this.route.queryParams.subscribe(params => {
       this.paramsSectorID=params.SectorId,
       this.parmsCityId=params.CityId,
       this.paramsSearchedText=params.SearchedText
    })

    // else if (name)
    // else if (name & city)
    // paramsSearchTxt = this.route.snapshot.paramMap.get('searchTxt');
     
    if(this.paramsSectorID){
      this.SearchedCompanies.sectorId=this.paramsSectorID;
      this.GetCompanies.getCompanyies(this.SearchedCompanies).subscribe(info=>this.searchFunc(info))
    }
    else if(this.parmsCityId && this.paramsSearchedText){
      this.SearchedCompaniesWithCity.cityId=this.parmsCityId;
      this.SearchedCompaniesWithCity.name=this.paramsSearchedText;
      this.GetCompanies.getCompanyies(this.SearchedCompaniesWithCity).subscribe(info=>this.searchFunc(info))

    }
    else if (this.parmsCityId ){
      this.SearchedCompaniesWithCity.cityId=this.parmsCityId;
      this.GetCompanies.getCompanyies(this.SearchedCompaniesWithCity).subscribe(info=>this.searchFunc(info))
    }
    else if (this.paramsSearchedText ){
      this.SearchedCompaniesWithName.name=this.paramsSearchedText;
      this.GetCompanies.getCompanyies(this.SearchedCompaniesWithName).subscribe(info=>this.searchFunc(info))

    }
   else{
    this.pageNumber=0;
    this.paramsSectorID=1;
    const SearchedCompaniesTxt :any  ={
      sectorId:this.paramsSectorID,
      name: "",
      size: 2,
      pageNumber: this.pageNumber
    };
    console.log('params searched obj',SearchedCompaniesTxt)
      this.GetCompanies.getCompanyies(SearchedCompaniesTxt).subscribe(info=>{this.SearchedCompaniesResults=info,
      this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
      this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);
    }



   this.CitiesService.getCitiesData().subscribe(cityInfo=>this.citiesInfo=cityInfo);
   this.AsideData.getAsideData().subscribe(info=>{this.Aside=info,this.Aside==[]?this.AsideFound=true:this.AsideFound=false});
   this.sectors.getSectors().subscribe(Sector=>{this.sectorsData=Sector});
  }


  searchFunc(info){
    this.loading=true,
    this.SearchedCompaniesResults=info,
    console.log('all***',this.SearchedCompaniesResults),
    this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
    console.log('Last p>>>',this.LastPage)
    this.loading=false,
    console.log('searched res >>>>>',this.SearchedCompaniesResults)
  }


  getLang(){
    return this.Currentlang.lang;
  }
  selectCity(e)
  {
    this.selectedCityId=e;
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
  let SearchedCompaniesTxt :any;
  console.log('**Searched',this.searchTxt,this.selectedCityId)
  if(this.searchTxt && this.selectedCityId){
    this.router.navigate(['/Factories/Search'], { queryParams: { SearchedText: this.searchTxt , CityId:this.selectedCityId} });
  }
  else if (this.searchTxt){
    this.router.navigate(['/Factories/Search'], { queryParams: { SearchedText: this.searchTxt } });

  }
  else if (this.selectedCityId){
    this.router.navigate(['/Factories/Search'], { queryParams: {CityId:this.selectedCityId} });

  }
  else{
  
  }


}
//   if(!this.selectedCityId){
//     SearchedCompaniesTxt={
//       name: this.searchTxt,
//       size: 2,
//       pageNumber: this.pageNumber
//     };
//   }
//   else{
//      SearchedCompaniesTxt   ={
//       name: this.searchTxt,
//       cityId:this.selectedCityId,
//       size: 2,
//       pageNumber: this.pageNumber
//     };
//   }
//   this.GetCompanies.getCompanyies(SearchedCompaniesTxt).subscribe(info=>
//     {this.SearchedCompaniesResults=info,
//     this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
//     this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);

// }
// onSectorSelect(e){
//   this.isSearching=true;
//   this.loading=true;
//   this.pageNumber=0;
  
//   const SearchedCompaniesTxt :any  ={
//     sectorId: this.getSectorType( e.target.innerText),
//     name: '',
//     size: 2,
//     pageNumber: 0
//   };
//   this.searchingObj=SearchedCompaniesTxt;
//   this.GetCompanies.getCompanyies(this.searchingObj).subscribe(info=>
//     {this.SearchedCompaniesResults=info,this.loading=false,
//       this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
//       this.loading=false},
//     err=>console.log(err),
//     ()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);
// }

// getSectorType(company ){
//   const companySector:any= this.sectorsData?this.sectorsData.filter(el=>el.name==company||el.nameAr==company?el.id:0):'';
//   const companySectorId:any=companySector[0].id;
//  return companySectorId;
//  }


//  getPagedata(){
//   const SearchedCompaniesTxt :any  ={
//     name: '',
//     size: 5,
//     pageNumber: this.pageNumber
//     };
//   this.GetCompanies.getCompanyies(SearchedCompaniesTxt).subscribe(info=>{this.SearchedCompaniesResults=info,this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);

//  }
}
