import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog.routing.module';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { CommonService } from 'src/app/services/common.service';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, HttpClientModule, BlogRoutingModule, SharedModule],
  providers: [CommonService],
})
export class BlogModule {}
