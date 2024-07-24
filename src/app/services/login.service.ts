import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginurl = 'http://localhost:9001/api/v1/login';

  constructor(private http: HttpClient) {}

  postLoginDetails(user: any) {
    return this.http.post(this.loginurl, user);
  }

  ngOnInit() {}
}
