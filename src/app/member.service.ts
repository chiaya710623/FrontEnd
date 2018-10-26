import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private router: Router) {}
  login_id = 0;
  amount = 1;
  member = [
    {
      id: 1,
      name: 'Ada',
      email: '123@gmail.com',
      password: '123'
    }
  ];
  signup(information) {
    let x = 0;
    for (const key in information) {
      if (information[key] === '') {
        x++;
      }
    }
    if (x > 0) {
      alert('請勿留白');
    } else {
      if (information.password === information.confirm) {
        this.member[this.amount] = {
          id: this.amount + 1,
          name: information.name,
          email: information.email,
          password: information.password
        };
        this.amount++;
        alert('註冊成功');
        this.router.navigate(['/']);
      } else {
        alert('密碼不一致');
      }
    }
  }
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
