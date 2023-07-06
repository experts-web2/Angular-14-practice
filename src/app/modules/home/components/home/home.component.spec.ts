import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptionBarComponent } from 'src/shared/components/description-bar/description-bar.component';

import { of } from 'rxjs';
import { MaterialModule } from 'src/shared/modules/material.module';
import { BlogService } from 'src/shared/services/blogs.service';
import { FormatingService } from 'src/shared/services/formating.service';
import { ImageService } from 'src/shared/services/image.service';
import { HomeComponent } from './home.component';
import { DashboardService } from 'src/shared/services/dashboard.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataService: BlogService;
  let imageService: ImageService;
  let formatService: FormatingService;

  beforeEach(async () => {
    dataService = jasmine.createSpyObj('DataService', ['blogs']);
    imageService = jasmine.createSpyObj('ImageService', ['randomBlogImages']);
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, DescriptionBarComponent],
      providers: [
        BlogService,
        FormatingService,
        ImageService,
        DashboardService,
      ],
      imports: [HttpClientTestingModule, MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(BlogService);
    imageService = TestBed.inject(ImageService);
    formatService = TestBed.inject(FormatingService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate recentBlogPosts with the latest 2 blog posts', () => {
    const mockPosts = [
      {
        title: 'Test Blog 1',
        body: 'Test Body 1',
      },
      {
        title: 'Test Blog 2',
        body: 'Test Body 2',
      },
    ];
    spyOn(dataService, 'blogs').and.returnValue(of(mockPosts));

    const mockImages = [
      'https://i.ibb.co/SyTLZ8X/Best-Blogging-Platforms-featured-image.png',
      'https://i.ibb.co/Hg5R5d3/download.jpg',
      'https://i.ibb.co/cxCr8Xt/website-blog.jpg',
    ];
    spyOn(imageService, 'randomBlogImages').and.callFake(() => mockImages);

    component.getRecentBlogs();

    expect(component.recentBlogPosts.length).toBe(2);
    expect(component.recentBlogPosts[0].title).toBe(mockPosts[0].title);
    expect(component.recentBlogPosts[0].description).toBe(mockPosts[0].body);
    const firstPostImage = component.recentBlogPosts[0].image;
    expect(firstPostImage).toBeDefined();
    if (firstPostImage) {
      expect(mockImages).toContain(firstPostImage);
    }
  });
});
