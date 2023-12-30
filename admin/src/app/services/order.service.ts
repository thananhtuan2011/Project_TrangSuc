import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { IOrder, Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService { 

  constructor(public httpClient: HttpClient) {}

  getOrders(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };
    return this.httpClient.get<any>("/orders", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Order>),
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  postOrder(anOrder: any): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };
    return this.httpClient.post<any>("/orders", JSON.stringify(anOrder), requestOptions).pipe(
      map(res => JSON.parse(res) as Order),
      retry(3),
      catchError(this.handleError)
    );
  }

  deleteOrder(orderId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };
    return this.httpClient.delete<any>("/orders/" + orderId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IOrder>),
      retry(3),
      catchError(this.handleError)
    );
  }

  putOrder(anOrder: any): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };
    return this.httpClient.put<any>("/orders", JSON.stringify(anOrder), requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IOrder>),
      retry(3),
      catchError(this.handleError)
    );
  }
}
