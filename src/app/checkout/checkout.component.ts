import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private dataService: DataService
  ) {}
  ngOnInit() {}

}
