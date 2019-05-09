import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { UserRoutingModule } from './user-module.routing';
import { UserService } from './shared/services/user.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserRoutingModule
    ],
    declarations: [
        UsersComponent
    ],
    providers: [
        UserService,
    ]
})

export class UserModule {

}