import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SERVER_URL } from '../config/config';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budget = [];
  result: number = 0;
  constructor(
    public http: HttpClient,
    public userservice: UserService
  ) {
  }

  getBudget(type: string) {
    let url = SERVER_URL + 'budget/user/' + type +  '?token=' + this.userservice.token;
    return this.http.get(url);
  }
  getClass() {
    let url = SERVER_URL + 'budget/class?token=' + this.userservice.token;
    return this.http.get(url);
  }
  getRecents() {
    let url = SERVER_URL + 'budget?token=' + this.userservice.token;
    return this.http.get(url);
  }
  postBudget(budget: any, id: string) {
    let url = SERVER_URL + 'budget/create' + '?token=' + this.userservice.token;
    return this.http.post(url, budget);
  }
  putBudget(budget: any, id: string) {
    let url = SERVER_URL + 'budget/adjust/' + id + '?token=' + this.userservice.token;
    return this.http.put(url, budget);
  }
  deleteBudget(id: any) {
    let url = SERVER_URL + 'budget/delete/' + id + '?token=' + this.userservice.token;
    return this.http.delete(url);
  }
}
