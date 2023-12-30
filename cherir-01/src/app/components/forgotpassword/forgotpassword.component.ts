import { Component,OnInit, inject } from '@angular/core';  
import { ForgotPasswordService } from '../../services/forgot-password.service';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent{
  forgetForm = new FormGroup({
    email: new FormControl('') 
  });
  constructor(fb : FormBuilder, private forgotPasswordService: ForgotPasswordService){
      this.forgetForm=fb.group({
        email: ['',Validators.required]
      });
    }
  onSubmit(){
    console.log(this.forgetForm.value);
    this.forgotPasswordService.Forget(this.forgetForm.value.email || "");
  }
}

