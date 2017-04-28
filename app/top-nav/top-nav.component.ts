import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
links;
adminLinks;
  constructor() { }

  ngOnInit() {
    this.links = [
      {text: 'Sell', src: '#'},
      {text: 'Registry', src: '#'},
      {text: 'Community', src: '#'},
      {text: 'Blogs', src: '#'},
      {text: 'Mobile', src: '#'},
      {text: 'Gift Csrds', src: '#'},
    ];
    this.adminLinks = [
      {text: 'Register', src: '#'},
      {text: 'Sing in', src: '#'},
      {text: 'Whishlost', src: '#'},
      {text: 'Chart', src: '#'},
    ]
  }

}
