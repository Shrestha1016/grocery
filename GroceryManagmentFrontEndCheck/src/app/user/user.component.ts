import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { userInfo } from '../Service/login.service';
import { DebtorService, debtors } from '../Service/debtor.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : userInfo[];
  debtor : debtors[];


  constructor( private userService : UserService,
                private debtorService : DebtorService
    ) { }

  ngOnInit() {
    this.getAllUsers();
  
  }


  getAllUsers() {
    this.userService.getUsersFromBackend().subscribe (
      response => this.handleSuccessfullResponse(response)
    )
    
  }

  handleSuccessfullResponse(response) {
    this.users = response;
    this.debtor = null;
  }


  getAllDebtors() {
    this.debtorService.getDebtorlist().subscribe (
      response => this.debtor = response,
      this.users = null
    )
  }


}
