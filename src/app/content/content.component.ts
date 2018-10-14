import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  amount = 0;
  product_id = null;
  constructor() {}
  ngOnInit() {}
  add_to_cart() {}
}
