import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DescriptionBarComponent } from '../components/description-bar/description-bar.component';
import { HeaderComponent } from '../components/header/header.component';
import { DataService } from '../services/data.service';
import { FormatingService } from '../services/formating.service';
import { ImageService } from '../services/image.service';
import { MaterialModule } from './material.module';

const SHARED_MODULES = [MaterialModule, CommonModule, HttpClientModule];
const SHARED_COMPONENTS = [HeaderComponent, DescriptionBarComponent];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [SHARED_MODULES],
  exports: [SHARED_MODULES, SHARED_COMPONENTS],
  providers: [FormatingService, ImageService, DataService],
})
export class SharedModule {}
