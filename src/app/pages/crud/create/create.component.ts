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
  class: any[] = [];
  newClass = false;
  constructor(
    public budgetservice: BudgetService,
    public userservice: UserService
  ) {
    this.form = new FormGroup({
      user: new FormControl(this.userservice.user.user),
      concept: new FormControl(''),
      amount: new FormControl(''),
      date: new FormControl(''),
      type: new FormControl(''),
      class: new FormControl('')
    });
  }

  ngOnInit(): void {
  }
  getClass(type: string) {
    this.class = [];
    this.budgetservice.getClass().subscribe((res: any) => {
      for (let i = 0; i < res.class.length; i++) {
        const item = res.class[i];
        if( item.type === type ) {
          this.class.push(item.class);
          this.class = this.class.filter((v, i, a) => a.indexOf(v) === i);
          console.log(this.class)
        }

      }
    })
  }
  newClassFunction(yes: string) {
    if ( yes === 'Nueva categoria' ) {
      this.newClass = true;
    } else {
      this.newClass = false;
    }
  }

  postBudget(budget: any) {
    this.budgetservice.postBudget(budget, budget._id).subscribe( (res: any) => {
      console.log('Se guardo correctamente');
    }, err => {
      console.log('No se pudo guardar correctamente');
    } )
  }
  guardarCambios() {
    if (this.form.status === 'VALID' ) {
      this.postBudget(this.form.value);
    }
  }

}
