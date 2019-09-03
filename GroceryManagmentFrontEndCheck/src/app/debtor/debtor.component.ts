import { Component, OnInit } from '@angular/core';
import { Debtorservice, Debtors } from '../Service/debtor.service';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-debtor',
  templateUrl: './debtor.component.html',
  styleUrls: ['./debtor.component.css']
})
export class DebtorComponent implements OnInit {

  constructor(private debtorService: Debtorservice,
    private router: Router) { }


  debtorData: Debtors[];
  debtor: Debtors;

  output: String;


  newDebtor: Debtors = new Debtors();


  updateClicked: boolean = false;
  displayClicked: boolean = true;
  addClicked: boolean = false;
  addButton: boolean = true;

  ngOnInit() {
    this.checkDebtor()
  }


  checkDebtor() {
    this.debtorService.getDebtorlist().subscribe(
      response => this.debtorData = response
    );
  }

  updateEventClicked(id) {
    this.updateClicked = true;
    this.displayClicked = this.addClicked = this.addButton = false;
    this.debtorService.getDebtorByIdBackend(id).subscribe(
      response => this.debtor = response
    )
  }

  onSubmitUpdate() {
    this.debtorService.updateDebtor(this.debtor, this.debtor.id).subscribe(
      response => {
        this.output = "Updated Successfully", error => this.output = "Error while Updating";
        this.updateClicked = this.addClicked = false;
        this.displayClicked = this.addButton = true;
        this.checkDebtor();
      }
    )

  }


  deleteEventClicked(id: number) {
    this.debtorService.deleteDebtor(id).subscribe(
      response => {
        this.output = "Deleted Successfully", error => this.output = "Error while Deleting";
        this.updateClicked = this.addClicked = false;
        this.displayClicked = this.addButton = true;

        this.checkDebtor();
      }
    )
    this.router.navigate(['/debtor']);
  }

  addEventClicked() {
    this.addClicked = true;
    this.updateClicked = this.displayClicked = this.addButton = false;
  }

  onSubmitAdd() {
    this.debtorService.addDebtor(this.newDebtor).subscribe(
      response => {
        this.output = "Added Successfully", error => this.output = "Error while Adding";
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkDebtor();
      }
    )
  }


}
