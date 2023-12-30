import { Component } from '@angular/core';
import { OrdersComponent } from '../orders/orders.component';
import { ProductsComponent } from '../products/products.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OrdersComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
