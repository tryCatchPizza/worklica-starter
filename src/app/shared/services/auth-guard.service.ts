import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }
}
