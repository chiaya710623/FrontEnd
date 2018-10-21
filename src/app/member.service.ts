import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
      email: '456789@gmail.com',
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
