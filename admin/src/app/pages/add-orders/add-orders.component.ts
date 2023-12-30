import { Component, NgModule } from '@angular/core';
import { from } from 'rxjs';
import { OrderService } from '../../services/order.service';
import { IOrder, Order } from '../../models/order.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,],
  templateUrl: './add-orders.component.html',
  styleUrl: './add-orders.component.css'
})
export class AddOrdersComponent {
  order = new Order();
  errMessage: string = "";

  constructor(private _service: OrderService) {}

  public setOrder(o: Order) {
    this.order = o;
  }



  postOrder() {
    this._service.postOrder(this.order).subscribe({
      next: (data) => {
        this.order = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    alert("Thêm đơn hàng thành công");
  }

}
