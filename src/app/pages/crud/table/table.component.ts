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
      type: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.type = this.activatedroute.snapshot.data.type;
    this.getBudget();
  }
  getBudget() {
    this.budgetservice.getBudget(this.type).subscribe((res: any) => {
      this.budget = res.budget;
    })
  }
  deleteOperation(id: string) {
    this.budgetservice.deleteBudget(id).subscribe((res: any) => {
      this.getBudget();
    })
  }
  updateSelected(item: any, id: string) {
    this.selected = item;
    this.form.controls['user'].setValue(this.selected.user);
    this.form.controls['concept'].setValue(this.selected.concept);
    this.form.controls['amount'].setValue(this.selected.amount);
    this.form.controls['type'].setValue(this.selected.type);
    this.form.controls['date'].setValue(this.selected.date);
  }

  saveForm() {
    if ( this.form.status === "VALID" ) {
      this.budgetservice.putBudget(this.form.value, this.selected._id).subscribe((res: any) => {
        this.selected = {'concept': '', 'amount': '', 'date': '', 'type': '', '._id': '1'};
        this.getBudget();
      } )
    }
  }
  stopUpdate() {
    this.selected = {'concept': '', 'amount': '', 'date': '', 'type': '', '._id': '1'};
    this.getBudget();
  }

}
