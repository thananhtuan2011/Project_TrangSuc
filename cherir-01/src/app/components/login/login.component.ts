import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AcountService } from '../../services/acount.service';
import { AcountModel } from '../../models/account.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginAccount } from '../../models/account.model';
import { ForgotPasswordService } from '../../services/forgot-password.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AcountService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name!: string;
  email!: string;
  pass!: string;
  emaillogin!: string;
  password!: string;
  phone! : number;
 

  constructor(private router: Router, private _account_services: AcountService
   ) { }
  @ViewChild('container') container: ElementRef | undefined;

  toggleActiveState() {
    if (this.container) {
      this.container.nativeElement.classList.add('active');
    }
  }

  toggleInactiveState() {
    if (this.container) {
      this.container.nativeElement.classList.remove('active');
    }
  }

  Login() {
    const loginData : LoginAccount={
      email : this.emaillogin,
      pass: this.pass
    };
    this._account_services.Login(loginData).subscribe(
      (response)=>{
        console.log('Đăng nhập thành công!', response);
        this.router.navigate(['']);
      },
      (error) => {
        // Xử lý lỗi đăng nhập (nếu cần)
        console.error('Lỗi đăng nhập:', error);
      }
    )
      
  }

  ItemAccount(): AcountModel {

    const item = new AcountModel();
    item.name = this.name;
    item.email = this.email;
    item.pass = this.pass;

    return item
  }

 
  Register() {

    let item = this.ItemAccount();
    this._account_services.Register(item).subscribe((res: any) => {
      if (res && res.status == 1) {
        alert("Success !")
        this.toggleInactiveState()
        this.password = res.result.pass;
        this.emaillogin = res.result.email;
        // this.router.navigate(['']);

      }
      else {
        alert("Email already exists!")
      }


    })

  }

openForgotPassword(){
 
  this.router.navigate(['/forgot-password']); 
    
}


}

