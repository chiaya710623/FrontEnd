import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private router: Router, private httpClient: HttpClient) {}
  login_id = 0;
  amount = 1;

  register(user) {
    return this.httpClient.post('http://host.limaois.me:1723/api/register', user);
  }

  login(user) {
    return this.httpClient.post('http://host.limaois.me:1723/api/login', user);
  }

  // isLogin(token) {
  //   console.log(token);
  //   return localStorage.getItem('token');
  // }

  // logout() {
  //   return localStorage.removeItem('token');
  // }

  login(email, password) {
    let i;
    for (i = 0; i < this.amount && this.login_id === 0; i++) {
      if (
        this.member[i].email === email &&
        this.member[i].password === password
      ) {
        this.login_id = i + 1;
        alert('登入成功');
        this.router.navigate(['/']);
      }
    }
    if (this.login_id === 0) {
      alert('輸入錯誤');
    }
  }
  logout() {
    this.login_id = 0;
  }
}
