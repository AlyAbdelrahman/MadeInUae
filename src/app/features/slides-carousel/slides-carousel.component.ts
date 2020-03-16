import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slides-carousel',
  templateUrl: './slides-carousel.component.html',
  styleUrls: ['./slides-carousel.component.scss']
})
export class SlidesCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
