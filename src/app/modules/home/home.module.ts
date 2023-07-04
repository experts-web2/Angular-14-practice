import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/modules/shared.module';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
})
export class HomeModule {}
