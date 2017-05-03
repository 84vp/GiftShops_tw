import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carusel-new-prod',
  templateUrl: './carusel-new-prod.component.html',
  styleUrls: ['./carusel-new-prod.component.css']
})
export class CaruselNewProdComponent implements OnInit {

  constructor() { }
    cards;
  ngOnInit() {
    this.cards = [
      {imgSrc: 'src/img/slider_img1.png', alt:'img_card'},
      {imgSrc: 'src/img/slider_img2.png', alt:'img_card'},
      {imgSrc: 'src/img/slider_img3.png', alt:'img_card'},
      {imgSrc: 'src/img/slider_img1.png', alt:'img_card'},
      {imgSrc: 'src/img/slider_img2.png', alt:'img_card'},
      {imgSrc: 'src/img/slider_img3.png', alt:'img_card'},
      {imgSrc: 'src/img/slider_img1.png', alt:'img_card'},
      {imgSrc: 'src/img/slider_img2.png', alt:'img_card'},
      {imgSrc: 'src/img/slider_img3.png', alt:'img_card'},
    ];
  }

}
