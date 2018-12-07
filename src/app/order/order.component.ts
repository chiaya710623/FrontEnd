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
  newOrderlist: any;
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
            // console.log(product);
            this.totalAmount += product.sale_price * order.products[product.id];
          });
        });
      });
    });
  }
  search(keyword) {
    if (this.keyword === '') {
      this.newOrderlist = this.orderlist;
    } else {
      this.newOrderlist = this.orderlist.filter(
        results => {
          let flag = false;
          results.products.forEach(products => flag = flag || products.title.indexOf(this.keyword) !== -1);
          return flag;
        }

      );
    }
    console.log(keyword);
    console.log(this.orderlist);
  }
}
