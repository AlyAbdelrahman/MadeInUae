import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {companyDetails} from '../../models/companyDetails';
import { Observable } from 'rxjs';
import {newCompany} from '../../models/newCompany'

@Injectable({
  providedIn: 'root'
})
export class AddingCompanyService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
   };
   newCompanyURL='http://mbesher-002-site4.dtempurl.com/api/SendToEmail';
   
  constructor(private http:HttpClient) {
  }
      addCompany(company:newCompany):Observable<newCompany>{
      return this.http.post<newCompany>(this.newCompanyURL, company,this.httpOptions);
   }
}
