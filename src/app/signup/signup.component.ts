import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private router: Router,
    private cartService: CartService
  ) {}

  user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };
  ngOnInit() {}
  signup() {
    let x = 0;
    for (const key in this.user) {
      if (this.user[key] === '') {
        x++;
      }
    }
    if (x > 0) {
      alert('請勿留白');
    } else {
      if (this.user.password !== this.user.password_confirmation) {
        alert('密碼不一致');
      } else {
        this.usersService.register(this.user).subscribe(
          (data: any) => {
            console.log(data);
            if (data.success) {
              alert('註冊成功');
              this.cartService.patchCart([]);
              this.router.navigate(['/']);
            } else {
              alert('註冊失敗');
            }
          },
          response => {
            console.log(response);
          }
        );
      }
    }
  }
}
