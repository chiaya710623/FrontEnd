import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private dataService: DataService
  ) {}
  total = 0;
  ngOnInit() {}
  get showcart() {
    const cart = [];
    for (let i = 0; i < this.cartService.cart.length; i++) {
      for (let j = 0; j < this.dataService.products.length; j++) {
        if (this.cartService.cart[i].id === this.dataService.products[j].id) {
          cart[i] = this.dataService.products[j];
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
}
