import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/modules/shared.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersComponent } from './components/users/users.component';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
    declarations: [UsersComponent,UserCardComponent],
    imports: [UserRoutingModule, HttpClientModule, SharedModule, CommonModule],
    providers: [],
})
export class UserModule { }
