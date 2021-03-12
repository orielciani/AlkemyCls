import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SERVER_URL } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budget = [];
  constructor(
    public http: HttpClient
  ) {
  }
  getBudget(type: string) {
    let url = SERVER_URL + 'budget/user/user/' + type;
    return this.http.get(url);
  }
  getRecents() {

  }
  postBudget(budget: any, id: string) {
    let url = SERVER_URL + 'budget/create';
    return this.http.post(url, budget);
  }
  putBudget(budget: any, id: string) {
    let url = SERVER_URL + 'budget/adjust/' + id;
    return this.http.put(url, budget);
  }
  deleteBudget(id: any) {
    let url = SERVER_URL + 'budget/delete/' + id;
    return this.http.delete(url);
  }
}
