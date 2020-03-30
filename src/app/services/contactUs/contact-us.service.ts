import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {companyDetails} from '../../models/companyDetails';
import { Observable } from 'rxjs';
import {contactUs} from '../../models/contactUs'


@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  
  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json',
   })
  };
  
  contactusURL='http://mbesher-002-site4.dtempurl.com/api/ContactUs';


  constructor(private http:HttpClient) { }

  addMessage(message:contactUs):Observable<contactUs>{
    return this.http.post<contactUs>(this.contactusURL, message,this.httpOptions);
  }
}
