import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  // getOrders() {
  //   return this.httpClient.get(`${environment.api}orders`, {
  //     'headers': new HttpHeaders({
  //     })
  //   });
  // }

}
