import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPages } from './login.pages';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

LoginPages

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginPages,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
