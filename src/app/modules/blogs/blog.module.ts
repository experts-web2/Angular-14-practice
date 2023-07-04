import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/modules/shared.module';
import { BlogRoutingModule } from './blog.routing.module';
import { BlogsComponent } from './components/blogs/blogs.component';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, HttpClientModule, BlogRoutingModule, SharedModule],
  providers: [],
})
export class BlogModule {}
