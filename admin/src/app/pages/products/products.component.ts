import { Component, NgModule, OnInit} from '@angular/core';
import { from } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { IProduct, Product } from '../../models/product.model';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})



export class ProductsComponent {
  products: any;
  errMessage: any;
  product= new Product();
  selectedProduct: any;
  isEditing: boolean = false;

  constructor(private _service: ProductService, private router: Router){
    this._service.getProducts().subscribe({
    next:(data)=>{this.products=data},
    error:(err)=>{this.errMessage=err}
    })
  }

  deleteProduct(productId: string) {
    this._service.deleteProduct(productId).subscribe({
      next: (data) => {
        this.products = data;
        // Chuyển hướng lại trang hiện tại
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['list-products']);
        });
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }

  editProduct(product: any) {
    if (!this.selectedProduct) {
      this.selectedProduct = product;
      product.isEditing = true;
    }
  }

  saveEdit(product: any) {
    this._service.putProduct(product).subscribe({
      next: (data) => {
        this.products = data},
      error: (err) => {
        this.errMessage = err;
      }
    });
    // Đặt isEditing của đơn hàng về false để chuyển về chế độ hiển thị thông tin
    product.isEditing = false;
    this.selectedProduct = null; // Đặt giá trị của selectedOrder về null
    alert("Cập nhật sản phẩm thành công");
  }

}