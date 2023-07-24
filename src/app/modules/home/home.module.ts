import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { CommonService } from 'src/app/services/common.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    CommonModule,
  ],
providers: [CommonService]
})
export class HomeModule {}
