import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor() { }
  amount = 1;
  member = [
    {
      id: 1,
      name: 'Ada',
      email: 'chiaya710623@gmail.com',
      password: '123'
    },
  ];
  create(name, email, password) {
    this.member[this.amount] = {
        id: this.amount + 1,
        name: name,
        email: email,
        password: password
      };
    this.amount++;
  }
}
