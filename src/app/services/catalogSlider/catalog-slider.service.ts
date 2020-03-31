import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {companyDetails} from '../../models/companyDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogSliderService {

  baseUrl :string= 'http://mbesher-002-site4.dtempurl.com/api/user/Companies';

  constructor(private http:HttpClient) { }

  getCatalogSlides(id:number):Observable<companyDetails>{
    return this.http.get<companyDetails>(this.baseUrl+'/'+id);
   }
}
