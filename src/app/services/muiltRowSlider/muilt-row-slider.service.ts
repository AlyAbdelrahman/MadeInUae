import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {muiltRowSlider} from '../../models/muiltRowSlider';


@Injectable({
  providedIn: 'root'
})
export class MuiltRowSliderService {
  baseUrl :string= 'http://mbesher-002-site4.dtempurl.com/api/user/Sectors/GetAll?typeId=1';

  constructor(private http:HttpClient) {

   }
   getSlides():Observable<muiltRowSlider[]>{
    return this.http.get<muiltRowSlider[]>(this.baseUrl);
   }

 
}
