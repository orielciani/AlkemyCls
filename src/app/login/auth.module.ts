import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPages } from './auth.pages';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthPages
  ]
})
export class AuthModule { }
