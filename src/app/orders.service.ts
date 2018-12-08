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
    products: {},
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
    const productobject = {};
    this.cartService.cart.forEach(product => {
      productobject[product.id] = product.item_amount;
    });
    console.log('送出訂單前的商品內容：', this.order.products);
    this.order.products = productobject;

    return this.httpClient
      .patch(`${environment.api}orders`, this.order, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .subscribe(response => {
        console.log(response);
      });
  }
}
