import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  information = {
    name: '',
    email: '',
    password: '',
    confirm: ''
  };
  constructor(private memberservice: MemberService, private router: Router) {}
  ngOnInit() {}

  submit(information) {
    let x = 0;
    for (const key in information) {
      if (information[key] === '') {
        x++;
      }
    }
    if (x > 0) {
      alert('請勿留白');
    } else {
      if (information.password === information.confirm) {
        this.memberservice.create(
          information.name,
          information.email,
          information.password
        );
        alert('註冊成功');
        this.router.navigate(['/']);
      } else {
        alert('密碼不一致');
      }
    }
  }
}
