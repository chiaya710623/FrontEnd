import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  // getOrders() {
  //   return this.httpClient.get(`http://host.limaois.me:1723/api/orders`, {
  //     'headers': new HttpHeaders({
  //     })
  //   });
  // }

}
