import { Component, Input, OnInit } from '@angular/core';
import { USER } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass'],
})
export class UserCardComponent implements OnInit {
  @Input() users: USER[] = [];
  constructor() {}

  ngOnInit(): void {}
}
