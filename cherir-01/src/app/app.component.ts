import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MobileNavbarComponent } from './components/common/mobile-navbar/mobile-navbar.component';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistService } from './services/wishlist.service';
import { Wishlist } from './models/wishlist.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    MobileNavbarComponent,
    FooterComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };
  wishlist: Wishlist ={items:[]}; 
  title = 'cherir';
  

  isIgnore: boolean = false;

  constructor(private router: Router, private wishlistService: WishlistService, private cartService: CartService) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isIgnore = this.router.url === '/card';
      }
    });

    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });

    this.wishlistService.wishlist.subscribe((_wishlist) => {
      this.wishlist = _wishlist;
    });
  }
}
