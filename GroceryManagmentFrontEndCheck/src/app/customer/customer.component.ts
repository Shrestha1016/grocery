import { Component, OnInit } from '@angular/core';
import { CustomerService, customerInfo } from '../Service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.checkCustomerService();

  }

  customers: customerInfo[];
  customer: customerInfo;

  updateClicked: boolean = false;
  displayClicked: boolean = true;
  addClicked: boolean = false;
  addButton: boolean = true;

  output: String;

  newCustomer: customerInfo = new customerInfo();

  checkCustomerService() {
    this.customerService.getcustomersFromBackend().subscribe(
      response => this.customers = response
    );
  }

  updateEventClicked(id: number, name: String) {
    this.updateClicked = true;
    this.displayClicked = this.addClicked = this.addButton = false;

    this.customerService.getcustomerByIdBackend(id).subscribe(
      response => this.customer = response
    )
  }


  onSubmitUpdate() {
    this.customerService.updatecustomer(this.customer, this.customer.id).subscribe(
      response => {
        this.output = "Updated Successfully", error => this.output = "Error while Updating";
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkCustomerService();
      }
    )
  }

  // addEventClicked() {
  //   this.addClicked = true;
  //   this.updateClicked = this.displayClicked = this.addButton = false;
  // }

  // onSubmitAdd() {
  //   console.log(this.newCustomer)
  //   this.customerService.addcustomer(this.newCustomer).subscribe(
  //      response => {
  //       this.output = "Add Successfully", error => this.output = "Error while Updating";
  //       this.displayClicked = this.addButton = true;
  //       this.updateClicked = this.addClicked = false;
  //       this.checkCustomerService();
  //     }
  //   )
  // }

  deleteEventClicked(id: number) {
    this.customerService.deletecustomer(id).subscribe(
      response => {
        this.output = "Deleted Successfully", error => this.output = "Error while Deleting";
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkCustomerService();
      }
    )
  }

}
