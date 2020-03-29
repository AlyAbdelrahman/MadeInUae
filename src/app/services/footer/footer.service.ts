import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {footer} from '../../models/footer';


@Injectable({
  providedIn: 'root'
})
export class FooterService {
  baseUrl :string= 'http://mbesher-002-site4.dtempurl.com/api/user/Setting/contact';


  constructor(private http:HttpClient) {}
  getFooterData():Observable<footer>{
   return this.http.get<footer>(this.baseUrl);
  }
   
}
