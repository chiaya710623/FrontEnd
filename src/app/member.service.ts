import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor() {}
  login = 0;
  amount = 1;
  member = [
    {
      id: 1,
      name: 'Ada',
      email: '456789@gmail.com',
      password: '123'
    }
  ];
  create(name, email, password) {
    this.member[this.amount] = {
      // 其實沒什麼意義的一段程式碼
      id: this.amount + 1,
      name: name,
      email: email,
      password: password
    };
    this.amount++;
    console.log(this.member);
    console.log('會員資料進資料庫了呢');
  }
  check(email, password) {
    for (let i = 0; i < this.amount; i++) {
      if (
        this.member[i].email === email &&
        this.member[i].password === password
      ) {
        this.login = i + 1;
        return i + 1;
      }
    }
    this.login = 0;
    return 0;
  }
  logout() {
    this.login = 0;
  }
}
