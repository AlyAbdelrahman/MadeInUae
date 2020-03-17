import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Slide} from '../../models/Slide';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  baseUrl :string= 'http://mbesher-002-site4.dtempurl.com/api/user/Sectors/GetAll?typeId=1';
 
  constructor(private http:HttpClient) {}

  getSlides():Observable<Slide[]>{
   return this.http.get<Slide[]>(this.baseUrl);
  }
}
