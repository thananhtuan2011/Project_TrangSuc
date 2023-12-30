import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';
import { WishlistService } from './services/wishlist.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),CartService, StoreService,WishlistService]
};