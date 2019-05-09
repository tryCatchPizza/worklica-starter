import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private alertService: AlertService){ }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage: string;
                errorMessage = error.error.message;
                this.alertService.message.next(errorMessage);
                return throwError(errorMessage);
            })
        );
    }
}