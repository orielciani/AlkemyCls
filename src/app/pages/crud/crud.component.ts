import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CRUDComponent implements OnInit {
  form: FormGroup;
  operation = '';
  budget = [];
  constructor() {
    this.form = new FormGroup({
      concept: new FormControl(''),
      amount: new FormControl(''),
      date: new FormControl(''),
      type: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.budget = [{
      'concept': 'Comida',
      'amount': 100,
      'date': '2021-03-03',
      'type': 'expense'
    },
    {
      'concept': 'Renta',
      'amount': 5000,
      'date': '2021-03-03',
      'type': 'expense'
    },
    {
      'concept': 'Sueldo',
      'amount': 25000,
      'date': '2021-03-03',
      'type': 'income'
    },
  ]
  console.log(this.budget)
  }
  operations = [
    {
      'title': 'Crear',
      'text': 'Crear nuevo registro de operación',
      'icon': 'bi bi-plus-circle text-success',
      'action': 'new'
    },
    {
      'title': 'Ingresos',
      'text': 'Ver registros de ingresos',
      'icon': 'bi bi-cash text-success',
      'action': 'incomes'
    },
    {
      'title': 'Egresos',
      'text': 'Ver registros de egresos',
      'icon': 'bi bi-cash text-danger',
      'action': 'expenses'
    },
  ];
  guardarCambios() {
    console.log(this.form.value);
    console.log(this.form.status);
  }
}
