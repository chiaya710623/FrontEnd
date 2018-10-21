import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  list_amount = 0;
  cart = [];
  constructor() {}
  add_to_cart(id, item_amount) {
    this.cart[this.list_amount] = { id, item_amount };
    this.list_amount++;
    console.log(this.cart);
  }
}
