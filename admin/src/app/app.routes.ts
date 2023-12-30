import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundError } from 'rxjs';
import { AddOrdersComponent } from './pages/add-orders/add-orders.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'list-orders', component: OrdersComponent},
    { path: 'list-products', component: ProductsComponent},
    { path: 'add-order', component: AddOrdersComponent},
    { path: 'add-product', component: AddProductsComponent},
    { path: '**', component: NotFoundError}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }