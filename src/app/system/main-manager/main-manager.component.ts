import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User } from 'src/app/shared/models/user.model';
import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-manager.component.html',
  styleUrls: ['./main-manager.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainManagerComponent implements OnInit {
  team: string;
  developers: User[] = [];
  tasks;
  isLoad: boolean = false;
  noDev: boolean = false;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.team = this.mainService.getTeam();

    this.mainService.getDevForTeam(this.team)
    .subscribe((user: User[]) => {
      !!user.length ? this.developers = user : this.noDev = true;
      window.setTimeout(() => {
        this.isLoad = true;
      }, 1000);      
    })
  }

  onChange(dev: User) {
    this.tasks =  dev.tasks;  
  }  

}
