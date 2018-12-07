import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(
    private httpClient: HttpClient,
    private cartService: CartService
  ) {}
  order = {
    state: '1',
    message: '',
    pay_method: '0',
    receiver: '',
    receiver_phone: '',
    products: [],
    ship_method: '0'
  };

  getOrders() {
    return this.httpClient.get(`${environment.api}orders`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  patchOrder() {
    let orderstring = '';
    this.cartService.cart.forEach(product => {
      this.order.products[product.id] = product.item_amount;
    });
    console.log(this.order.products);
    for (const key in this.order) {
      if (key === 'products') {
        orderstring = orderstring.concat(
          key,
          '=',
          JSON.stringify(this.order[key]),
          '&'
        );
      } else {
        orderstring = orderstring.concat(key, '=', this.order[key]);
        if (key !== 'ship_method') {
          orderstring = orderstring.concat('&');
        }
      }
    }

    console.log(`${environment.api}orders`, `?${orderstring}`);
    return this.httpClient
      .patch(`${environment.api}orders`, `?${orderstring}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .subscribe(response => {
        console.log(response);
      });
  }
}
