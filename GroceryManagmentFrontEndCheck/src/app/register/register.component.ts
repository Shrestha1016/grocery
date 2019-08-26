import { Component, OnInit } from '@angular/core';
import { LoginService, userInfo } from '../Service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private loginService: LoginService,
            private router : Router
        
        ) { }

    firstName: String;
    lastName: String;
    userName: String;
    email: String;
    contact: Number;
    password: String;

    user: userInfo;
    submitted = false;

    newCustomer(): void {
        this.submitted = false;
        this.user = new userInfo();
    }



    submitData() {
        this.save();
    }



    ngOnInit() {
    }


    save() {
        this.user.role="customer";
        this.loginService.createCustomer(this.user)
            .subscribe(data => console.log(data), error => console.log(error));
        this.user = new userInfo();
        this.router.navigate(['/login'])

    }

}
