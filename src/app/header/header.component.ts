import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: MemberService, private router: Router) {}
  ngOnInit() {}
  get login() {
    return this.dataService.login;
  }
  logout() {
    this.dataService.logout();
    alert('已登出');
    this.router.navigate(['/']);
  }
}
