import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email : '',
    password : ''
  };
  constructor(private usersService: UsersService, private router: Router) {}
  ngOnInit() {}
  login(user) {
    this.usersService.login(this.user).subscribe(
      (data: any) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']);
        } else {
          alert('登入失敗');
        }
      });
  }
}
