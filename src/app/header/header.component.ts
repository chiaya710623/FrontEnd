import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  confirm = '';
  constructor(private dataservice: MemberService, private router: Router) { }
  ngOnInit() {
  }

  submit(name, email, password, confirm) {
    if (password === confirm) {
      this.dataservice.create(name, email, password);
      alert('註冊成功');
      this.router.navigate(['/']);
    } else {
      alert('密碼不一致');
    }
  }
}
