import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    public userservice: UserService,
    public router: Router
  ) {
    this.form = new FormGroup({
      user: new FormControl(''),
      email: new FormControl(''),
      pass: new FormControl(''),
    });
   }

  ngOnInit(): void {
  }
  register(user: any) {
     this.userservice.register(user).subscribe( (res: any) => {
       console.log('Logeado con exito...');
     }, (err: any) => {
      console.log(err);
      console.log(user);
    } )
  }
  saveForm() {
    if (this.form.status === 'VALID' ) {
      this.register(this.form.value);
    }
  }
}
