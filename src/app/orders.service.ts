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
    pay_method: '',
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
    for (const key in this.order) {
      if (1) {
        orderstring = orderstring.concat(key, '=', this.order[key]);
        if (key !== 'ship_method') {
          orderstring = orderstring.concat('&');
        }
      }
    }
    console.log(orderstring);
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
