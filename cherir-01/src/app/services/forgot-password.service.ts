import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const STORE_BASE_URL = 'http://localhost:5000';
@Injectable({
  providedIn: 'root'
})

export class ForgotPasswordService {

  constructor(private httpClient: HttpClient) { }
  Forget(email:string){
    const url = STORE_BASE_URL + "/forgot-password"
    return this.httpClient.post<any>(url,{email}).subscribe();
   }
}
