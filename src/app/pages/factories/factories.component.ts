import { Component, OnInit ,OnChanges} from '@angular/core';
import  {CompaniesService} from '../../services/Companies/companies.service';
import { LanguageService } from 'src/app/services/languages/language.service';
import {CompaniesInfo} from '../../models/CompaniesInfo';
import {CompanyiesResults} from '../../models/companies'
import {homeSponser} from '../../models/homeSponsers'
import {HomeSponserAsidesService} from '../../services/homeSponserAsides/home-sponser-asides.service';
import {SectorsService} from '../../services/sectors/sectors.service';
import {sector} from '../../models/sector';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';  
import {CitiesService} from '../../services/cities/cities.service';
import {City} from '../../models/city';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import {Title} from "@angular/platform-browser";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

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


  fbIcon = faFacebookSquare;

  constructor(public translate: TranslateService ,private titleService:Title,private router: Router,private CitiesService:CitiesService ,private route: ActivatedRoute,private sectors:SectorsService ,private AsideData:HomeSponserAsidesService,private GetCompanies:CompaniesService,public Currentlang: LanguageService) {
   
  this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.titleService.setTitle(this.getLang()=='en'?'Industrial sectors':'الاقسام الصناعيه');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get('IndustrialSectors').subscribe((res: string) => {
        titleService.setTitle(res);
      });
    });
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
    shareMediaId:number;
    language:string;
    reload :boolean=true;

  
  ngOnInit(): void {
   this.loading=true;
   this.pageNumber=0;
  
    this.route.queryParams.subscribe(params => {
       this.paramsSectorID=params.SectorId,
       this.parmsCityId=params.CityId,
       this.paramsSearchedText=params.SearchedText,
       this.language=params.lang?params.lang:'ar'

    })

    // else if (name)
    // else if (name & city)
    // paramsSearchTxt = this.route.snapshot.paramMap.get('searchTxt');
     
    if(this.paramsSectorID && !this.parmsCityId && !this.paramsSearchedText){
      this.SearchedCompanies.sectorId=this.paramsSectorID;
      this.searchingObj=this.SearchedCompanies;
      this.AsideData.getSectorAside(this.paramsSectorID).subscribe(info=>{this.Aside=info,console.log('***Aside',info),this.Aside==[]?this.AsideFound=true:this.AsideFound=false});
      this.GetCompanies.getCompanyies(this.SearchedCompanies).subscribe(info=>{
        this.SearchedCompaniesResults=info,
        console.log(this.SearchedCompaniesResults)
        this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
        this.loading=false},
        err=>console.log(err),
        ()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);
  }

     else if(this.parmsCityId && this.paramsSearchedText){
      this.SearchedCompaniesWithCity.cityId=this.parmsCityId;
      this.SearchedCompaniesWithCity.name=this.paramsSearchedText;
      this.SearchedCompaniesWithCity.sectorId=this.paramsSectorID;
      this.searchingObj=this.SearchedCompaniesWithCity;

      this.GetCompanies.getCompanyies(this.SearchedCompaniesWithCity).subscribe(info=>{
        this.SearchedCompaniesResults=info,
        console.log(this.SearchedCompaniesResults)
        this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
        this.loading=false},
        err=>console.log(err),
        ()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);
  }

    else if (this.parmsCityId ){
      this.route.queryParams.subscribe(params => {
        this.paramsSectorID=params.SectorId}).unsubscribe();
      this.SearchedCompaniesWithCity.cityId=this.parmsCityId;
      this.SearchedCompaniesWithCity.sectorId=this.paramsSectorID;
      this.searchingObj=this.SearchedCompaniesWithCity;
      
      console.log('searched iteeem',this.SearchedCompaniesWithCity)
      this.GetCompanies.getCompanyies(this.SearchedCompaniesWithCity).subscribe(info=>{
        this.SearchedCompaniesResults=info,
        console.log('**here',this.SearchedCompaniesResults)
        this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
        this.loading=false},
        err=>console.log(err),
        ()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);
  
    }
    
    else if (this.paramsSearchedText ){
      this.SearchedCompaniesWithName.name=this.paramsSearchedText;
      this.SearchedCompaniesWithName.sectorId=this.paramsSectorID;
      this.searchingObj=this.SearchedCompaniesWithName;

      this.GetCompanies.getCompanyies(this.SearchedCompaniesWithName).subscribe(info=>
        {
          this.SearchedCompaniesResults=info,
          console.log(this.SearchedCompaniesResults)
          this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
          this.loading=false},
          err=>console.log(err),
          ()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);
    }

   else{
    this.pageNumber=0;
    // this.route.queryParams.subscribe(params => {
    //   this.paramsSectorID=params.SectorId}).unsubscribe();
    this.paramsSectorID=1;
    this.AsideData.getSectorAside(0).subscribe(info=>{this.Aside=info,console.log('**AS',this.Aside),this.Aside==[]?this.AsideFound=true:this.AsideFound=false});

    const SearchedCompaniesTxt :any  ={
      sectorId:this.paramsSectorID,
      name: "",
      size: 2,
      pageNumber: this.pageNumber
    };
    this.searchingObj=SearchedCompaniesTxt;

    console.log('params searched obj',SearchedCompaniesTxt)
      this.GetCompanies.getCompanyies(SearchedCompaniesTxt).subscribe(info=>{this.SearchedCompaniesResults=info,
      this.LastPage= Math.ceil(this.SearchedCompaniesResults.totalItems/2),
      this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);
    }


    
   this.CitiesService.getCitiesData().subscribe(cityInfo=>this.citiesInfo=cityInfo);
  //  this.AsideData.getAsideData().subscribe(info=>{this.Aside=info,this.Aside==[]?this.AsideFound=true:this.AsideFound=false});
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
    
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.reload=false
    this.selectedCityId=e;
  }

nxt(){
  this.loading=true;
  if(!this.isSearching){
  this.searchingObj.pageNumber+=1;
  this.GetCompanies.getCompanyies(this.searchingObj).subscribe(info=>
    {
      this.SearchedCompaniesResults=info,
      this.loading=false
    })
  console.log(this.pageNumber)
  }
  else{
    this.searchingObj.pageNumber+=1;
    // this.searchingObj.pageNumber=this.SearchedCompanies;
    this.GetCompanies.getCompanyies(this.searchingObj).subscribe(info=>{this.SearchedCompaniesResults=info,this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);

  }
}
getArrowDir(){
   return this.getLang()=='ar'?'rotate(0)':'rotate(180deg)'
}

prev(){
  this.loading=true;
  if(!this.isSearching){
  this.searchingObj.pageNumber-=1;
  this.GetCompanies.getCompanyies(this.searchingObj).subscribe(info=>
    {
      this.SearchedCompaniesResults=info,
      this.loading=false
    })
  console.log(this.pageNumber)
  }
  else{
    this.searchingObj.pageNumber-=1;
    console.log('hereee',this.searchingObj)
    // this.searchingObj.pageNumber=this.SearchedCompanies;
    this.GetCompanies.getCompanyies(this.searchingObj).subscribe(info=>{this.SearchedCompaniesResults=info,this.loading=false},err=>console.log(err),()=>this.SearchedCompaniesResults.items.length>0?this.NoRes=false:this.NoRes=true);

  }
}
onSubmit() {
  this.loading=true;
  this.pageNumber=0;
  let SearchedCompaniesTxt :any;
  console.log('**Searched',this.searchTxt,this.selectedCityId)
  if(this.searchTxt && this.selectedCityId){
    this.router.navigate(['/Factories/Search'], { queryParams: { SearchedText: this.searchTxt , CityId:this.selectedCityId , SectorId:this.paramsSectorID ,lang:this.language} , queryParamsHandling: 'preserve'});
  }
  else if (this.searchTxt){
    this.router.navigate(['/Factories/Search'], { queryParams: { SearchedText: this.searchTxt , SectorId:this.paramsSectorID ,lang:this.language} , queryParamsHandling: 'preserve'});

  }
  else if (this.selectedCityId){
    this.router.navigate(['/Factories/Search'], { queryParams: {CityId:this.selectedCityId , SectorId:this.paramsSectorID,lang:this.language}, queryParamsHandling: 'preserve'});

  }
  else{
  
  }


}

shareId(id){
  this.shareMediaId=id;
}
}
