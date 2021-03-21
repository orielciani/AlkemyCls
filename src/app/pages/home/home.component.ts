import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public budgetservice: BudgetService,
    public userservice: UserService
  ) { }
  budget: any = [];
  colorBalance = 'text-success';
  income: number = 0;
  expense: number = 0;
  balance: number;
  ngOnInit(): void {
    this.getRecents();
    this.getBalance();
  }
  getBalance() {
    this.budgetservice.getBudget('income').subscribe((res: any) => {
      for (let i = 0; i < res.budgets.length; i++) {
          this.income += parseInt(res.budgets[i].amount);
      }
      this.budgetservice.getBudget('expense').subscribe((res: any) => {
        for (let i = 0; i < res.budgets.length; i++) {
          this.expense += parseInt(res.budgets[i].amount);
      }
      this.balance = this.income - this.expense;
      if (this.balance < 0 ) {
        this.colorBalance = 'text-danger';
      } else {
        this.colorBalance = 'text-success';
      }
      })
    })
  }
  getRecents() {
    this.budgetservice.getRecents().subscribe( (res: any) => {
      this.budget = res.budgets;
      console.log(res);
    }, err => {
      if ( err.status === 401 ) {
        this.userservice.logout();
      }
    } );
  }
}
