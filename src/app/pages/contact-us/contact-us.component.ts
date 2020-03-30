import { Component, OnInit } from '@angular/core';
import {ContactUsService} from '../../services/contactUs/contact-us.service'
import {Router} from '@angular/router';
import {contactUs} from'../../models/contactUs'
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
  constructor(private contactus:ContactUsService,private router: Router) { }

  ngOnInit(): void {
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
