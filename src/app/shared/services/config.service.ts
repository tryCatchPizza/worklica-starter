import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationSettings } from '../models/application-settings';

@Injectable()
export class ConfigService {

    public config: ApplicationSettings;

    constructor(private http: HttpClient) { }

}
