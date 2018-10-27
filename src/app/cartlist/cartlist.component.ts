import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {
  total = 0;
  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}
  ngOnInit() {}
  get showcart() {
    const cart = [];
    for (let i = 0; i < this.cartService.cart.length; i++) {
      for (let j = 0; j < this.productsService.originalProducts.length; j++) {
        if (this.cartService.cart[i].id === this.productsService.originalProducts[j].id) {
          cart[i] = this.productsService.originalProducts[j];
          cart[i].amount = this.cartService.cart[i].item_amount;
        }
      }
    }
    this.total = 0;
    for (let i = 0; i < cart.length; i++) {
      this.total += cart[i].price * cart[i].amount;
    }
    return cart;
  }
  plus(index) {
    if (this.cartService.cart[index].item_amount < 10) {
      this.cartService.cart[index].item_amount++;
    }
  }
  minor(index) {
    if (this.cartService.cart[index].item_amount > 0) {
      this.cartService.cart[index].item_amount--;
    }
  }
  delete_item(index) {
    this.cartService.cart.splice(index, index + 1);
    this.cartService.list_amount--;
  }
}
