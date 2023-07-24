import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DescriptionBarComponent } from '../components/description-bar/description-bar.component';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialModule } from './material.module';
import { ShortTitlePipe } from '../pipes/short-title.pipe';

const SHARED_MODULES = [MaterialModule, CommonModule, HttpClientModule];
const SHARED_COMPONENTS = [
  HeaderComponent,
  DescriptionBarComponent,
  ShortTitlePipe,
];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [SHARED_MODULES],
  exports: [SHARED_MODULES, SHARED_COMPONENTS],
  providers: [],
})
export class SharedModule {}
