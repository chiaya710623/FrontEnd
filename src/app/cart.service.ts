import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private httpClient: HttpClient,
    private usersService: UsersService,
    private cookieService: CookieService
  ) {}
  show_cart = [];
  cart: any = [];
  add_to_cart(id, item_amount, stock) {
    if (stock !== 0) {
      if (JSON.stringify(this.cart) !== '[]') {
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id === id) {
            if (this.cart[i].item_amount + item_amount > stock) {
              alert('訂購數量超過庫存量。');
            } else {
              this.cart[i].item_amount += item_amount;
              alert('已增加' + item_amount + '件此商品至購物車中。');
              if (this.usersService.isLogin()) {
                this.patchCart(this.cart);
              } else {
                this.cookieService.set('cart', JSON.stringify(this.cart));
              }
            }
            return;
          }
        }
        this.cart.push({ id: id, item_amount: item_amount });
        alert('已加入' + item_amount + '件此商品至購物車。');
        if (this.usersService.isLogin()) {
          this.patchCart(this.cart);
        } else {
          this.cookieService.set('cart', JSON.stringify(this.cart));
        }
      } else {
        this.cart.push({ id: id, item_amount: item_amount });
        alert('已加入' + item_amount + '件此商品至購物車。');
        if (this.usersService.isLogin()) {
          this.patchCart(this.cart);
        } else {
          this.cookieService.set('cart', JSON.stringify(this.cart));
        }
      }
    } else {
      alert('庫存不足，無法加入購物車。');
    }
  }

  delete_item(index) {
    this.cart.splice(index, index + 1);
  }

  getCart() {
    return this.httpClient.get(`${environment.api}orders/cart`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  patchCart(cart) {
    if (this.usersService.isLogin()) {
      return this.httpClient.patch(
        `${environment.api}orders/cart`,
        encodeURI(`products=${JSON.stringify(cart)}`),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
    }
  }
}
