import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {homeSponser} from '../../models/homeSponsers'

@Injectable({
  providedIn: 'root'
})
export class HomeSponserAsidesService {
  baseUrl :string= 'http://mbesher-002-site4.dtempurl.com/api/user/Sponsors/home/2';

  constructor(private http:HttpClient) {}
   getAsideData():Observable<homeSponser[]>{
    return this.http.get<homeSponser[]>(this.baseUrl);
   }
}
