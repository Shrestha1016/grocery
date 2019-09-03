import { Component, OnInit } from '@angular/core';
import { CategorypassService } from '../Service/categorypass.service';
import { AuthenticationService } from '../Service/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authenticate: AuthenticationService) { }

  userName = this.authenticate.getUser();
  role = this.authenticate.userRole();
  checkRole: boolean;




  ngOnInit() {
    this.checkRole = false;

    this.checkNavigation();
    console.log(this.checkRole)
  }

  checkNavigation() {
    console.log(this.checkRole);
    if (this.role === "null") {
      this.checkRole = false;
    } else  {
      this.checkRole = true;
    }
    console.log(this.checkRole);
  }


}
