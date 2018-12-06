import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(
    private usersService: UsersService,
    private cartService: CartService,
    private router: Router,
  ) {}
  ngOnInit() {}
  login() {
    this.usersService.login(this.user).subscribe((data: any) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        alert('登入成功');
        this.cartService.cart = [];
        this.router.navigate(['/']);
      } else {
        alert('登入失敗');
      }
    }, (err: any) => {
      console.log(err);
      alert('登入失敗');
    });
  }
}
