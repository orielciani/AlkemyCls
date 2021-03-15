import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public budgetservice: BudgetService
  ) { }
  budget: any = [];

  income: number = 0;
  expense: number = 0;
  balance: number;
  ngOnInit(): void {
    this.getRecents();
    this.getBalance();
  }
  getBalance() {
    this.budgetservice.getBudget('income').subscribe((res: any) => {
      for (let i = 0; i < res.budget.length; i++) {
          this.income += parseInt(res.budget[i].amount);
      }
      this.budgetservice.getBudget('expense').subscribe((res: any) => {
        for (let i = 0; i < res.budget.length; i++) {
          this.expense += parseInt(res.budget[i].amount);
      }
      this.balance = this.income - this.expense;
      })
    })
  }
  getRecents() {
    this.budgetservice.getRecents().subscribe( (res: any) => {
      this.budget = res.budgets;
    } );
  }
}
