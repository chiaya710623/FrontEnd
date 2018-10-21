import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private dataService: MemberService, private router: Router) {}
  ngOnInit() {}
  submit(email, password) {
    if (this.dataService.check(email, password)) {
      alert('登入成功');
      this.router.navigate(['/']);
    } else {
      alert('輸入錯誤');
    }
  }
}
