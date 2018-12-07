import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(
    public cartService: CartService,
    private productsService: ProductsService,
    public ordersService: OrdersService,
    private router: Router
  ) {}
  total = 0;

  ngOnInit() {
    this.cartService.patchCart(this.cartService.cart);
    this.cartService.show();
  }

  get order() {
    return this.ordersService.order;
  }

  submit() {
    this.ordersService.patchOrder();
    this.ordersService.order = {
      message: '',
      pay_method: '0',
      receiver: '',
      receiver_phone: '',
      ship_information: '',
      ship_method: '0'
    };
    this.cartService.patchCart([]);
    alert('訂單已送出，謝謝您的購買！');
    this.router.navigate(['/']);
  }
}
