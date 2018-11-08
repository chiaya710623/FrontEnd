import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../admins.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private adminsService: AdminsService) {}

  get admins() {
    return this.adminsService.admins;
  }
  ngOnInit() {}
}
