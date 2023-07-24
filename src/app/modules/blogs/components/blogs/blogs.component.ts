import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';
import { Subject, takeUntil } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { Blogs } from 'src/app/shared/interfaces/common.interface';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass'],
})
export class BlogsComponent implements OnInit {
  public blogPosts: Blogs[];
  public heading: string;
  public description!: string;
  private unsubscribe$ = new Subject();

  constructor(private commonService: CommonService) {
    this.heading = APP_CONSTANTS.BLOGS;
    this.blogPosts = [];
  }

  ngOnInit(): void {
    this.getBlogPosts();
  }

  /**
   * Get Blog Posts
   */
  getBlogPosts(): void {
    this.commonService
      .blogs()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (blogPosts: Blogs[]) => {
          blogPosts.slice(0, 15).map((blogPost: Blogs) => {
            this.blogPosts.push({
              ...blogPost,
              image:
                this.commonService.randomBlogImages()[
                  Math.floor(
                    Math.random() * this.commonService.randomBlogImages().length
                  )
                ],
            });
          });
          this.description = `${APP_CONSTANTS.TOTAL} ${APP_CONSTANTS.BLOGS}: ${this.blogPosts.length}`;
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
