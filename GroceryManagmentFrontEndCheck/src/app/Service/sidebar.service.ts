import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class sidebarCategory    { 
    constructor(
        public id : number,
        public name : string,
        public description : string,
        public active : boolean
    )   {

    }
}


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(
      private http: HttpClient
  ) {
   }


   allCategoryProductsBackend()    {
       return this.http.get<sidebarCategory[]>('http://localhost:8080/show/all/products');
   }

   categoryByIdBackendData(id)    {
       return this.http.get<sidebarCategory>(`http://localhost:8080/show/category/${id}/products`)
   }

  
   
}
