import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  budget = [];
  type: string;
  constructor(
    public budgetservice: BudgetService,
    public activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.type = this.activatedroute.snapshot.data.type;
    this.getBudget();
  }
  getBudget() {
    this.budgetservice.getBudget(this.type).subscribe((res: any) => {
      this.budget = res.budget;
    })
  }
}
