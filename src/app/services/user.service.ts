import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from '../config/config';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  token: string;
  id: string;
  constructor(
    public http: HttpClient
  ) { }
  login(user: any) {
    let url = SERVER_URL + 'login';
    return this.http.post(url, user).pipe(map((res: any) => {
      this.user = res.user;
      this.token = res.token;
      this.id = res.id;
      console.log(res);
    }))

  }
}
