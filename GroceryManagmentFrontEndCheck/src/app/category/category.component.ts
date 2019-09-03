import { Component, OnInit } from '@angular/core';
import { CategoryService, Category } from '../Service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router : Router) { }

  categories: Category[];
  category: Category;
  output: String;

  id: number;
  name: string;
  description: string;

  newCategories: Category = new Category();

  updateClicked: boolean = false;
  displayClicked: boolean = true;
  addClicked: boolean = false;
  addButton: boolean = true;

  ngOnInit() {
    this.checkCategory()
  }

  checkCategory() {
    this.categoryService.allCategory().subscribe(
      response => this.categories = response
    );




  }


  addEventClicked() {
    this.addClicked = true;
    this.updateClicked = this.displayClicked = this.addButton = false;
  }

  onSubmitAdd() {
    this.categoryService.addCategory(this.newCategories).subscribe(
      response => {
        this.output = "Added Successfully", error => this.output = "Error while Adding";
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkCategory();
      }
    )
    this.router.navigate(['/category']);
  }

  updateEventClicked(id : number) {
    this.updateClicked = true;
    this.displayClicked = this.addClicked = this.addButton = false;
    this.categoryService.getCategoryByIdBackend(this.id).subscribe(
      response => this.category = response
    )
  }

  onSubmitUpdate() {
    this.categoryService.updateCategory(this.newCategories, this.id).subscribe(
      response => {
        this.output = "Updated Successfully", error => this.output = "Error while Updating";
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkCategory();
      }
    )
  }

  deleteEventClicked(id: number) {
    this.categoryService.deleteCategory(this.id).subscribe(
      response => {
        this.output = "Deleted Successfully", error => this.output = "Error while Deleting";
        this.displayClicked = this.addButton = true;
        this.updateClicked = this.addClicked = false;
        this.checkCategory();
      }
    )
  }



}
