import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/constants/api-base-url';
import { Blogs, DashboardDetails } from '../shared/interfaces/common.interface';

@Injectable()
export class CommonService {
  constructor(public http: HttpClient) {}

  /**
   * Get Blogs List
   * @returns
   */
  blogs(): Observable<Blogs[]> {
    return this.http.get<Blogs[]>(API_URL.base + API_URL.posts);
  }

  /**
   * Ge
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

  /**
   * Random Blog Images
   * @returns
   */
  randomBlogImages() {
    return [
      'https://i.postimg.cc/Pqv8kWz6/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1520x800.png',
      'https://i.postimg.cc/j2cDhZtj/20150824161251-wordpress-blogging-writing-typing-macbook-laptop-computer-technology-business-working.jpg',
      'https://i.postimg.cc/QxMC3gjp/download.jpg',
      'https://i.postimg.cc/SQ1qcBpM/images-1.jpg',
      'https://i.postimg.cc/J49L2j07/images-2.jpg',
      'https://i.postimg.cc/nzR8YDNJ/images.jpg',
      'https://i.postimg.cc/VkyxR1Zd/why-blog.jpg',
    ];
  }
}
