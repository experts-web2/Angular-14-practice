import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardDetails } from 'src/app/interfaces/home.interface';

@Injectable()
export class DashboardService {
  constructor(public http: HttpClient) {}

  /**
   * Get Dashbaord Details
   * @returns
   */
  dashboardDetails(): DashboardDetails[] {
    return [
      { title: 'Total Orders', price: 111, icon: 'shopping_cart' },
      { title: 'Total Expenses', price: 222, icon: 'account_balance_wallet' },
      { title: 'Total Revenue', price: 333, icon: 'insert_chart ' },
      { title: 'New Users', price: 444, icon: 'person' },
    ];
  }
}
