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
    this.cartService.show_cart = [];
    this.total = 0;
    this.show();
  }
  get cart() {
    return this.cartService.cart;
  }
  get show_cart() {
    return this.cartService.show_cart;
  }
  show() {
    console.log('show cart');
    if (JSON.stringify(this.cart) !== '[]') {
      console.log('ee');
      for (let i = 0; i < this.cart.length; i++) {
        this.productsService
          .getProduct(this.cart[i].id)
          .subscribe((data: any) => {
            this.cartService.show_cart[i] = {
              id: this.cart[i].id,
              item_amount: this.cart[i].item_amount,
              product: data
            };
            this.total +=
              this.show_cart[i].item_amount *
              this.show_cart[i].product.sale_price;
          });
      }
      console.log('cart', this.cart);
      console.log('show_cart', this.show_cart);
    }
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
