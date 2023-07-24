import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';
import { Subject, takeUntil } from 'rxjs';
import { CommonService } from '../../../../services/common.service';
import {
  Blogs,
  DashboardDetails,
} from 'src/app/shared/interfaces/common.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  heading: string;
  description: string;
  recentBlogPosts: Blogs[];
  dashboardDetails: DashboardDetails[];
  private unsubscribe$ = new Subject();

  constructor(private commonService: CommonService) {
    this.heading = APP_CONSTANTS.Home;
    this.description = APP_CONSTANTS.HOME_PAGE_DESCRIPTION;
    this.dashboardDetails = [];
    this.recentBlogPosts = [];
  }

  ngOnInit(): void {
    this.dashboardDetails = this.commonService.dashboardDetails();
    this.getRecentBlogs();
  }

  /**
   * Recent Blogs List
   */
  getRecentBlogs(): void {
    this.commonService
      .blogs()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (posts: any) => {
          posts.slice(0, 12).map((post: Blogs) => {
            this.recentBlogPosts.push({
              ...post,
              image:
                this.commonService.randomBlogImages()[
                  Math.floor(
                    Math.random() * this.commonService.randomBlogImages().length
                  )
                ],
            });
          });
        },
        error: (error) => {
          console.error(APP_CONSTANTS.ERROR, error);
        },
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
