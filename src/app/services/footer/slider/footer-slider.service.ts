import { Injectable } from '@angular/core';
import {footerSlider} from '../../../models/footerSlider';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterSliderService {
  baseSliderUrl:string ='http://mbesher-002-site4.dtempurl.com/api/user/CoSponsors/GetAll/6';

  constructor(private http:HttpClient) { }
  getFooterSliderData():Observable<footerSlider[]>{
    return this.http.get<footerSlider[]>(this.baseSliderUrl);
   }
}
