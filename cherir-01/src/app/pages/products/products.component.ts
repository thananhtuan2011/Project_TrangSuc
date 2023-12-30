import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import{ MatMenuModule} from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge'
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Subscription, catchError, throwError } from 'rxjs';
import { StoreService } from '../../services/store.service';
import { HttpClientModule } from '@angular/common/http';

import { WishlistService } from '../../services/wishlist.service';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FiltersComponent,
  ProductsHeaderComponent,
  ProductBoxComponent,
  CommonModule

],
  providers:[HttpClientModule, StoreService],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css',"./../../../assets/css/bootstrap.min.css","./../../../assets/css/style1.css","./../../../assets/css/linearicons-icon-font.min.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class ProductsComponent implements OnInit, OnDestroy {
  cols = 3;
  products: Array<Product> | undefined;
  count = '8';
  sort = 'desc';
  category: string | undefined;
  productsSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private storeService: StoreService,
    private wishlistService: WishlistService,
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;

  }

  onItemsCountChange(count: number): void {
    this.count = count.toString();
    this.getProducts();
  }

  onSortChange(newSort: string): void {
    console.log('New Sort:', newSort);
    this.sort = newSort;
    this.getProducts();
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  getProducts(): void {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }

  onAddToCart(product: Product): void {
    if (product._id !== undefined && product._id !== null) {
      this.cartService.addToCart({
        product: product.image,
        name: product.title,
        price: product.price,
        quantity: 1,
        _id: product._id.toString(),
      });
    } else {
      console.error('Product id is undefined or null.');
    }
  }

  onAddToWishlist(product: Product): void {
    if (product._id !== undefined && product._id !== null) {
      this.wishlistService.addToWishlist({
        product: product.image,
        name: product.title,
        price: product.price,
        quantity: 1,
        _id: product._id.toString(),
      });
    } else {
      console.error('Product id is undefined or null.');
    }
  }
  
  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}