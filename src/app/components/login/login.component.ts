import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  FormControlName,
  Validators,
  FormControl,
} from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  logintitle: string = 'Welcome to Login Pages';
  apititile: string = 'RESTAPI';

  private posturl = '';

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
      ),
    ]),
  });

  show() {
    console.log(this.loginForm);
  }

  constructor(private http: HttpClient) {}

  postDetails(data: any) {
    return this.http.post(this.posturl, data);
  }
  ngOninit() {}
}
