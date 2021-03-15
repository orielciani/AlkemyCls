import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: any;;
  constructor(
    public main: MainService,
    public userservice: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userservice.user;
  }
  openNavbar() {
    this.main.open = !this.main.open;
  }
  menu = [
    {
      'name': 'Home',
      'route': 'home',
      'icon': 'bi bi-house-fill'
    },
    {
      'name': 'Operaciones',
      'route': 'crud',
      'icon': 'bi bi-pencil-square'
    }
  ]
}

