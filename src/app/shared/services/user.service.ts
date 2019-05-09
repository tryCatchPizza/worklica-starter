import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    users: User[] = [
        {
            username: 'admin',
            email: 'admin@worklica.hr',
            password: 'admin',
            role: 'Administrator'
        },
        {
            username: 'user',
            email: 'user@worklica.hr',
            password: 'user',
            role: 'User'
        }
    ];

    roles = ['Administrator', 'User'];


    constructor(private http: HttpClient) {

    }

    getUsers(): Observable<Array<User>> {
        return of(this.users).pipe(delay(1000));
    }

    getRoles(): Observable<Array<string>> {
        return of(this.roles);
    }
}
