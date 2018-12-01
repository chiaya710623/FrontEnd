import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderlist = JSON.parse(`[
    {
        "id": 1,
        "state": 1,
        "pay_method": 0,
        "payment_information": {
            "date": {
                "date": "2018-12-01 03:32:22.381185",
                "timezone_type": 3,
                "timezone": "UTC"
            },
            "total": 864,
            "id": "ovfmzksrh9z3u5iw58gm"
        },
        "message": "子；穿一件異樣：遇到過的四。",
        "ship_method": 0,
        "ship_information": "配送中",
        "ship_order": "FIFO66232487",
        "products": {
            "1": 5,
            "4": 6
        },
        "receiver": "dckfad",
        "receiver_phone": "0938552862",
        "invoice_number": "78z1635751",
        "coupon": null
    },
    {
        "id": 12,
        "state": 0,
        "pay_method": 3,
        "payment_information": null,
        "message": null,
        "ship_method": null,
        "ship_information": null,
        "ship_order": null,
        "products": {},
        "receiver": "吳宇宸",
        "receiver_phone": null,
        "invoice_number": null,
        "coupon": null
    }
]`);
  constructor() { }
  originOrderlist = this.orderlist;
  keyword = '';
  totalPrice = 0;
  ngOnInit() {
  }

  search() {
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
    }
    console.log(this.orderlist);
  }

}
