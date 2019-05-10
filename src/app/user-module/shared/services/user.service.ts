import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/user';
import { Observable, of } from 'rxjs';
import { ApplicationSettings } from '../../../shared/models/application-settings';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    apiPath: string;

    constructor(
        private http: HttpClient,
        private appSettings: ApplicationSettings
    ) {
        this.apiPath = this.appSettings.webapi;
    }

    getUsers(): Observable<Array<User>> {
        return this.http.get<User[]>(this.apiPath + 'users');
    }

    getRoles(): Observable<Array<string>> {
        return this.http.get<Array<string>>(this.apiPath + 'roles');
    }

    async saveUser(user: User): Promise<any> {
        let response = await this.http.post(this.apiPath + 'users', user).toPromise();
        return response;
    }

    async editUser(user: User): Promise<any> {
        let response = await this.http.put(this.apiPath + 'users', user).toPromise();
        return response;
    }
}
