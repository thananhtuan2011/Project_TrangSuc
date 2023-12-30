import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_URL = 'http://localhost:5000';

@Injectable({
  providedIn: 'root',
})
export class StoreService { 

  constructor(private httpClient: HttpClient) {}

  getAllProducts(
    limit = '8',
    sort = 'desc',
    category?:string
    
  ): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(`${STORE_BASE_URL}/products/categories`);
  }

  
  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${STORE_BASE_URL}/products/${id}`);
  }

  searchProductByName(name: string): Observable<{ id: string }> {
    return this.httpClient.get<{ id: string }>(`${STORE_BASE_URL}/products/search/${name}`);
  }
}
