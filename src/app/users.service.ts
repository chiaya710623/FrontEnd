import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private router: Router, private httpClient: HttpClient) {}
  token = '';
  amount = 1;

  register(user) {
    return this.httpClient.post('http://host.limaois.me:1723/api/register', user);
  }

  login(user) {
    return this.httpClient.post('http://host.limaois.me:1723/api/login', user);
  }

  getUser() {
    return this.httpClient.get('http://host.limaois.me:1723/api/register');
  }

  isLogin() {
    return localStorage.getItem('token');
  }
  logout() {
    return localStorage.removeItem('token');
  }

}
