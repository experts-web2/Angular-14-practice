import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/constants/api-base-url';
import { Blogs } from 'src/app/interfaces/blogs.interface';

@Injectable()
export class BlogService {
  constructor(public http: HttpClient) {}

  /**
   * Get Blogs List
   * @returns
   */
  blogs(): Observable<Blogs[]> {
    return this.http.get<Blogs[]>(API_URL.base + API_URL.posts);
  }
}
