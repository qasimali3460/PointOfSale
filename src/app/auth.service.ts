import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User{
  login;
  message;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin
  constructor(private http:HttpClient) { }
  getUserData(username,password)
  {
    return this.http.post<User>("http://localhost:3000/login",{username,password});
  }
  isLoggedIn()
  {
    return this.isLoggedin;
  }
  setLoggedIn(data)
  {
    this.isLoggedin=data;
  }
}
