import { Component, ViewEncapsulation, Host, HostBinding } from "@angular/core";
import { RouterOutlet } from '@angular/router';

import { fadeIn } from '../shared/animations/animation.animation';

@Component({
    selector: 'tm-main',
    templateUrl: './system.component.html',
    styleUrls: ['./system.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [fadeIn]
})
export class SystemComponent {
    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
      }
}