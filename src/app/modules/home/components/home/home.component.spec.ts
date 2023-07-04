import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { MetaService, NibrasService } from 'src/app/services';
import { TitleBarComponent } from 'src/app/shared/components/title-bar/title-bar.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let nibras: NibrasService;
  let meta: MetaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, TitleBarComponent ],
      providers: [NibrasService, MetaService],
      imports: [HttpClientTestingModule, MaterialModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    nibras = TestBed.inject(NibrasService);
    meta = TestBed.inject(MetaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getRecentBlogs should have been called', () => {
    const spy = spyOn(component, 'getRecentBlogs').and.callThrough()
    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  });
});
