import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private router: Router, private cartService: CartService) {}
  order_amount = 0;
  order = [];
  submit_order(information, products, total) {
    let x = 0;
    for (const key in information) {
      if (information[key] === '') {
        x++;
      }
    }
    if (x === 0) {
      information.products = products;
      information.total = total;
      this.order[this.order_amount] = information;
      this.order_amount++;
      console.log(this.order);
      alert('訂單已送出，謝謝您的購買！');
      this.cartService.cart = [];
      this.router.navigate(['/']);
    } else {
      alert('請確實填寫資料，謝謝！');
    }
  }
}
