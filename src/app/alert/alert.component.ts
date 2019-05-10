import { Component } from '@angular/core';
import { AlertService } from '../shared/services/alert.service';
import { timer } from 'rxjs';

@Component({
    selector: 'alert-component',
    templateUrl: './alert.component.html'
})
export class AlertComponent {

    errorMessage: string;

    constructor(private alertService: AlertService) {
    }
}