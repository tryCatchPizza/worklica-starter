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

    
}
