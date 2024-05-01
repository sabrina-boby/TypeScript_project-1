import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LocationStripComponent } from './location-strip/location-strip.component';
import { ImgGellaryComponent } from './img-gellary/img-gellary.component';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { CopyrightSecModule } from 'src/app/shared/components/copyright-sec/copyright-sec.module';
import { ProductCardModule } from 'src/app/shared/components/product-card/product-card.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CardComponent,
   
    HeroSectionComponent,
    LocationStripComponent,
    ImgGellaryComponent,
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FooterModule,
    CopyrightSecModule,
    ProductCardModule,
  ]
})
export class HomeModule { }
