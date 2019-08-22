import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface productInfo {
   
         id: number;
         code: String;
         name: String;
         brand: String;
         description: String;
         unitPrice: number;
         quantity: number;
         categoryId: number;
         supplierId: number;
         purchases: number;
         views: number;
    
}


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor( private http : HttpClient) { }


    getallProductsFromBackend() : Observable<productInfo[]>   {
       return this.http.get<productInfo[]>('http://localhost:8080/allProduct');
   }

    getProductByIdBackend(id)    {
       return this.http.get<productInfo[]>(`http://localhost:8080/product/byCategoryId/${id}`)
   }


}
