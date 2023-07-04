import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetaService, NibrasService } from 'src/app/services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockComponent } from 'ng-mocks';



import { BlogsComponent } from './blogs.component';
import { TitleBarComponent } from 'src/app/shared/components/title-bar/title-bar.component';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;
  let nibras: NibrasService;
  let meta: MetaService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsComponent, MockComponent(TitleBarComponent) ],
      providers: [NibrasService, MetaService],
      imports: [HttpClientTestingModule],

    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    nibras = TestBed.inject(NibrasService);
    meta = TestBed.inject(MetaService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should not be greater than 15', () => {
    let title = component.displayTitle('Lorem ipsum ditsu lorem');
    expect(title.length).toBeLessThan(16);
  });

  it('getBlogPost should have been called', () => {
    const spy = spyOn(component, 'getBlogPost').and.callThrough()
    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  });
});
