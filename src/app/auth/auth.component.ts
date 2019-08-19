import { Component, ViewEncapsulation } from "@angular/core";

import { scale } from '../shared/animations/animation.animation';

@Component({
    selector: 'tm-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [scale]
})

export class AuthComponent {}