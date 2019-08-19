import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';
import { MainManagerComponent } from './main-manager/main-manager.component';
import { TasksComponent } from './tasks/tasks.component';
import { MainDevComponent } from './main-dev/main-dev.component';
import { AuthGuard } from '../shared/services/auth.guard';
import { MainManagerGuard } from './shared/services/main-manager.guard';
import { MainDevGuard } from './shared/services/main-dev.guard';

const routes: Routes = [
    {path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
       {path: 'main-manager', canActivate: [MainManagerGuard], component: MainManagerComponent, data: {animation: 'start'}},
       {path: 'tasks',canActivate: [MainManagerGuard], component: TasksComponent, data: {animation: 'fadeIn'}},
       {path: 'main-dev',canActivate: [MainDevGuard], component: MainDevComponent, data: {animation: 'fadeIn'}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
