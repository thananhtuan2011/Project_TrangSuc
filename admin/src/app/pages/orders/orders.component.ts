import { Component, NgModule } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { IOrder, Order } from '../../models/order.model';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent{
  orders: any;
  errMessage: any;
  order = new Order();
  selectedOrder: any;
  isEditing: boolean = false;

  constructor(private _service: OrderService, private router: Router) {
    this._service.getOrders().subscribe({
      next: (data) => { this.orders = data; },
      error: (err) => { this.errMessage = err; }
    });
  }

  deleteOrder(orderId: string) {
    this._service.deleteOrder(orderId).subscribe({
      next: (data) => {
        this.orders = data;
        // Chuyển hướng lại trang hiện tại
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['list-orders']);
        });
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }

  editOrder(order: any) {
    if (!this.selectedOrder) {
      this.selectedOrder = order;
      order.isEditing = true;
    }
  }

  saveEdit(order: any) {
    this._service.putOrder(order).subscribe({
      next: (data) => {
        this.orders = data},
      error: (err) => {
        this.errMessage = err;
      }
    });
    // Đặt isEditing của đơn hàng về false để chuyển về chế độ hiển thị thông tin
    order.isEditing = false;
    this.selectedOrder = null; // Đặt giá trị của selectedOrder về null
    alert("Cập nhật đơn hàng thành công");
  }
}
