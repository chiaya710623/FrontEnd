import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { UsersService } from './../users.service';

declare let $: any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  constructor(
    private orders: OrdersService,
    private products: ProductsService,
    public usersService: UsersService
  ) {}
  orderlist: any;
  productlist: any;
  status = ['未出貨(購物車中)', '已出貨', '交易已完成'];
  pay_method = ['信用卡', '超商付款'];
  skipMethod = ['超商', '宅配'];
  ngOnInit() {
    this.orders.getOrders().subscribe((response: any) => {
      this.orderlist = response.data;
      console.log(response);
      this.orderlist.forEach(order => {
        order.productlist = [];
        order.totalAmount = 0;
        Object.keys(order.products).forEach(key => {
          this.products.getProduct(key).subscribe((product: any) => {
            order.productlist.push(product);
            order.totalAmount += product.sale_price * order.products[product.id];
          });
        });
      });
    });
  }
}
