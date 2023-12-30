import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ProductService, OrderService]
};
