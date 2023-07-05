import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';
import { Blogs } from 'src/app/interfaces/blogs.interface';
import { DashboardDetails } from 'src/app/interfaces/home.interface';
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
  recentBlogPosts: Blogs[];
  dashboardDetails: DashboardDetails[];

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
      posts.slice(0, 12).map((post: Blogs) => {
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
