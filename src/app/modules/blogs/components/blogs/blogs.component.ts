import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/shared/services/blogs.service';
import { FormatingService } from 'src/shared/services/formating.service';
import { ImageService } from 'src/shared/services/image.service';
import { Blogs } from '../../../../interfaces/blogs.interface';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass'],
})
export class BlogsComponent implements OnInit {
  blogPosts: Blogs[];
  heading: string;
  description!: string;

  constructor(
    private blogService: BlogService,
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
    this.blogService.blogs().subscribe(
      (blogPosts: Blogs[]) => {
        blogPosts.slice(0, 15).map((blogPost: Blogs) => {
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
        this.description = `Total Blogs: ${this.blogPosts.length}`;
      },
      (error: any) => {
        console.error('An error occurred while fetching blog posts:', error);
      }
    );
  }
}
