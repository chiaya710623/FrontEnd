import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor() {}
  order_amount = 0;
  order = [];
}
