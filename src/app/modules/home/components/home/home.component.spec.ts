import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptionBarComponent } from 'src/shared/components/description-bar/description-bar.component';

import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/shared/modules/material.module';
import { DataService } from 'src/shared/services/data.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, DescriptionBarComponent],
      providers: [DataService],
      imports: [HttpClientTestingModule, MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
