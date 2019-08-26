import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from '../Service/sidebar.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CategorypassService } from '../Service/categorypass.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService, productInfo } from '../Service/product.service';


declare var $;

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


    // for jquert datatable

    // @ViewChild('dataTable', { static: true }) table;
    // dataTable : any;
    // dtOptions : any;


    constructor(
        // private sidebarData: SidebarService,
        private categoryPass: CategorypassService,
        private route: ActivatedRoute,
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
    categoryName: String;
    CategoryId: number;

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
        $(function () {
            $('$dt').DataTable();
        });

        this.categoryInitCall();
        this.productDetailInitCall();

        // this.dataTable = $(this.table.nativeElement);
        // this.dataTable.DataTable(this.dtOptions);
    }




    categoryInitCall() {

        this.route.params.subscribe(params => {
            this.categoryName = this.categoryPass.getCategoryName();
            this.CategoryId = +params['id'];
        });


        // this.sidebarData.allCategoryProductsBackend().subscribe(
        //     response => console.log(response)
        // )

    }

    productDetailInitCall() {
        this.productDetail.getProductByIdBackend(this.CategoryId).subscribe(
            response => this.handleSuccessfullResponse(response)
        )


        

    this.productDetail.addProduct(this.product).subscribe(
      response => this.output = "Added Successfully", error => this.output = "Error while Adding"
    )

    this.productDetail.updateProduct(this.product, this.id).subscribe(
      response => this.output = "Updated Successfully", error => this.output = "Error while Updating"
    )

    this.productDetail.deleteProduct(this.id).subscribe(
      response => this.output = "Deleted Successfully", error => this.output = "Error while Deleting"
    )


    }



    handleSuccessfullResponse(response) {
        this.products = response;
        console.log(this.products);
    }
}



