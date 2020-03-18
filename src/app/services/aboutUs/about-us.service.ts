import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {aboutUs} from '../../models/aboutSection';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  baseUrl :string= 'http://mbesher-002-site4.dtempurl.com/api/user/Setting/about';

  constructor(private http:HttpClient) {}
  getAboutData():Observable<aboutUs>{
   return this.http.get<aboutUs>(this.baseUrl);
  }
}
