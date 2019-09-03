import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from '../Service/sidebar.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
// import { CategorypassService } from '../Service/categorypass.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, productInfo } from '../Service/product.service';
import { CategoryService, Category } from '../Service/category.service';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {





    constructor(
        // private sidebarData: SidebarService,
        // private categoryPass: CategorypassService,
        private route: ActivatedRoute,
        private productDetail: ProductService,
        private categoryNameService: CategoryService,
        private router: Router
    ) {
        this.categoryInitCall()
    }

    checkProducts: productInfo[];
    categoryName: String;
    CategoryId: number;

    output: String;

    product: productInfo;

    categoryData: Category;
    updateClicked: boolean = false;
    displayClicked: boolean = true;
    addClicked: boolean = false;
    addButton: boolean = true;

    productData: productInfo;

    ngOnInit() {
        this.categoryInitCall();
        this.displayClicked = true;
        this.product = new productInfo();
    }



    categoryInitCall() {
        this.route.params.subscribe(params => {
            this.CategoryId = +params['id'];
            this.categoryNameService.getCategoryByIdBackend(this.CategoryId).subscribe(
                check => this.categoryData = check
            )
        });
        this.productCheck();
    }

    productCheck() {
        this.productDetail.getProductByIdBackend(this.CategoryId).subscribe(
            response => this.checkProducts = response
        )
    }

    updateEventClicked(id: number) {
        this.updateClicked = true;
        this.displayClicked = this.addClicked = this.addButton = false;
        this.productDetail.getSingleProduct(id).subscribe(
            response => this.productData = response
        )
    }

    deleteEventClicked(id: number) {

        this.productDetail.deleteProduct(id).subscribe(
            response => {
                this.output = "Deleted Successfully", error => this.output = "Error while Deleting";
                this.displayClicked = this.addButton = true;
                this.updateClicked = this.addClicked = false;
                this.categoryInitCall();
            }
        );
    }

    onSubmitUpdate() {
        console.log("hello");
        console.log(this.productData.quantity);
        this.productDetail.updateProduct(this.productData, this.productData.id).subscribe(

            response => {
                this.output = "Updated Successfully", error => this.output = "Error while Updating";
                this.displayClicked = this.addButton = true;
                this.updateClicked = this.addClicked = false;
                this.categoryInitCall();
            }
        )
    }

    addEventClicked() {
        this.addClicked = true;
        this.updateClicked = this.displayClicked = this.addButton = false;
        //this.productData = null;
    }

    onSubmitAdd() {
        this.productDetail.addProduct(this.product).subscribe(
            response => {
                this.output = "Added Successfully", error => this.output = "Error while Adding";
                this.displayClicked = this.addButton = true;
                this.updateClicked = this.addClicked = false;
                this.productCheck();
            }
        )

    }





}



