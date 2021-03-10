import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public main: MainService
  ) { }

  ngOnInit(): void {
  }
  openNavbar() {
    this.main.open = !this.main.open;
    console.log(this.main.open);
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

