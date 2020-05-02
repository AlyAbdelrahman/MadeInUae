import { Component, OnInit } from '@angular/core';
import {ContactUsService} from '../../services/contactUs/contact-us.service'
import {Router} from '@angular/router';
import {contactUs} from'../../models/contactUs'
import {Title} from "@angular/platform-browser";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/languages/language.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  client: any = {
    fullName: '',
    email: '',
    subject:'',
    body: '',
  };
  constructor(public Currentlang: LanguageService,public translate: TranslateService,private titleService:Title,private contactus:ContactUsService,private router: Router) {
    this.titleService.setTitle(this.getLang()=='en'?'Contact Us':'اتصل بنا');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      translate.get('ContactUs').subscribe((res: string) => {
        titleService.setTitle(res);
      });
    });
   }

  ngOnInit(): void {
  }
  getLang(){
    return this.Currentlang.lang;
   }

  onSubmit() {
    const message={
      fullName: this.client.fullName,
      email: this.client.email,
      subject: this.client.subject,
      body: this.client.body
    }
    this.contactus.addMessage(message).subscribe(data=> this.router.navigate(['/']));
  }


}
