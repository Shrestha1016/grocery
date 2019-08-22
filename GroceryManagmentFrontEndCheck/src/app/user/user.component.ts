import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { userInfo } from '../Service/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userss : userInfo[];

  constructor( private userService : UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers() {
    this.userService.getUsersFromBackend().subscribe (
      response => this.handleSuccessfullResponse(response)
    )
    
  }

  handleSuccessfullResponse(response) {
    this.userss = response;
  }
}
