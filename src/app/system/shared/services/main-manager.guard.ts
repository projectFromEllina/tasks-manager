import { CanActivate,
        Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class MainManagerGuard implements CanActivate {

constructor( private router: Router) {}


canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if(user.access === 'manager') {
        return true;
    } else {
        this.router.navigate(['/not-found']);
        return false;
    }
}
}