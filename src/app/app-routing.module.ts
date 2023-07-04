import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { applicationRoutesConstants } from './constants/routes.constants';

const routes: Routes = [
  {
    path: applicationRoutesConstants.home,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: applicationRoutesConstants.users,
    loadChildren: () =>
      import('./modules/users/user.module').then((m) => m.UserModule),
  },
  {
    path: applicationRoutesConstants.blogs,
    loadChildren: () =>
      import('./modules/blogs/blog.module').then((m) => m.BlogModule),
  },
  { path: '', redirectTo: applicationRoutesConstants.home, pathMatch: 'full' },
  { path: '**', redirectTo: applicationRoutesConstants.home },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
