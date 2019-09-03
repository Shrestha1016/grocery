import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Service/authentication.service';
import { CustomerService } from '../Service/customer.service';
import { UserService } from '../Service/user.service';
import { userInfo } from '../Service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authenticate: AuthenticationService,
    private customerService: CustomerService,
    private userService: UserService
  ) { }


  user: userInfo;
  userRole = this.authenticate.userRole();
  userId = this.authenticate.getId();
    output : String;

  ngOnInit() {
    this.getData()
  }

  getData() {
    if (this.userRole === "null") {
      this.customerService.getcustomerByIdBackend(this.userId).subscribe(
        response => this.user = response
      )
    } else {
      this.userService.getUserByIdBackend(this.userId).subscribe(
        response => this.user = response
      )
    }
  }

  onSubmitUpdate() {
    if (this.userRole === "null") {
      this.customerService.updatecustomer(this.user,this.user.id).subscribe(
        response => this.output="Updated Successfully",error => this.output = "Error while Updating"
      )
    } else {
      this.userService.updateUser(this.user,this.user.id).subscribe(
        response => this.output="Updated Successfully",error => this.output = "Error while Updating"
      )
    }
  }

}
