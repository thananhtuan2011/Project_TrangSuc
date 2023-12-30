import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ModalComponent } from '../../components/common/modal/modal.component';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { CollectionComponent } from '../../components/home/collection/collection.component';
import { ShopComponent } from '../../components/home/shop/shop.component';
import { BannerComponent } from '../../components/home/banner/banner.component';
import { FeatureComponent } from '../../components/home/feature/feature.component';
import { OfferComponent } from '../../components/home/offer/offer.component';
import { BlogComponent } from '../../components/home/blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ModalComponent,
    HeroComponent,
    CollectionComponent,
    ShopComponent,
    BannerComponent,
    FeatureComponent,
    OfferComponent,
    BlogComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {}
