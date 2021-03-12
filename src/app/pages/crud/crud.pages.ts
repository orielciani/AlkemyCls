import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CRUDComponent } from './crud.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: ``, component: CRUDComponent, children: [
      {
        path: 'create', component: CreateComponent
      },
      {
      path: 'income', component: TableComponent, data: {'type': 'income'}
    },
      {
      path: 'expense', component: TableComponent, data: {'type': 'expense'}
    },
  ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudPages { }
