import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Category {

  public id: number;
  public name: string;
  public description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  allCategory() {
    return this.http.get<Category[]>('http://localhost:8080/Categories');
  }


  getCategoryByIdBackend(id) {
    return this.http.get<Category>(`http://localhost:8080/show/category/${id}`)
  }

  updateCategory(category: Category, id: number) {
    return this.http.put(`http://localhost:8080/category/update/${id}`, category)
  }


  addCategory(category: Category) {
    return this.http.post('http://localhost:8080/category/addCategory', category)
  }



  deleteCategory(id) {
    return this.http.delete<Category>(`http://localhost:8080/category/Delete/${id}`)
  }


}
