import { Component, OnInit } from '@angular/core';
import { MemberService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private memberservice: MemberService) {}

  information = {
    name: '',
    email: '',
    password: '',
    confirm: ''
  };
  ngOnInit() {}
  signup(information) {
    return this.memberservice.signup(this.information);
  }
}
