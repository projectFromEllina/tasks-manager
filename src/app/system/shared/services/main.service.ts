import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

import { User } from '../../../shared/models/user.model';


@Injectable({
    providedIn: 'root'
})
export class MainService {
    developers: User[];

    constructor (private http: HttpClient) {}

    getTeam() {
        return JSON.parse(window.localStorage.getItem('user')).team;
    }

    getDevForTeam(team: string): Observable<any> {
        return this.http.get<User>(`http://localhost:3000/users?team=${team}&access=developer`)
            .pipe(map(user => user));
    }
}