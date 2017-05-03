import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NewProdComponent } from './new-prod/new-prod.component';
import { MainContentBoxComponent } from './main-content-box/main-content-box.component';
import { CaruselNewProdComponent } from './carusel-new-prod/carusel-new-prod.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainNavComponent,
    NewProdComponent,
    MainContentBoxComponent,
    CaruselNewProdComponent,
    FeaturedProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    MainNavComponent,
    TopNavComponent,
    NewProdComponent,
    MainContentBoxComponent,
    CaruselNewProdComponent,
    FeaturedProductsComponent,
    FooterComponent
    ]
})
export class AppModule { }
