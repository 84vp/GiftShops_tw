import { Component } from '@angular/core';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NewProdComponent } from './new-prod/new-prod.component';
import { MainContentBoxComponent } from './main-content-box/main-content-box.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  title = 'app works!';
}
