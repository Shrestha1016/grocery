import { Component, OnInit } from '@angular/core';
import { CategorypassService } from '../Service/categorypass.service';
import { CategoryService, Category } from '../Service/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    categories: Category[];
    categoryName : String;
  constructor(private categoryService: CategoryService,
                private passCategoryName : CategorypassService) { }


  ngOnInit() {
       this.categoryService.allCategory().subscribe   (
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
