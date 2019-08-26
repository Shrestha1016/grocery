import { Component, OnInit } from '@angular/core';
import { SalesService, Sales } from '../Service/sales.service';
import { error } from 'util';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.checkSalesService();
  }

  sales: Sales[];
  sale: Sales;

  id: number;
  prod_Name: String;
  cat_id: number;
  Amount: number;
  price: number;
  quantity: number;
  output : String;



  newSales: Sales;
  submitted = false;
  

  newCustomer(): void {
    this.submitted = false;
    this.newSales = new Sales();
  }


  checkSalesService() {

    this.salesService.getSaleslist().subscribe(
      response => this.sales = response
    );

    this.salesService.getSalesByIdBackend(this.id).subscribe(
      response => this.sale = response
    )

    this.salesService.addSales(this.newSales).subscribe(
      response => this.output = "Added Successfully", error => this.output = "Error while Adding"
    )

     this.salesService.updateSales(this.newSales,this.id).subscribe(
      response => this.output = "Updated Successfully", error => this.output = "Error while Updating"
    )

    this.salesService.deleteSales(this.id).subscribe(
      response => this.output = "Deleted Successfully", error => this.output = "Error while Deleting"
    )
    


  }

}
