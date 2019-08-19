import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/internal/operators';

import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor (private http: HttpClient) {}

    getUserByLogin(login: string): Observable<any> {
        return this.http.get<User>(`http://localhost:3000/users?login=${login}`)
        .pipe(map((user) => user[0] ? user[0] : undefined));
    }

    createNewUser(user: User): Observable<any> {
        return this.http.post('http://localhost:3000/users', user);
    }
}