import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/modules/users/interfaces/users.interface';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.sass'],
})
export class UserAvatarComponent implements OnInit {
  @Input() users: Users[] = [];
  constructor() {}

  ngOnInit(): void {}
}
