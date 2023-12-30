import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationEnd, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './component/header/header.component';
import { MenuComponent } from './component/menu/menu.component';

import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddOrdersComponent } from './pages/add-orders/add-orders.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    CommonModule, 
    RouterModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    HeaderComponent,
    MenuComponent,
    OrdersComponent,
    ProductsComponent,
    HomeComponent,
    AddOrdersComponent, 
    AddProductsComponent
  ],
  providers: [ProductService, OrderService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppComponent {
  title = 'admin';
}
