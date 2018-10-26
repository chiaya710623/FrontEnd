import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  confirm = '';
  constructor(private memberservice: MemberService, private router: Router) { }
  ngOnInit() {
  }

  submit(name, email, password, confirm) {
    if (name === '' || email === '' || password === '' || confirm === '') {
      alert('請勿留白');
    } else {
    if (password === confirm ) {
      this.memberservice.create(name, email, password);
      alert('註冊成功');
      this.router.navigate(['/']);
    } else {
      alert('密碼不一致');
    }
  }
  }
}
