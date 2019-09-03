import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router : Router) {

  }

  getDatas(user, role,id) {
    sessionStorage.setItem("authenticatedUser", user);
    if (role === "CUSTOMER") {
      sessionStorage.setItem("role", "null")
    }
    else {
      sessionStorage.setItem("role", role);
    }
    sessionStorage.setItem("id",id);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  userRole() {
    let userRole = sessionStorage.getItem('role')
    return userRole;
  }


  getUser() {
    return sessionStorage.getItem('authenticatedUser');
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('role');
    this.router.navigate(['/login'])
  }

  getId() {
    return sessionStorage.getItem('id')
  }

}
