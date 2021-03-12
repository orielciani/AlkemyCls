import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPages } from './register.pages';
import { RegisterComponent } from './register.component';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterPages
  ]
})
export class RegisterModule { }
