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
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  logintitle: string = 'Welcome to Login Pages';
  apititile: string = 'RESTAPI';

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

  constructor(private userLogin: LoginService) {}

  postLogin(data: any) {
    return this.userLogin.postLoginDetails(data).subscribe((result) => {
      console.log(result);
    });
  }
  ngOninit() {}
}
