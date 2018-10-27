import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  list_amount = 0;
  cart = [];
  constructor() {}
  add_to_cart(id, item_amount) {
    if (this.cart !== []) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === id) {
          if (this.cart[i].item_amount + item_amount > 10) {
            alert('超過訂購數量上限，單項商品最多訂購10件。');
          } else {
            this.cart[i].item_amount += item_amount;
            alert('已增加' + item_amount + '件此商品至購物車中。');
          }

    console.log(this.list_amount, this.cart);
          return;
        }
      }
    }
    this.cart[this.list_amount] = { id: id, item_amount: item_amount };
    this.list_amount++;
    console.log(this.list_amount, this.cart);
    alert('已加入' + item_amount + '件此商品至購物車。');
  }
}
