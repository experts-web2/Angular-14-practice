import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';
import { BLOG_POST } from 'src/app/interfaces/blogs.interface';
import { HOME_DASHBHBOARD_DETAILS } from 'src/app/interfaces/home.interface';
import { DataService } from 'src/shared/services/data.service';
import { FormatingService } from 'src/shared/services/formating.service';
import { ImageService } from 'src/shared/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  heading: string;
  description: string;
  recentBlogPosts: BLOG_POST[];
  dashboardDetails: HOME_DASHBHBOARD_DETAILS[];

  constructor(
    private dataService: DataService,
    private imageService: ImageService,
    public formatService: FormatingService
  ) {
    this.heading = APP_CONSTANTS.Home;
    this.description = APP_CONSTANTS.HOME_PAGE_DESCRIPTION;
    this.dashboardDetails = [];
    this.recentBlogPosts = [];
  }

  ngOnInit(): void {
    this.dashboardDetails = this.dataService.dashboardDetails();
    this.getRecentBlogs();
  }

  /**
   * Recent Blogs List
   */
  getRecentBlogs() {
    this.dataService.blogs().subscribe((posts: any) => {
      posts.slice(0, 9).map((post: BLOG_POST) => {
        this.recentBlogPosts.push({
          title: post.title,
          description: post.body,
          image:
            this.imageService.randomBlogImages()[
              Math.floor(
                Math.random() * this.imageService.randomBlogImages().length
              )
            ],
        });
      });
    });
  }
}
