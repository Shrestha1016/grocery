import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../Service/sidebar.service';
import { FormControl } from '@angular/forms';
import { ConsoleReporter } from 'jasmine';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    

    userName : String = null ;
    password : String  = null;

    loginInfo() {
        console.log(this.userName);
        console.log(this.password);
    }
    constructor() { }

    ngOnInit() {
    }

}
