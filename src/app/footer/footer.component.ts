import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
    links;
    linksAbouts;
    selingLinks;
    soclinks
  ngOnInit() {
    this.links = [
      {title:'why shop with us?', src:'#'},
      {title:'how it works', src:'#'},
      {title:'delivery', src:'#'},
      {title:'wheres my order', src:'#'},
      {title:'contact & help', src:'#'},
      {title:'wedding list', src:'#'},
      {title:'wish lists', src:'#'},
      {title:'gift vouchers', src:'#'},
    ],
    this.linksAbouts = [
      {title:'why shop with us?', src:'#'},
      {title:'how it works', src:'#'},
      {title:'delivery', src:'#'},
      {title:'wheres my order', src:'#'},
      {title:'contact & help', src:'#'},
      {title:'wedding list', src:'#'},
      {title:'wish lists', src:'#'},
      {title:'gift vouchers', src:'#'},
    ],
    this.selingLinks = [
      {title:'why join?', src:'#'},
      {title:'faqs', src:'#'},
      {title:'apply to sell with us', src:'#'},
      {title:'affiliates', src:'#'},
    ],
    this.soclinks = [
      {src:'#', imgsrc:'src/img/icons/Rss.png'},
      {src:'#', imgsrc:'src/img/icons/Facebook.png'},
      {src:'#', imgsrc:'src/img/icons/twitter.png'},
      {src:'#', imgsrc:'src/img/icons/Facebook.png'},
      {src:'#', imgsrc:'src/img/icons/Google.png'},
    ]
  }

}
