import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DescriptionBarComponent } from '../components/description-bar/description-bar.component';
import { HeaderComponent } from '../components/header/header.component';
import { BlogService } from '../services/blogs.service';
import { DashboardService } from '../services/dashboard.service';
import { FormatingService } from '../services/formating.service';
import { ImageService } from '../services/image.service';
import { UserService } from '../services/users.service';
import { MaterialModule } from './material.module';

const SHARED_MODULES = [MaterialModule, CommonModule, HttpClientModule];
const SHARED_COMPONENTS = [HeaderComponent, DescriptionBarComponent];
const SHARED_SERVICES = [
  FormatingService,
  ImageService,
  BlogService,
  DashboardService,
  UserService,
];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [SHARED_MODULES],
  exports: [SHARED_MODULES, SHARED_COMPONENTS],
  providers: [SHARED_SERVICES],
})
export class SharedModule {}
