import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private usersService: UsersService, private router: Router) {}
  ngOnInit() {}
  login(email, password) {
    return this.usersService.login(email, password);
  }
}
