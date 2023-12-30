export interface Wishlist {
    items: Array<WishlistItem>;
  }
  
  export interface WishlistItem {
    product: string;
    name: string;
    price: number;
    quantity: number;
    _id: string;
  }