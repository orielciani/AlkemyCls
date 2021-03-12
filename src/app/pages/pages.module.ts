import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesPages } from './pages.pages';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PagesComponent, NavbarComponent],
  imports: [
    CommonModule,
    PagesPages,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
