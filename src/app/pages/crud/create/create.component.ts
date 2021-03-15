import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BudgetService } from 'src/app/services/budget.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  tableForm: FormGroup;
  constructor(
    public budgetservice: BudgetService,
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
  }
  postBudget(budget: any) {
    this.budgetservice.postBudget(budget, budget._id).subscribe( (res: any) => {
      console.log(res);
    } )
  }
  guardarCambios() {
    console.log(this.form.value);
    console.log(this.form.status);
    if (this.form.status === 'VALID' ) {
      this.postBudget(this.form.value);
    }
  }

}
