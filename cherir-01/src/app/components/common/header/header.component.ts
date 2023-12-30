import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import{ MatMenuModule} from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge'
import { CommonModule } from '@angular/common';
import { Cart, CartItem } from '../../../models/cart.model';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { Wishlist } from '../../../models/wishlist.model';
import { WishlistService } from '../../../services/wishlist.service';
import { StoreService } from '../../../services/store.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    CommonModule,
    FormsModule,
    
],
providers:[HttpClientModule, StoreService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
partialProductName: string = '';
  private _cart: Cart ={items:[]};
  private _wishlist: Wishlist ={items:[]};
  itemsQuantity = 0
  itemsQuantityW = 0

  @Input ()

  get cart(): Cart{
    return this._cart;
  }

  set cart(cart: Cart){
    this._cart = cart;

    this.itemsQuantity = cart.items
    .map((item)=> item.quantity)
    .reduce((prev, current)=> prev + current, 0);
  }

  @Input()
  get wishlist(): Wishlist{
    return this._wishlist;
  }
  
  set wishlist(wishlist: Wishlist){
    this._wishlist = wishlist;
    console.log('Updated Wishlist:', wishlist);
    this.itemsQuantityW = wishlist.items
    .map((item)=> item.quantity)
    .reduce((prev, current)=> prev + current, 0);
  }

  constructor(private cartService: CartService,
              private router : Router,
              private storeService: StoreService,
              private wishlistService: WishlistService) {}
         
  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  onClearWishlist() {
    this.wishlistService.clearWishlist();
  }

  navigateToProduct(productId: string) {
    // Định tuyến đến trang sản phẩm với productId
    this.router.navigate(['/product', productId]);
 }
 
  Login(){
    this.router.navigate(['/login']); 
  }
  searchProduct() {
    if (this.partialProductName.trim() !== '') {
      this.storeService.searchProductByName(this.partialProductName).subscribe(
        (result) => {
          if (result.id) {
            // Sản phẩm được tìm thấy, điều hướng đến trang sản phẩm
            this.router.navigate(['/product', result.id]);
          } else {
            console.log('Product not found');
            this.showProductNotFoundAlert(); // Log vào console để kiểm tra
          }
        },
        (error) => {
          console.error('Error searching for product:', error);
          // Xử lý lỗi nếu cần thiết
        }
      );
    }
  }
  
  showProductNotFoundAlert() {
    console.log('showProductNotFoundAlert() is called'); // Log vào console để kiểm tra
    // Hiển thị thông báo hoặc thực hiện hành động khác khi sản phẩm không được tìm thấy
    alert('Product not found. Please try again.');
  }
  
  }
