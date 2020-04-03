import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {sector} from '../../models/sector';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  baseUrl :string= 'http://mbesher-002-site4.dtempurl.com/api/user/Sectors/GetAll';
 
  constructor(private http:HttpClient) { }
  getSectors():Observable<sector[]>{
    return this.http.get<sector[]>(this.baseUrl);
   }
}
