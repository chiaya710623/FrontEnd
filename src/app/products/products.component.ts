import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  // search_list = ['', '', '', '', ''];

  // search($search_list) {
  //   this.dataService.search($search_list);
  // }


  ngOnInit() {}
}
