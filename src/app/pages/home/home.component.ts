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
  ngOnInit(): void {
    this.budget = this.budgetservice.budget;
  }

}
