import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'auth', component: LoginComponent, children: [
  {
    path: `login`,
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule)
  },
  {
    path: `register`,
    loadChildren: () =>
      import("./register/register.module").then((m) => m.RegisterModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` },
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesPages { }
