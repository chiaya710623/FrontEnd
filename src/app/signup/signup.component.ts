import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private memberservice: UsersService) {}

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
