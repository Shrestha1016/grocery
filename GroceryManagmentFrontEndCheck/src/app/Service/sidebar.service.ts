import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category.service';




@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
      private http: HttpClient
  ) {
   }


   allCategoryProductsBackend()    {
       return this.http.get<Category[]>('http://localhost:8080/Category/products');
   }

//    categoryByIdBackendData(id)    {
//        return this.http.get<Category>(`http://localhost:8080/show/category/${id}/products`)
//    }

  
   
}
