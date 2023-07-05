import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/constants/api-base-url';
import { Blogs } from 'src/app/interfaces/blogs.interface';
import { HOME_DASHBHBOARD_DETAILS } from 'src/app/interfaces/home.interface';
import { Users } from 'src/app/interfaces/user.interface';

@Injectable()
export class DataService {
  constructor(public http: HttpClient) {}

  /**
   * Get Blogs List
   * @returns
   */
  blogs(): Observable<Blogs[]> {
    return this.http.get<Blogs[]>(API_URL.base + API_URL.posts);
  }

  /**
   * Get Users List
   * @returns
   */
  users(): Observable<Users[]> {
    return this.http.get<Users[]>(API_URL.base + API_URL.users);
  }

  /**
   * Get Dashbaord Details
   * @returns
   */
  dashboardDetails(): HOME_DASHBHBOARD_DETAILS[] {
    return [
      { title: 'Total Orders', price: 111, icon: 'shopping_cart' },
      { title: 'Total Expenses', price: 222, icon: 'account_balance_wallet' },
      { title: 'Total Revenue', price: 333, icon: 'insert_chart ' },
      { title: 'New Users', price: 444, icon: 'person' },
    ];
  }
}
