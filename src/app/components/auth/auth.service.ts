import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(body) {
    return this.http.get(`${environment.apiBase}/login?username=${body.email}&password=${body.password}`).toPromise();
  }

  registration(body) {
    return this.http.get(`${environment.apiBase}/add_user`, {
      params: {
        username: body.email,
        password: body.password,
        role: body.role
      }
    }).toPromise();
  }

  loginToken() {
    return !!localStorage.getItem("token");
  }

}
