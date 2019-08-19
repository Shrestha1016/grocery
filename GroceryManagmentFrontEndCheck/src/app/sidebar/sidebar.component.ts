import { Component, OnInit } from '@angular/core';
import { SidebarService, sidebarCategory } from '../Service/sidebar.service';
import { CategorypassService } from '../Service/categorypass.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    categories: sidebarCategory[];
    categoryName : String;
  constructor(private categoryService: SidebarService,
                private passCategoryName : CategorypassService) { }


  ngOnInit() {
       this.categoryService.allCategoryProductsBackend().subscribe   (
                       response => this.handleSuccessfullResponse(response)
                              )
      }


  handleSuccessfullResponse(response) {
        this.categories = response;
    }


    userClickCategoryProducts(categoryNames: string) {
       
        this.passCategoryName.CategoryClicked(categoryNames);
    }
}
