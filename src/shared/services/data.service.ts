import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/constants/api-base-url';

@Injectable()
export class DataService {
  constructor(public http: HttpClient) {}

  /**
   * Get Blogs List
   * @returns
   */
  blogs() {
    return this.http.get(API_URL.base + API_URL.posts);
  }

  /**
   * Get Users List
   * @returns
   */
  users() {
    return this.http.get(API_URL.base + API_URL.users);
  }

  /**
   * Get Photos List
   * @returns
   */
  photos() {
    return this.http.get(API_URL.base + API_URL.photos);
  }

  /**
   * Get Dashbaord Details
   * @returns
   */
  dashboardDetails() {
    return [
      { title: 'Total Orders', price: 111, icon: 'shopping_cart' },
      { title: 'Total Expenses', price: 222, icon: 'account_balance_wallet' },
      { title: 'Total Revenue', price: 333, icon: 'insert_chart ' },
      { title: 'New Users', price: 444, icon: 'person' },
    ];
  }
}
