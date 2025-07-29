import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserAuthentication } from '../../services/user-authentication';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private _authSer: UserAuthentication) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z][a-zA-Z0-9_]*@gmail\\.com$")]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])[\S]{8,}$/) ]]
    });
  }

  loginAccount() {


    if (this.loginForm.valid) {
      // Handle login logic here
      this._authSer.login();
      this.router.navigateByUrl("/home");
      console.log(this.loginForm.value);
    }
  }
}
