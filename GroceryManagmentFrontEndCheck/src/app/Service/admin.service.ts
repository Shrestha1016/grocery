import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticationService.userRole() === 'null') {
      return false;
    } else {
      return true;
    }

  }

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }
}
