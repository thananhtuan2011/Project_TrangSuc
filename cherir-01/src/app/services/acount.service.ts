import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Product } from '../models/product.model';
import { AcountModel } from '../models/account.model';
import { LoginAccount } from '../models/account.model';
const STORE_BASE_URL = 'http://localhost:5000';

@Injectable({
    providedIn: 'root',
})
export class AcountService {

    constructor(private httpClient: HttpClient) { }

    Register(body: AcountModel) {
        // const httpHeaders = this.getHttpHeaders();
        const url = STORE_BASE_URL + `/register`;
        return this.httpClient.post<AcountModel>(url, body);

    }
    Login(body:LoginAccount){
        const url = STORE_BASE_URL + '/login'
        return this.httpClient.post<LoginAccount>(url, body);
    }
    //  
}
