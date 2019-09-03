import { Component, OnInit } from '@angular/core';
import { LoginService, userInfo } from '../Service/login.service';
import { Router } from '@angular/router';
import { CustomerService, customerInfo } from '../Service/customer.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private loginService: CustomerService,
            private router : Router
        
        ) { }

    firstName: String;
    lastName: String;
    userName: String;
    email: String;
    contact: Number;
    password: String;

    user: customerInfo = new customerInfo();
 
    submitData() {
        this.save();
    }



    ngOnInit() {
    }


    save() {
        console.log("being submitted")
        this.user.role="customer";
        console.log(this.user);
        this.loginService.addcustomer(this.user)
            .subscribe(data => console.log(data), error => console.log(error));
        this.user = new userInfo();
        this.router.navigate(['/login'])

    }

}
