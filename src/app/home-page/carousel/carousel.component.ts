import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

const slideData = [
  {
    id:1,
    img:'./assets/media/slide-1.png',
    title:'Traveling Books'
  },
  {
    id:2,
    img:'./assets/media/slide-2.png',
    title:'History Books'
  },
  {
    id:3,
    img:'./assets/media/slide-3.png',
    title:'Sherlock Homes Books'
  }
];

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
  slides: object[];
  activeSlide:number;
  constructor() {
    this.slides = slideData;
    this.activeSlide = 1;
  }
  ngOnInit() {
    this.rotateSlides();
  }
  rotateSlides() {
    interval(10000).subscribe((val) => {
      if(this.activeSlide===3) {
        this.activeSlide=0;
      }
      this.activeSlide++; 
    });
  }
}
