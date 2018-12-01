import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  list_amount = 0;
  cart = [];
  constructor(private httpClient: HttpClient) {}

  add_to_cart(id, item_amount, stock) {
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
  }
  getCartlists(member_id) {
    return this.httpClient.get(`http://host.limaois.me:1723/api/orders?member_id=${member_id}&state=${0}`);
  }
}
