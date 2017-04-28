import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor() { }
    links;
  ngOnInit() {
    this.links = [
      {text: 'Art', src: '#'},
      {text: 'Home & Living', src: '#'},
      {text: 'Jewelry', src: '#'},
      {text: 'Women', src: '#'},
      {text: 'Men', src: '#'},
      {text: 'Kids', src: '#'},
      {text: 'Vintage', src: '#'},
      {text: 'Wedings', src: '#'},
      {text: 'More', src: '#'},
    ];
  }

}
