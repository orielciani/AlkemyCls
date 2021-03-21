import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPages } from './register.pages';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterPages,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
