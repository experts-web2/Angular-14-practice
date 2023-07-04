import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/shared/services/data.service';
import { FormatingService } from 'src/shared/services/formating.service';
import { ImageService } from 'src/shared/services/image.service';
import { BLOG_POST } from '../../../../interfaces/blogs.interface';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass'],
})
export class BlogsComponent implements OnInit {
  blogPosts: BLOG_POST[];
  heading: string;
  description!: string;

  constructor(
    private dataService: DataService,
    private imageService: ImageService,
    public formatService: FormatingService
  ) {
    this.heading = APP_CONSTANTS.BLOGS;
    this.blogPosts = [];
  }

  ngOnInit(): void {
    this.getBlogPosts();
  }

  /**
   * Get Blog Posts
   */
  getBlogPosts() {
    this.dataService.blogs().subscribe((blogPosts: any) => {
      blogPosts.map((blogPost: BLOG_POST) => {
        this.blogPosts.push({
          title: blogPost.title,
          description: blogPost.body,
          image:
            this.imageService.randomBlogImages()[
              Math.floor(
                Math.random() * this.imageService.randomBlogImages().length
              )
            ],
        });
      });
      this.description = `Total Blogs : ${this.blogPosts.length}`;
    });
  }
}
