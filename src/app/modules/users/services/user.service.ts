import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/constants/api-base-url';
import { Users } from 'src/app/modules/users/interfaces/users.interface';

@Injectable()
export class UserService {
  constructor(public http: HttpClient) {}

  /**
   * Get Users List
   * @returns
   */
  users(): Observable<Users[]> {
    return this.http.get<Users[]>(API_URL.base + API_URL.users);
  }

  /**
   * Random Users Avatar
   * @returns
   */
  randomUsersAvatar() {
    return [
      'https://i.postimg.cc/Z5zcQQx7/How-tracking-user-behavior-on-your-website-can-improve-customer-experience.png',
      'https://i.postimg.cc/BvqCS1y2/images-1.jpg',
      'https://i.postimg.cc/rpQNKwX3/images.jpg',
      'https://i.postimg.cc/KzW7DpY5/photo-1494790108377-be9c29b29330.jpg',
      'https://i.postimg.cc/4dybtRXd/photo-1633332755192-727a05c4013d.jpg',
      'https://i.postimg.cc/wxkDP4MF/images-2.jpg',
    ];
  }
}
