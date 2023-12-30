import { Component, NgModule } from '@angular/core';
import { from } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { IProduct, Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
  product = new Product()
  errMessage: string = ""
  constructor(private _service: ProductService) {}

  public setFashion(f:Product)
  {
    this.product=f
  }

  onFileSelected(event:any,product: Product) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
    product.image=reader.result!.toString() 
    };
    reader.onerror = function (error) {
    console.log('Error: ', error);
    }; 
    }

  postFashion()
  {
    this._service.postFashion(this.product).subscribe({
      next:(data)=>{this.product=data},
      error:(err)=>{this.errMessage=err}
    })
    alert("Thêm sản phẩm thành công")
  }



}
