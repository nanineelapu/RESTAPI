import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  FormControlName,
  Validators,
} from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    fname: new FormControl(' ', Validators.required),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confrimpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private getuser: RegisterService) {}
  postDetails(data: any) {
    return this.getuser.registerUser(data).subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit() {}
}
