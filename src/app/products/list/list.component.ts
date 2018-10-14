import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private dataservice: CartService
  ) {}

  ngOnInit() {}
  add_to_cart($id, $amout) {
    // 把商品id跟數量加到cart的陣列裡去
  }
  get products() {
    return this.dataService.products;
  }

}
