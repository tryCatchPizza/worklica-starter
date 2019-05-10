import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class AlertService {
    message = new BehaviorSubject<number>(null);
}