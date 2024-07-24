import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerurl = 'http://localhost:9001/api/v1/register';

  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post(this.registerurl, user);
  }
}
