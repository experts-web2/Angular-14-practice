import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { UserRoutingModule } from './user.routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [UsersComponent, UserAvatarComponent],
  imports: [UserRoutingModule, HttpClientModule, SharedModule, CommonModule],
  providers: [DatePipe, UserService],
})
export class UserModule {}
