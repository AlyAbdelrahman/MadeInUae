import { Component, OnInit ,Input } from '@angular/core';
import {FooterService} from '../../services/footer/footer.service';
 import {footer} from '../../models/footer'
import { LanguageService } from 'src/app/services/languages/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() ShowFooterSlider: boolean;
  FooterInfo:footer;

  constructor(private footerContact:FooterService,public Currentlang: LanguageService) { }

  ngOnInit(): void {
    this.footerContact.getFooterData().subscribe(info=>this.FooterInfo=info);
  }
  getLang(){
    return this.Currentlang.lang;
  }
}
