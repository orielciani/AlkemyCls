import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudPages } from './crud.pages';
import { TableComponent } from './table/table.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CRUDComponent } from './crud.component';



@NgModule({
  declarations: [TableComponent, CreateComponent, CRUDComponent],
  imports: [
    CommonModule,
    CrudPages,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
