import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CRUDComponent implements OnInit {
  operation = '';
  budget = [];
  budgetToUpdate;
  id: string;
  constructor(
    public budgetservice: BudgetService,
    public activatedroute: ActivatedRoute,
    public router: Router
  ) {


  }

  ngOnInit(): void {

  }
  operations = [
    {
      'title': 'Crear',
      'text': 'Crear nuevo registro de operación',
      'icon': 'bi bigSize bi-plus-circle text-success',
      'route': 'create'
    },
    {
      'title': 'Ingresos',
      'text': 'Ver registros de ingresos',
      'icon': 'bi bigSize bi-cash text-success',
      'route': 'income'
    },
    {
      'title': 'Egresos',
      'text': 'Ver registros de egresos',
      'icon': 'bi bigSize bi-cash text-danger',
      'route': 'expense'
    },
  ];
  navigate(route: string) {
    this.router.navigate(['/pages/crud/' + route]);
  }

}
