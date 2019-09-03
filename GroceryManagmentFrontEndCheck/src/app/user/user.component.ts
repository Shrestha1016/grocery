import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { userInfo } from '../Service/login.service';
import { Debtorservice, Debtors } from '../Service/debtor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: userInfo[];
  user: userInfo;

  showOutput : boolean = false;
  output: String;

  updateClicked: boolean = false;
  displayClicked: boolean = true;
  addClicked: boolean = false;
  addButton: boolean = true;

  newUser: userInfo = new userInfo();


  constructor(private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllUsers();

  }


  getAllUsers() {
    this.userService.getUsersFromBackend().subscribe(
      response => {
        this.users = response;
      }
    )
    console.log(this.users)

  }

  updateEventClicked(id: number) {
    this.updateClicked = true;
    this.displayClicked = this.addClicked = this.addButton = this.showOutput = false;
    
    this.userService.getUserByIdBackend(id).subscribe(
      response => {
        this.user = response;
      }
    )
  }


  onSubmitUpdate() {
    console.log("hello");
    this.userService.updateUser(this.user, this.user.id).subscribe(
      response => {
        this.output = "Updated Successfully", error => this.output = "Error while Updating";
        this.displayClicked = this.addButton = this.showOutput =true;
        this.updateClicked = this.addClicked = false;
        this.getAllUsers();
      }
    )
  }

  addEventClicked() {
    this.addClicked = this.showOutput = true;
    this.updateClicked = this.displayClicked = this.addButton =this.showOutput = false;
  }

  onSubmitAdd() {
    console.log("hello");
    console.log(this.newUser)
    this.userService.addUser(this.newUser).subscribe(
      response => {
        this.output = "Added Successfully", error => this.output = "Error while Adding";
        this.displayClicked = this.addButton =this.showOutput = true;
        this.updateClicked = this.addClicked = false;
        this.getAllUsers();
      }
      
    )
     this.output = "Error while Adding";
       this.showOutput = true;
  }

  deleteEventClicked(id: number) {
    this.userService.deleteUser(id).subscribe(
      response => {
        this.output = "deleted Successfully", error => this.output = "Error while Deleting";
        this.displayClicked = this.addButton = this.showOutput =true;
        this.updateClicked = this.addClicked = false;
        this.getAllUsers();
      }
    )
  }


  checkRole(role)   {
    if(role ==="EMPLOYEE" || role=="Employee" ) { 
      return true;
    } else{ 
      return false;
    }
  }



}
