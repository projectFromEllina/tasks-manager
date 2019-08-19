import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'tm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  access: string;

  constructor( private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.access = this.user.access;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
