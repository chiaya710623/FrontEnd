import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private httpClient: HttpClient,
    private usersService: UsersService
  ) {}

  cart = [];
  list_amount = 0;
  add_to_cart(id, item_amount, stock) {
    if (stock !== 0) {
      if (this.cart !== []) {
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id === id) {
            if (this.cart[i].item_amount + item_amount > stock) {
              alert('訂購數量超過庫存量。');
            } else {
              this.cart[i].item_amount += item_amount;
              alert('已增加' + item_amount + '件此商品至購物車中。');
            }
            return;
          }
        }
      }
      this.cart[this.list_amount] = { id: id, item_amount: item_amount };
      this.list_amount++;
      alert('已加入' + item_amount + '件此商品至購物車。');
    } else {
      alert('庫存不足，無法加入購物車。');
    }
    if (this.usersService.isLogin()) {
      this.postCart(this.cart);
    }
  }

  delete_item(index) {
    this.cart.splice(index, index + 1);
    this.list_amount--;
  }


  getCart() {
    if (this.usersService.isLogin()) {
      return this.httpClient.get(`http://host.limaois.me:1723/api/orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    }
  }
  postCart(cart) {
    if (this.usersService.isLogin()) {
      return this.httpClient.post(
        `http://host.limaois.me:1723/api/orders?products=${JSON.stringify(
          cart
        )}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
    }
  }
}
