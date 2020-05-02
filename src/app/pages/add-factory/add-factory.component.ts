import { Component, OnInit } from '@angular/core';
import {SectorsService} from '../../services/sectors/sectors.service';
import {sector} from '../../models/sector';
import {LanguageService} from '../../services/languages/language.service'
import {AddingCompanyService} from '../../services/addCompany/adding-company.service'
import { newCompany } from 'src/app/models/newCompany';
import {Router} from '@angular/router';
import {Title} from "@angular/platform-browser";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';



@Component({
  selector: 'app-add-factory',
  templateUrl: './add-factory.component.html',
  styleUrls: ['./add-factory.component.scss']
})
export class AddFactoryComponent implements OnInit {
company:any={
    companyName: "",
    companyNameAr: "",
    aboutCompany: "",
    aboutCompanyAr: "",
    sectorType: 0,
    sectorName: "",
    address: "",
    addressAr: "",
    tel: "",
    fax: "",
    companyWebSite: "",
    companyMail: "",
    contactPersonName: "",
    jobName: "",
    jobNameAr: "",
    contactPersonNameAr: "",
    mobile: "00000"
}

sectorsData:sector[];


  constructor(public translate: TranslateService ,private titleService:Title,private sectors:SectorsService ,private router: Router,public Currentlang: LanguageService,private newcompany : AddingCompanyService ) { 
    this.titleService.setTitle(this.getLang()=='en'?'Add Factory':'اضف مصنعك');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get('AddFactory').subscribe((res: string) => {
        titleService.setTitle(res);
      });
    });
  }

  ngOnInit(): void {
    this.sectors.getSectors().subscribe(Sector=>this.sectorsData=Sector);
  }
  getLang(){
    return this.Currentlang.lang;
   }
   getSectorType(company ){
    const companySector:any= this.sectorsData?this.sectorsData.filter(el=>el.name==company||el.nameAr==company?el.id:0):'';
    const companySectorId:any=companySector[0].id;
   return companySectorId;
   }
   
   onSubmit() {
    const CompanyDetails :newCompany={
    companyName:this.company.companyName,
    companyNameAr: this.company.companyNameAr,
    aboutCompany: this.company.aboutCompany,
    aboutCompanyAr: this.company.aboutCompanyAr,
    sectorType:this.getSectorType(this.company.sectorName),
    sectorName: this.company.sectorName,
    address: this.company.address,
    addressAr: this.company.addressAr,
    tel: this.company.tel,
    fax: this.company.fax,
    companyWebSite: this.company.companyWebSite,
    companyMail: this.company.companyMail,
    contactPersonName: this.company.contactPersonName,
    jobName: this.company.jobName,
    jobNameAr: this.company.jobNameAr,
    contactPersonNameAr: this.company.contactPersonNameAr,
    mobile: this.company.mobile
    }
    // console.log(CompanyDetails)
    // 
  this.newcompany.addCompany(CompanyDetails).subscribe(data=> this.router.navigate(['/']));
  }
}
