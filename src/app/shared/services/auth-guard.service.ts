import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const requiredRole = route.data.role;
        const userRole = this.authService.getRoleFromToken();
        if (!requiredRole) {
            return true;
        }
        if ((requiredRole.filter(r => r === userRole)).length !== 0) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
