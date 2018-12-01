import { Component, OnInit } from '@angular/core';
import { MemberService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private memberService: MemberService, private router: Router) {}
  ngOnInit() {}
  login(email, password) {
    return this.memberService.login(email, password);
  }
}
