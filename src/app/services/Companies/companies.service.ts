import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {CompaniesInfo} from '../../models/CompaniesInfo';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
   };

  CompaniesURL='http://mbesher-002-site4.dtempurl.com/api/user/Companies';

  constructor(private http:HttpClient) { }
    getCompanyies(company:CompaniesInfo):Observable<CompaniesInfo>{
      return this.http.post<CompaniesInfo>(this.CompaniesURL, company,this.httpOptions);
    }
}
