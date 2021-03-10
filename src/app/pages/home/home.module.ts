import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePages } from './home.pages'
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomePages
  ]
})
export class HomeModule { }
