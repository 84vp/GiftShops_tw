import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

   constructor() { }
    cards;
  ngOnInit() {
    this.cards = [
      {imgSrc: 'src/img/fuProd1.png', alt:'img_card', title:'Title', discription:'Product discription'},
      {imgSrc: 'src/img/fuProd2.png', alt:'img_card', title:'Title', discription:'Product discription'},
      {imgSrc: 'src/img/fuProd3.png', alt:'img_card', title:'Title', discription:'Product discription'},
      {imgSrc: 'src/img/fuProd4.png', alt:'img_card', title:'Title', discription:'Product discription'},
      {imgSrc: 'src/img/fuProd3.png', alt:'img_card', title:'Title', discription:'Product discription'},
      {imgSrc: 'src/img/fuProd4.png', alt:'img_card', title:'Title', discription:'Product discription'},
      {imgSrc: 'src/img/fuProd2.png', alt:'img_card', title:'Title', discription:'Product discription'},
      {imgSrc: 'src/img/fuProd1.png', alt:'img_card', title:'Title', discription:'Product discription'},      
    ];
  }

}
