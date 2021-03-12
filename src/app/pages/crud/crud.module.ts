import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudPages } from './crud.pages';
import { TableComponent } from './table/table.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TableComponent, CreateComponent],
  imports: [
    CommonModule,
    CrudPages,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
