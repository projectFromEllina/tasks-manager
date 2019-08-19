import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'tm-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    const formData = this.form.value;

    this.userService.getUserByLogin(formData.login)
    .subscribe((user: User) => {
      if(user) {
        if(user.password === formData.password) {
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.isLogin();
          this.message = '';
          user.access === 'manager' ? 
          this.router.navigate(['/main-manager']) :
          this.router.navigate(['/main-dev']);
        } else {
          this.message = 'Password invalid!';
        }
      } else {
        this.message = 'User not found!';
      }
    })
  }

}
