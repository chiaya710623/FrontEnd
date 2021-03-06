import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CookieService } from 'ngx-cookie-service';

declare let FB: any;

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
  fbLogined() {
    this.usersService.fbLogin(FB.getAccessToken()).subscribe((data: any) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        this.cartService.getCart().subscribe(
          (cartdata: any) => {
            // 放入資料庫中的購物車
            console.log('登入時從資料庫抓的購物車：', cartdata);
            if (cartdata.products !== {}) {
              Object.keys(cartdata.products).forEach(product => {
                this.cartService.cart.push({
                  id: product,
                  item_amount: cartdata.products[product]
                });
              });
            }
            console.log('登入時從資料庫抓的購物車：', this.cartService.cart);
          },
          (err: any) => {
            console.log(err);
          }
        );
        alert('登入成功');
        this.router.navigate(['/']);
      }
    });
  }
  fbLogin() {
    if (this.cookieService.check('cart') === true) {
      // 如果有cookie先存起來
      this.cookieService.set('cart', JSON.stringify(this.cartService.cart));
    }
    FB.Event.subscribe('auth.statusChange', () => {
      FB.getLoginStatus(res => {
        console.log(res);
        if (res.status == 'connected') {
          this.fbLogined();
        } else {
          alert('Login Failed');
        }
      });
    });
  }

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
              console.log('登入時從資料庫抓的購物車：', cartdata);
              if (cartdata.products !== {}) {
                Object.keys(cartdata.products).forEach(product => {
                  this.cartService.cart.push({
                    id: product,
                    item_amount: cartdata.products[product]
                  });
                });
              }
              console.log('登入時從資料庫抓的購物車：', this.cartService.cart);
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
  ngOnInit() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.2&appId=350762455725274&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    console.log('intied fb');
    setTimeout(()=>this.fbLogin(), 1000);
  }
}
