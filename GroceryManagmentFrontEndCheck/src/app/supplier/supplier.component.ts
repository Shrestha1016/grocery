import { Component, OnInit } from '@angular/core';
import { Supplier, SupplierService } from '../Service/supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(private supplierService: SupplierService,
    private router: Router) { }

  ngOnInit() {
    this.checkSupplier()
  }

  suppliers: Supplier[];
  supplier: Supplier;

  newSupplier: Supplier = new Supplier();


  updateClicked: boolean = false;
  displayClicked: boolean = true;
  addClicked: boolean = false;
  addButton: boolean = true;

  output: String;


  checkSupplier() {
    this.supplierService.getSupplierlist().subscribe(
      response => this.suppliers = response
    );
  }

  updateEventClicked(id) {
    this.updateClicked = true;
    this.displayClicked = this.addClicked = this.addButton = false;
    this.supplierService.getSupplierByIdBackend(id).subscribe(
      response => this.supplier = response
    )
  }

  onSubmitUpdate() {
    this.supplierService.updateSupplier(this.supplier, this.supplier.id).subscribe(
      response => {
        this.output = "Updated Successfully", error => this.output = "Error while Updating";
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkSupplier();
      }
    )
    this.router.navigate(['/supplier']);
  }


  deleteEventClicked(id: number) {
    this.supplierService.deleteSupplier(id).subscribe(
      response => {
        this.output = "Deleted Successfully", error => this.output = "Error while Deleting";
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkSupplier();
      }
    )
  }

  addEventClicked() {
    this.addClicked = true;
    this.updateClicked = this.displayClicked = this.addButton = false;
  }

  onSubmitAdd() {
    this.supplierService.addSupplier(this.newSupplier).subscribe(
      response => {
        this.output = "Added Successfully", error => this.output = "Error while Adding";
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkSupplier();
      }
    )
  }
}
