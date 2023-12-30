import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { IProduct, Product } from '../models/product.model';


@Injectable({
  providedIn: 'root',
})

export class ProductService { 

  constructor(public httpClient: HttpClient) {}

  getProducts():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.httpClient.get<any>("/products",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Product>),
      retry(3),
      catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }

  postFashion(aFashion:any):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.httpClient.post<any>("/products",JSON.stringify(aFashion),requestOptions).pipe(
      map(res=>JSON.parse(res) as Product),
      retry(3),
      catchError(this.handleError))
  }

  deleteProduct(productId:string):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this.httpClient.delete<any>("/products/"+productId,requestOptions).pipe(
    map(res=>JSON.parse(res) as Array<IProduct>),
    retry(3),
    catchError(this.handleError))
  }

  putProduct(aProduct:any):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this.httpClient.put<any>("/products",JSON.stringify(aProduct),requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<IProduct>),
      retry(3),
      catchError(this.handleError))
  }



  
}
