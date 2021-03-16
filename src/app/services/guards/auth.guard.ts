import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (public userservice: UserService, public router: Router) {

  }
  canActivate(
  ) {
    if ( this.userservice.isAuthenticated() ) {
      console.log('NEgativo');
      this.router.navigate(['/auth/login']);
      return false;
    }
    console.log('positivo')
    return true;
  }

}
