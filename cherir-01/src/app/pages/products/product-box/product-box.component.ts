import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css','./../../../../assets/css/style1.css','./../../../../assets/css/bootstrap.min.css']
 
})
export class ProductBoxComponent implements OnInit{
  @Input() product: Product| undefined;
  
  @Output() addToCart= new EventEmitter();
  @Output() addToWishlist= new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }
  navigateToProductDetail(): void {
    if (this.product && this.product._id) {
      // Use router.navigate to navigate to the product detail page with the product ID
      this.router.navigate(['/product', this.product._id]);
    }
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  onAddToWishlist(): void {
    this.addToWishlist.emit(this.product);
  }

}
