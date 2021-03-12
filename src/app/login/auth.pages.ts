import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent, children: [
    {
      path: `register`,
      loadChildren: () =>
        import("./register/register.module").then((m) => m.RegisterModule)
    },
    {
    path: `login`,
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule)
  },
  { path: ``, redirectTo: `login`, pathMatch: `full` },
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPages { }
