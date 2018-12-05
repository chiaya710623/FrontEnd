import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(
    private usersService: UsersService,
    private router: Router,
  ) {}
  ngOnInit() {}
  login() {
    this.usersService.login(this.user).subscribe((data: any) => {
      if (data.success) {
        alert('登入成功');
        this.router.navigate(['/']);
      } else {
        console.log(data);
        alert('登入失敗');
      }
    });
  }
}
