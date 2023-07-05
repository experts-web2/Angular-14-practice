import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/constants/api-base-url';
import { Users } from 'src/app/interfaces/users.interface';

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
}
