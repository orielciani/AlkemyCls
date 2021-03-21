import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  form: FormGroup;
  budget = [];
  class = [];
  type: string;
  selected: any = {'concept': '', 'amount': '', 'date': '', 'type': '', '._id': '1'};
  constructor(
    public budgetservice: BudgetService,
    public activatedroute: ActivatedRoute,
    public userservice: UserService
  ) {
    this.form = new FormGroup({
      user: new FormControl(this.userservice.user.user),
      concept: new FormControl(''),
      amount: new FormControl(''),
      date: new FormControl(''),
      class: new FormControl(''),
      type: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.type = this.activatedroute.snapshot.data.type;
    this.getBudget();
    this.categories(this.type);
  }
  getBudget() {
    this.budgetservice.getBudget(this.type).subscribe((res: any) => {
      this.budget = res.budget;
    }, err => {
      if ( err.status === 401 ) {
        this.userservice.logout();

      }
    })
  }
  deleteOperation(id: string) {
    this.budgetservice.deleteBudget(id).subscribe((res: any) => {
      this.getBudget();
    }, err => {
      if ( err.status === 401 ) {
        this.userservice.logout();

      }
    })
  }
  updateSelected(item: any, id: string) {
    this.selected = item;
    this.form.controls['user'].setValue(this.selected.user);
    this.form.controls['concept'].setValue(this.selected.concept);
    this.form.controls['amount'].setValue(this.selected.amount);
    this.form.controls['type'].setValue(this.selected.type);
    this.form.controls['class'].setValue(this.selected.class);
    this.form.controls['date'].setValue(this.selected.date);
  }

  saveForm() {
    if ( this.form.status === "VALID" ) {
      this.budgetservice.putBudget(this.form.value, this.selected._id).subscribe((res: any) => {
        this.selected = {'concept': '', 'amount': '', 'date': '', 'type': '', '._id': '1'};
        this.getBudget();
        this.categories(this.type);
      } )
    }
  }
  stopUpdate() {
    this.selected = {'concept': '', 'amount': '', 'date': '', 'type': '', '._id': '1'};
    this.getBudget();
  }
  categories(type: string) {
    this.class = [];
    this.budgetservice.getBudget(type).subscribe((res: any) => {
      for (let i = 0; i < res.budget.length; i++) {
        const item = res.budget[i];
        if( item.type === type ) {
          this.class.push(item.class);
          this.class = this.class.filter((v, i, a) => a.indexOf(v) === i);
        }
      }
    }, err => {
      if ( err.status === 401 ) {
        this.userservice.logout();

      }
    })
  }
  filterBy(category: string) {
    if (category === 'Categoria') {
      this.getBudget();
    }
    this.budget = [];
    this.budgetservice.getBudget(this.type).subscribe((res: any) => {
      for (let i = 0; i < res.budgets.length; i++) {
        const item = res.budgets[i];
        if( item.class === category ) {
          this.budget.push(item);
        }
      }
    }, err => {
      if ( err.status === 401 ) {
        this.userservice.logout();

      }
    })
  }
}
