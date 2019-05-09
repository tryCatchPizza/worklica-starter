import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationSettings } from '../models/application-settings';

@Injectable()
export class ConfigService {

    public config: ApplicationSettings;

    constructor(private http: HttpClient) { }

    load() {
        return new Promise((resolve: () => void, reject: (reason: any) => void) => {
            const promise = this.http.get('worklica.config.json').toPromise();
            promise.then((data: ApplicationSettings) => {
                this.config = data;
                resolve();
            }).catch(error => reject(error));
        });
    }
}
