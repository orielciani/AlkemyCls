import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: 'pages', component: PagesComponent, children: [
  {
    path: `home`,
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomeModule)
  },
  {
    path: `crud`,
    loadChildren: () =>
      import("./crud/crud.module").then((m) => m.CrudModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` },
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesPages { }
