import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    jwtHelper = new JwtHelperService();

    constructor(
        private http: HttpClient,
        private cookieService: CookieService,
        private router: Router
    ) { }

    login(user: User) {
        return this.http.post<any>('http://localhost:3000/login', user).pipe(map(loginInfo => {
            return this.processAuthInfo(loginInfo);
        }));
    }

    processAuthInfo(authInfo: any) {
        if (authInfo.accessToken != null) {
            const accessToken = authInfo.accessToken;
            this.cookieService.set('access-token', accessToken);
            return true;
        } else {
            return false;
        }
    }

    getUserInfoFromToken(): string {
        return this.jwtHelper.decodeToken(this.cookieService.get('access-token')).role;
    }

    logout() {
        this.cookieService.deleteAll();
        this.router.navigate(['/login']);
    }
}
