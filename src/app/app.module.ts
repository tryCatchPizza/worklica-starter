import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from './shared/services/config.service';
import { ApplicationSettings } from './shared/models/application-settings';
import { AuthenticationService } from './shared/services/auth.service';
import { AuthInterceptor } from './shared/services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    {
      provide: ConfigService,
      useClass: ConfigService,
      deps: [HttpClient]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigService) => () => configService.load(),
      deps: [ConfigService, HttpClient],
      multi: true
    },
    {
      provide: ApplicationSettings,
      useFactory: (configService: ConfigService) => {
        return configService.config;
      },
      deps: [ConfigService, HttpClient]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: (authService: AuthenticationService) => {
        return new AuthInterceptor(authService);
      },
      deps: [AuthenticationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
