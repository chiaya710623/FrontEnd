import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = this.dataService.products;
  constructor(private dataService: DataService) {}

  ngOnInit() {}
  add_to_cart() {}
}
