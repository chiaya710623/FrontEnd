import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private httpClient: HttpClient,
    private usersService: UsersService,
    private cookieService: CookieService,
    private productsService: ProductsService
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
              if (this.usersService.isLogin === 0) {
                this.cookieService.set('cart', JSON.stringify(this.cart));
              }
            }
            return;
          }
        }
        this.cart.push({ id: id, item_amount: item_amount });
        alert('已加入' + item_amount + '件此商品至購物車。');
        if (this.usersService.isLogin === 0) {
          this.cookieService.set('cart', JSON.stringify(this.cart));
        }
      } else {
        this.cart.push({ id: id, item_amount: item_amount });
        alert('已加入' + item_amount + '件此商品至購物車。');
        if (this.usersService.isLogin === 0) {
          this.cookieService.set('cart', JSON.stringify(this.cart));
        }
      }
    } else {
      alert('庫存不足，無法加入購物車。');
    }
  }

  delete_item(index) {
    this.cart.splice(index, index + 1);
      this.show_cart.splice(index, index + 1);
    if (this.usersService.isLogin === 0) {
      this.cookieService.set('cart', JSON.stringify(this.cart));
    }
  }

  show() {
    this.show_cart = [];
    if (JSON.stringify(this.cart) !== '[]') {
      for (let i = 0; i < this.cart.length; i++) {
        this.productsService
          .getProduct(this.cart[i].id)
          .subscribe((data: any) => {
            this.show_cart[i] = {
              id: this.cart[i].id,
              item_amount: this.cart[i].item_amount,
              product: data
            };
          });
      }
      console.log('show_cart', this.show_cart);
    }
  }

  getCart() {
    return this.httpClient.get(`${environment.api}orders/cart`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  patchCart(cart) {
    if (this.usersService.isLogin) {
      const cartdata = {};
      cart.forEach(product => {
        cartdata[product.id] = product.item_amount;
      });
      console.log(cartdata);
      return this.httpClient
        .patch(
          `${environment.api}orders/cart`,
          encodeURI(`products=${JSON.stringify(cartdata)}`),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        )
        .subscribe(_ => {});
    }
  }
}
