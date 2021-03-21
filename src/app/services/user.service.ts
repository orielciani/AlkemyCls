import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from '../config/config';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  token: string = 'a';
  id: string = 'a';
  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.loadStorage();
  }
  // login
  login(user: any) {
    let url = SERVER_URL + 'login';
    return this.http.post(url, user).pipe(map((res: any) => {
      this.saveStorage(res.user, res.token, res.id);
      this.router.navigate(['/pages/home']);
    }))
  }
  register(user: any) {
    let url = SERVER_URL + 'user/create';
    return this.http.post(url, user).pipe(map((res: any) => {
      this.router.navigate(['/auth/login']);
    }))
  }
  // logout
  logout() {
    this.user = '';
    this.token = '';
    this.id = '';
    localStorage.setItem('token', '');
    localStorage.setItem('id', '');
    localStorage.setItem('user', '');
  }
  // Save data
  saveStorage(user: any, token: string, id: string) {
    this.user = user;
    this.token = token;
    this.id = id;
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    localStorage.setItem('user', JSON.stringify(user));

  }
  // Load Storage
  loadStorage() {
    if ( !localStorage.getItem('token') ) {
      return;
    }
    if ( !localStorage.getItem('id') ) {
      return;
    }
    if ( !localStorage.getItem('user') ) {
      return;
    }
    if ( localStorage.getItem('token').length > 5 ) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.id = localStorage.getItem('id');
      this.token = localStorage.getItem('token');
      return;
    }
  }

  isAuthenticated(): boolean {
    if ( this.token.length < 5 ) return true;
  }








}
