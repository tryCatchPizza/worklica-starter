import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable()
export class HttpErrorInterceptor {

    constructor(private alertService: AlertService){ }

    
}