import { Component, OnInit } from '@angular/core';
import {BackendApiService} from '../../services/slider/backend-api.service'
import { Slide } from 'src/app/models/Slide';


@Component({
  selector: 'slides-carousel',
  templateUrl: './slides-carousel.component.html',
  styleUrls: ['./slides-carousel.component.scss']
})
export class SlidesCarouselComponent implements OnInit {
  Slides:Slide[];
  constructor(private SlidesData:BackendApiService) { }

  ngOnInit(): void {
   this.SlidesData.getSlides().subscribe(Slide=>console.log(Slide));
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
