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
        private router: Router

    ) { }

    firstName: String;
    lastName: String;
    userName: String;
    email: String;
    contact: Number;
    password: String;

    user: customerInfo = new customerInfo();

    confirmPasswordError = "**Password Doesn't Match";
    confirmPasswordErrorCheck: boolean = false;
    passwordError = "**Password must contain at least 8 character & contain both number and letter";
    passwordErrorCheck: boolean = false;

    
    contactError ="**Contact must contain 10 numbers"
    contactErrorCheck : boolean = false; 

    checkError : number;
    submitData() {
         this.checkError = 0;
       if(this.contactCheck())  { 
           this.checkError++;
       }
       
        if(this.checkPassword())    {
            this.checkError++ 
        }
       if(this.checkError === 0) {
            this.save();
        }

    }



    ngOnInit() {
    }


    save() {
        this.user.role = "customer";
        console.log(this.user);
        this.loginService.addcustomer(this.user)
            .subscribe(data => console.log(data), error => console.log(error));
        this.user = new userInfo();
        this.router.navigate(['/login'])

    }

    



    // Password Check
    i: number;
    check: number = 0;
    checkPassword() {
        if (this.user.password.length > 8) {
            this.check++;
        }

        for (this.i = 0; this.i < this.user.password.length; this.i++) {
            if ((this.user.password.charCodeAt(this.i) >= 48) && (this.user.password.charCodeAt(this.i) <= 57)) {
                this.check++;
                break;
            }
        }

        if (this.check !=2) {
            this.passwordErrorCheck = true;
            return true;
        }

        if (this.user.password !== this.user.confirmPassword) {
            console.log("Enter");
            this.confirmPasswordErrorCheck = true;
            console.log(this.passwordErrorCheck)
            return true;
        }
        return false;
    }


    numberCheck : number = 0;
    contactCheck()  { 
        if(this.user.contactNumber.length != 10)    { 
            this.contactErrorCheck = true;
            console.log("hello first Check");
            return true;
        }
        this.numberCheck = 0;
        for(this.i = 0; this.i < 10; this.i++)  { 
              if ((this.user.contactNumber.charCodeAt(this.i) >= 48) && (this.user.contactNumber.charCodeAt(this.i) <= 57)) {
                this.numberCheck++;
            }
        }

        if(this.numberCheck != 10)  { 
            console.log("hello second Check");
            this.contactErrorCheck = true;
            return true;
        }   else    { 
            this.contactErrorCheck = false;
            console.log("hello third Check");
            return false;
        }
    }

}
