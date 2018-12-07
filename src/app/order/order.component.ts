import { ProductsService } from './../products.service';
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
    private orders: OrdersService,
    private products: ProductsService
  ) {}
  orderlist: any;
  productlist: any;
  originOrderlist = this.orderlist;
  keyword = '';
  status = ['未出貨', '已出貨', '交易已完成'];
  pay_method = ['信用卡', '超商付款'];
  skipMethod = ['超商', '宅配'];
  totalAmount = 0;
  ngOnInit() {
    this.orders.getOrders().subscribe((response: any) => {
      console.log(response);
      this.orderlist = response.data;
      this.orderlist.forEach(order => {
        order.productlist = [];
        Object.keys(order.products).forEach(key => {
          this.products.getProduct(key).subscribe((product: any) => {
            order.productlist.push(product);
            console.log(product);
            this.totalAmount += product.sale_price ;
            console.log(response.Products[product.id]);
          });
        });
      });
    });
  }
  search() {
    /*
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
