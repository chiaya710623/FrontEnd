import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private cookieService: CookieService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    if (this.usersService.isLogin()) {
      setInterval(this.usersService.refresh, 30 * 60 * 1000);
    }
    if (this.usersService.isLogin()) {
      if (this.cookieService.check('cart') === true) {
        this.cartService.cart = JSON.parse(this.cookieService.get('cart'));
      } else {
        this.cookieService.set('cart', JSON.stringify(this.cartService.cart));
      }
    }
  }
}
