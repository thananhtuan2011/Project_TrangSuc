import { Injectable } from '@angular/core';
import { Wishlist, WishlistItem } from '../models/wishlist.model';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { _MatListItemGraphicBase } from '@angular/material/list';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist = new BehaviorSubject<Wishlist>({ items: [] });

  constructor(private _snackBar: MatSnackBar) { }

  addToWishlist(item: WishlistItem): void {
    console.log('Before Wishlist Update', this.wishlist.value.items.length);
    const items = [...this.wishlist.value.items];

    const itemInWishlist = items.find((_item) => _item._id === item._id);
    if (itemInWishlist) {
      itemInWishlist.quantity += 0;
    } else {
      items.push(item);
    }

    this.wishlist.next({ items });
    console.log('Updated Wishlist in WishlistService:', this.wishlist.value);
    this._snackBar.open('1 item added to wishlist.', 'OK', { duration: 3000 });
    console.log(this.wishlist.value)
    console.log('After Wishlist Update', this.wishlist.value.items.length);
    
  } 
  clearWishlist(): void {
    this.wishlist.next({ items: [] });
    this._snackBar.open('Wishlist is cleared.', 'OK', {
      duration: 3000,
    });
  }
}
