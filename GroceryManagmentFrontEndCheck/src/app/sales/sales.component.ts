import { Component, OnInit, Input } from '@angular/core';
import { SalesService, Sales } from '../Service/sales.service';
import { error } from 'util';
import { ProductService, productInfo } from '../Service/product.service';
import { Router } from '@angular/router';
import { TotalsalesService } from '../Service/totalsales.service';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private salesService: SalesService,
    private productService: ProductService,
    private router: Router,
    private totalSales : TotalsalesService
  ) { }

  ngOnInit() {
    this.checkSalesService();

  }

  sales: Sales[];
  sale: Sales;

  product: productInfo;



  updateClicked: boolean = false;
  displayClicked: boolean = true;
  addClicked: boolean = false;
  addButton: boolean = true;

  output: String;
  checktotalSales : number = 0;

  newSales: Sales = new Sales();


  checkSalesService() {
    this.salesService.getSaleslist().subscribe(
      response => {
        this.sales = response;
        this.getTotalAmount();
      }
    );
  }

  getTotalAmount()  { 
    for(let checkSale of this.sales )  { 
      this.checktotalSales = this.checktotalSales + checkSale.amount;
    }
  } 

  updateEventClicked(id: number, name: String) {
    this.updateClicked = true;
    this.displayClicked = this.addClicked = this.addButton = false;

    this.salesService.getSalesByIdBackend(id).subscribe(
      response => this.sale = response
    )
    this.productService.getByName(name).subscribe(
      response => this.product = response
    )
  }


  onSubmitUpdate() {
    this.sale.price = this.product.unitPrice;
    this.sale.cat_id = this.product.categoryId;
    this.salesService.updateSales(this.sale, this.sale.id).subscribe(
      response => {
        this.output = "Updated Successfully", error => this.output = "Error while Updating";
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkSalesService();
      }
    )

  }

  addEventClicked() {
    this.addClicked = true;
    this.updateClicked = this.displayClicked = this.addButton = false;
  }

  onSubmitAdd() {
    this.newSales.price = this.product.unitPrice;
    this.newSales.cat_id = this.product.categoryId;
    console.log(this.newSales)
    this.salesService.addSales(this.newSales).subscribe(
      response => {
        this.output = "Added Successfully", error => this.output = "Error while Adding";
      
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkSalesService();
      }
    )
    this.displayClicked = this.addButton = true;
    this.updateClicked = this.addClicked = false;
    this.router.navigateByUrl('')
  }

  deleteEventClicked(id: number) {
    this.salesService.deleteSales(id).subscribe(
      response => {
        this.output = "Deleted Successfully", error => this.output = "Error while Deleting";
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkSalesService();
      }
    )
  }

  addProductInformation() {
    this.productInformation(this.newSales.prod_Name);
  }

  updateProductInformation() {
    this.productInformation(this.sale.prod_Name);
  }


  productInformation(name: String) {
    console.log(name);
    this.productService.getByName(name).subscribe(
      response => this.product = response
    )
    console.log(this.product)
  }




}
