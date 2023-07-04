import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { UsersComponent } from './components/users/users.component';
import { applicationRoutesConstants } from './constants/routes.constants';

const routes: Routes = [
  { path: applicationRoutesConstants.home, component: HomeComponent },
  { path: applicationRoutesConstants.blogs, component: BlogsComponent },
  { path: applicationRoutesConstants.users, component: UsersComponent },
  {
    path: '**',
    redirectTo: applicationRoutesConstants.home,
    pathMatch: 'full',
  },
  { path: '', redirectTo: applicationRoutesConstants.home, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
