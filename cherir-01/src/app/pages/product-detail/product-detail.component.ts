import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon'
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/product.model';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
  CommonModule,
MatTabsModule,
MatIconModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css',"./../../../assets/css/bootstrap.min.css","./../../../assets/css/style1.css","./../../../assets/css/linearicons-icon-font.min.css"],
  providers:[HttpClientModule, StoreService],
  encapsulation: ViewEncapsulation.Emulated 
})
export class ProductDetailComponent implements OnInit{
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private cartService: CartService
  ) {}
  addToCart(product: Product): void {
    if (product && product._id) {
      this.cartService.addToCart({
        product: product.image,
        name: product.title,
        price: product.price,
        quantity: 1,
        _id: product._id.toString(),
      });
    } else {
      console.error('Product id is undefined or null.');
    }}

  ngOnInit(): void {
    // Subscribe to route parameters and fetch product details
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      if (productId) {
        this.storeService.getProductById(productId).subscribe(
          (product) => {
            this.product = product;
          },
          (error) => {
            console.error('Error fetching product details:', error);
          }
        );
      }
    });
  }
}
