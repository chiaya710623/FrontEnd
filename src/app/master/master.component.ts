import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    setInterval(this.usersService.refresh, 30 * 60 * 1000);
  }
}
