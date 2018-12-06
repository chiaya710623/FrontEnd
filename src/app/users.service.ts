import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  amount = 1;
  now = new Date();

  register(user) {
    return this.httpClient.post(`${environment.api}register`, user);
  }

  login(user) {
    return this.httpClient.post(`${environment.api}login`, user);
  }

  getUser() {
    return this.httpClient.get(`${environment.api}register`);
  }

  refresh() {
    this.httpClient
      .get(`${environment.api}refresh`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .subscribe((data: any) => {
        console.log(data);
        localStorage.setItem('token', data.token);
      });
  }

  isLogin() {
    return localStorage.getItem('token');
  }
  logout() {
    return localStorage.removeItem('token');
  }
}
