import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CookieService } from 'ngx-cookie-service';

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
    private cookieService: CookieService,
    private router: Router
  ) {}
  ngOnInit() {}
  login() {
    if (this.cookieService.check('cart') === true) {
      // 如果有cookie先存起來
      this.cookieService.set('cart', JSON.stringify(this.cartService.cart));
    }
    this.cartService.cart = []; // 清空購物車
    this.usersService.login(this.user).subscribe(
      (data: any) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.cartService.getCart().subscribe(
            (cartdata: any) => {
              // 放入資料庫中的購物車
              console.log(cartdata);
              if (cartdata.products !== {}) {
                Object.keys(cartdata.products).forEach(product => {
                  this.cartService.cart.push({
                    id: product,
                    item_amount: cartdata.products[product]
                  });
                });
              }
              console.log(this.cartService.cart);
            },
            (err: any) => {
              console.log(err);
            }
          );
          alert('登入成功');
          this.router.navigate(['/']);
        }
      },
      (err: any) => {
        console.log(err);
        if (err.err === 'Unauthorized') {
          alert('帳號或密碼有誤。');
        } else {
          alert('登入失敗。');
        }
      }
    );
  }
}
