import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private httpClient: HttpClient
  ) {}
  token = '';
  amount = 1;
  now = new Date();

  register(user) {
    return this.httpClient.post(
      '${environment.api}register',
      user
    );
  }

  login(user) {
    return this.httpClient.post(`${environment.api}login`, user);
  }

  getUser() {
    return this.httpClient.get(`${environment.api}register`);
  }

  refresh() {
    if (this.now.getMinutes[1] === 0) {
      return this.httpClient.get(`${environment.api}refresh`);
    }
  }

  isLogin() {
    return localStorage.getItem('token');
  }
  logout() {
    return localStorage.removeItem('token');
  }
}