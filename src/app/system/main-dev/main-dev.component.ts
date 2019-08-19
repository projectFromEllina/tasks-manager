import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-main-dev',
  templateUrl: './main-dev.component.html',
  styleUrls: ['./main-dev.component.scss']
})
export class MainDevComponent implements OnInit {
  user: User;
  tasks = [];
  isLoad: boolean = false;
  noTasks: boolean = false;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.user.tasks ? 
    this.tasks = this.user.tasks :
    this.noTasks = true;
    window.setTimeout(() => {
      this.isLoad = true;
    }, 1000); 
  }

}
