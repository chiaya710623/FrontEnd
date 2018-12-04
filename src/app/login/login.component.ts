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
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit() {}
  login(user) {
    this.usersService.login(this.user).subscribe((data: any) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem('token', data.token);
        alert('登入成功');
        this.cartService.getCart();
        this.router.navigate(['/']);
      } else {
        alert('登入失敗');
      }
    });
  }
}
