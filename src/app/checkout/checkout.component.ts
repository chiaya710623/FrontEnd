import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
    private orderService: OrderService,
    private router: Router
  ) {}
  total = 0;
  information = {
    name: '',
    phone: '',
    address: '',
    email: '',
    pay: '',
    transmit: ''
  };
  ngOnInit() {}
  get showcart() {
    const cart = [];
    for (let i = 0; i < this.cartService.cart.length; i++) {
      for (let j = 0; j < this.productsService.products.length; j++) {
        if (this.cartService.cart[i].id === this.productsService.products[j].id) {
          cart[i] = this.productsService.products[j];
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
  submit_order(information, products, total) {
    return this.orderService.submit_order(information, products, total);
  }
}
