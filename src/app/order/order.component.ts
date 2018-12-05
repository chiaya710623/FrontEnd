import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
declare let $: any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    private orders: OrdersService
  ) { }
  orderlist: any;
  originOrderlist = this.orderlist;
  keyword = '';
  ngOnInit() {

  }

  search()  {/*
    if (this.keyword === '') {
      this.orderlist = this.originOrderlist;
    } else {
      this.orderlist = this.originOrderlist.filter(
        orderlist => {
          let flag = false;
          orderlist.products.forEach(products => flag = flag || products.title.indexOf(this.keyword) !== -1);
          return flag;
        }
      );
      //*/
    }

}
