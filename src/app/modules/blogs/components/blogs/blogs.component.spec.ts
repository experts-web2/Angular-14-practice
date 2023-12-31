import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptionBarComponent } from 'src/shared/components/description-bar/description-bar.component';
import { BlogService } from 'src/shared/services/blogs.service';
import { BlogsComponent } from './blogs.component';
import { ImageService } from 'src/shared/services/image.service';
import { of } from 'rxjs';
import { FormatingService } from 'src/shared/services/formating.service';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/shared/modules/material.module';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;
  let dataService: BlogService;
  let imageService: ImageService;
  let formatService: FormatingService;
  beforeEach(async () => {
    dataService = jasmine.createSpyObj('DataService', ['blogs']);
    imageService = jasmine.createSpyObj('ImageService', ['randomBlogImages']);
    formatService = jasmine.createSpyObj('FormatingService', ['titleFormat']);

    await TestBed.configureTestingModule({
      declarations: [BlogsComponent, DescriptionBarComponent],
      providers: [BlogService, ImageService, FormatingService],
      imports: [HttpClientTestingModule,MatIconModule,MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(BlogService);
    imageService = TestBed.inject(ImageService);
    formatService = TestBed.inject(FormatingService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate blogPosts and set description', () => {
    const mockPosts = [
      { title: 'Test Blog 1', body: 'Test Body 1' },
      { title: 'Test Blog 2', body: 'Test Body 2' },
    ];
    spyOn(dataService, 'blogs').and.returnValue(of(mockPosts));

    const mockImages = [
      'https://i.ibb.co/SyTLZ8X/Best-Blogging-Platforms-featured-image.png',
      'https://i.ibb.co/Hg5R5d3/download.jpg',
      'https://i.ibb.co/cxCr8Xt/website-blog.jpg',
    ];
    spyOn(imageService, 'randomBlogImages').and.returnValue(mockImages);

    component.getBlogPosts();

    expect(component.blogPosts.length).toBe(mockPosts.length);
    expect(component.blogPosts[0].title).toBe(mockPosts[0].title);
    expect(component.blogPosts[0].description).toBe(mockPosts[0].body);

    const firstPostImage = component.blogPosts[0].image;
    expect(firstPostImage).toBeDefined();
    if (firstPostImage) {
      expect(mockImages).toContain(firstPostImage);
    }
    const expectedDescription = `Total Blogs: ${component.blogPosts.length}`;
    expect(component.description).toBe(expectedDescription);
  });
});
