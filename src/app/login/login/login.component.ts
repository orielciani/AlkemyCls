import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    public userservice: UserService,
    public router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl(''),
    });
   }

  ngOnInit(): void {
  }
  login(user: any) {
     this.userservice.login(user).subscribe( (res: any) => {
       console.log('Logeado con exito...');
     }, (err: any) => {
      console.log(err);
      console.log(user);
    } )
  }
  saveForm() {
    if (this.form.status === 'VALID' ) {
      this.login(this.form.value);
    }
  }
}
