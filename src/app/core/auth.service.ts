import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly ApiUrl = environment.APIUrl;

  readonly httpOptions = {
    headers: new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded'
    )
    }

  constructor(

    private http: HttpClient
  ) { }


  login(email: string, password: string) {
    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
  console.log(email);
    return this.http.post(this.ApiUrl + 'login', body, this.httpOptions)
  }


  register(email: string, password: string,name:string,password_confirmation:string) {
    let body = new URLSearchParams();

    body.set('name', name);
    body.set('password_confirmation', password_confirmation);
    body.set('email', email);
    body.set('password', password);


    return this.http.post(this.ApiUrl + 'register', body, this.httpOptions)
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  getToken(){
    return localStorage.getItem('token');
  }
  getName(){
    return localStorage.getItem('name');
  }
}
