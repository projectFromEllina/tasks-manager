import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'tm-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  message: string = '';

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'team': new FormControl('', Validators.required),
      'access': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const userLogin = this.form.value.login;
    this.userService.getUserByLogin(userLogin)
        .subscribe( (user: User) => {
          if (user && userLogin === user.login) {
            this.message = 'This user already exists';
          } else {
            const {login, password, team, access} = this.form.value;
            const newUser = new User(login, password, team, access);
            this.userService.createNewUser(newUser)
                .subscribe((createUser: User) => {
                  this.message = '';
                  this.authService.isLogin();
                  window.localStorage.setItem('user', JSON.stringify(newUser));
                  newUser.access === 'manager' ? 
                  this.router.navigate(['/main-manager']) :
                  this.router.navigate(['/main-dev']);
                });
          }
        });
  }
}
