import { NgModule, Component } from "@angular/core";
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { MainManagerComponent } from './main-manager/main-manager.component';
import { TasksComponent } from './tasks/tasks.component';
import { SystemComponent } from './system.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainDevComponent } from './main-dev/main-dev.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        SystemRoutingModule
    ],
    declarations: [
        MainManagerComponent,
        TasksComponent,
        SystemComponent,
        HeaderComponent,
        MainDevComponent
    ]
})
export class SystemModule {}