import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Category    {
    constructor(
        public id : number,
        public name : string,
        public description : string,
    )   {

    }
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }
  

    allCategoryProductsBackend()    {
       return this.http.get<Category[]>('http://localhost:8080/Category/products');
   }


  //  getUserByIdBackend(id) {
  //   return this.http.get<Category>(`http://localhost:8080/show/User/${id}`)
  // }

  updateUser(category : Category, id : number)  {
    return this.http.put(`http://localhost:8080/category/update/${id}`,category)
  }


  addProduct( category : Category) {
        return this.http.post('http://localhost:8080/category/addCategory',category)
   }

  

  deleteProduct(id)    {
       return this.http.delete<Category>(`http://localhost:8080/category/Delete/${id}`)
   }


}
