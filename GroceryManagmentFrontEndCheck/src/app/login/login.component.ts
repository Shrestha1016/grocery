import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { userInfo, LoginService } from '../Service/login.service';
import { AuthenticationService } from '../Service/authentication.service';
import { Router } from '@angular/router';
import { CustomerService } from '../Service/customer.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private loginService: LoginService,
        private authenticationService: AuthenticationService,
        private router: Router,
        private customerService: CustomerService) { }

    ngOnInit() {
    }

    userName: String = null;
    password: String = null;
    email: String = null;
    adminClicked = false;
    customerClicked = true;
    user: userInfo;
    message: String = "Please Enter Valid Data";
    showMessage: boolean = false;

    onAdminClick() {
        this.customerClicked = false;
        this.adminClicked = true;
    }

    onCustomerClicked() {
        this.customerClicked = true;
        this.adminClicked = false;
    }

    loginInfo() {
        this.getAdminData();
    }

    getAdminData() {
        this.loginService.getUserByEmail(this.userName).subscribe(
            response => {
                this.user = response;
                this.Login()
            }
        )
    }

    Login() {
        if (this.userName === this.user.email && this.password === this.user.password) {
            this.authenticationService.getDatas(this.user.firstName, this.user.role, this.user.id);
            this.router.navigate(['/page'])
        } else {
            this.showMessage = true;
        }
    }


    customerloginInfo() {
        this.getCustomerData();
    }

    getCustomerData() {
        this.customerService.getCustomerByEmail(this.userName).subscribe(
            response => {
                this.user = response;
                if(this.user == null)   {
                    this.showMessage = true
                }
                this.Login()
            }

        )
    }




}
