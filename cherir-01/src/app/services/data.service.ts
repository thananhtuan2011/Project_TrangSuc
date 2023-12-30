import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cartData = new BehaviorSubject<any>(null);
  cartData$ = this.cartData.asObservable();

  private customerData = new BehaviorSubject<any>(null);
  customerData$ = this.customerData.asObservable();

  constructor() {}

  setCartData(data: any): void {
    this.cartData.next(data);
  }

  getCartData(): any {
    return this.cartData.value;
  }

  setCustomerData(data: any): void {
    this.customerData.next(data);
  }

  getCustomerData(): any {
    return this.customerData.value;
  }
}
