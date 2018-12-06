import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  getOrders() {
    return this.httpClient.get(`${environment.api}orders`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }


}
