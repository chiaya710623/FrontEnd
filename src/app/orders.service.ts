import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private httpClient: HttpClient) {}
  order = {
    message: '',
    pay_method: '0',
    receiver: '',
    receiver_phone: '',
    ship_information: '',
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
    const orderobject = {};
    for (const key in this.order) {
      if (1) {
        orderobject[key] = this.order[key];
      }
    }
    orderstring = JSON.stringify(orderobject);
    console.log('1', orderstring);
    return this.httpClient
      .patch(`${environment.api}orders`, encodeURI(`${orderstring}`), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .subscribe(_ => {});
  }
}
