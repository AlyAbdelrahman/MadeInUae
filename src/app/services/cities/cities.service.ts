import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {City} from '../../models/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  CitiesURL='http://mbesher-002-site4.dtempurl.com/api/user/Cities/GetAll';

  constructor(private http:HttpClient) { 
  }
      getCitiesData():Observable<City[]>{
        return this.http.get<City[]>(this.CitiesURL);
       }
}
