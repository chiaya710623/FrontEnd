import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private dataService: DataService) {}
  amount = 3;
  page = 1;
  ngOnInit() {}
  get products() {
    return this.dataService.products;
  }
}
