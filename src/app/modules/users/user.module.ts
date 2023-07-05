import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/modules/shared.module';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { UsersComponent } from './components/users/users.component';
import { UserRoutingModule } from './user.routing.module';

@NgModule({
  declarations: [UsersComponent, UserAvatarComponent],
  imports: [UserRoutingModule, HttpClientModule, SharedModule, CommonModule],
  providers: [],
})
export class UserModule {}
