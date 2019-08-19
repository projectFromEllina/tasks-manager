import { Component, OnInit } from '@angular/core';

import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  team: string;
  tasks = [];
  isLoad: boolean = false;
  noTasks: boolean = false;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.team = this.mainService.getTeam();

    this.mainService.getDevForTeam(this.team)
      .subscribe(developers => {
        !!developers.length ? 
        developers.forEach(dev => {
          dev.tasks.forEach(task => {
            this.tasks.push(task.text);     
          })
        }) : this.noTasks = true;
        window.setTimeout(() => {
          this.isLoad = true;
        }, 1000); 
      })
  }

}
