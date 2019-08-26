import { Component, OnInit } from '@angular/core';
import { productInfo, ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    // private sidebarData: SidebarService,
    private productDetail: ProductService
  ) {

    this.productDetailInitCall();

    // setTimeout(function () {
    //     $(function () {
    //         $('#tableData').DataTable();
    //     });
    // }, 3000);


  }




  products: productInfo[];

  output: String;

  id: number;
  code: String;
  name: String;
  description: String;
  unitPrice: number;
  quantity: number;
  categoryId: number;
  supplierId: number;
  purchases: number;

  product: productInfo = new productInfo()


  ngOnInit() {
    this.productDetailInitCall();

    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.DataTable(this.dtOptions);
  }

  // this.sidebarData.allCategoryProductsBackend().subscribe(
  //     response => console.log(response)
  // )



  productDetailInitCall() {
    this.productDetail.getallProductsFromBackend().subscribe(
      response => this.handleSuccessfullResponse(response)
    )



  }

  handleSuccessfullResponse(response) {
    this.products = response;
  }


}