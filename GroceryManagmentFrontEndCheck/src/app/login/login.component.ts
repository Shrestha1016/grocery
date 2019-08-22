import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../Service/sidebar.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    userName: String = null;
    password: String = null;

    loginInfo() {

    }
    constructor() { }

    ngOnInit() {
    }

}
