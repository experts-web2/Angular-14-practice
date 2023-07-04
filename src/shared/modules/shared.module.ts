import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HeaderComponent } from '../components/header/header.component';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { DescriptionBarComponent } from '../components/description-bar/description-bar.component';
import { DataService } from '../services/data.service';
import { FormatingService } from '../services/formating.service';
import { ImageService } from '../services/image.service';

const SHARED_MODULES = [MaterialModule, CommonModule, HttpClientModule];
const SHARED_COMPONENTS = [
  HeaderComponent,
  SideNavComponent,
  DescriptionBarComponent,
];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [SHARED_MODULES],
  exports: [SHARED_MODULES, SHARED_COMPONENTS],
  providers: [FormatingService, ImageService, DataService],
})
export class SharedModule {}
