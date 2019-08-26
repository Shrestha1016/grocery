import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class productInfo {
   
         id: number;
         code: String;
         name: String;
         description: String;
         unitPrice: number;
         quantity: number;
         categoryId: number;
         supplierId: number;
         purchases: number;
    
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

   addProduct( productData : productInfo) {
        return this.http.post('http://localhost:8080/product/addProduct',productData)
   }

  updateProduct( productData : productInfo,id : number) {
        return this.http.put(`http://localhost:8080/product/update/${id}`,productData)
   }

  deleteProduct(id)    {
       return this.http.delete<productInfo>(`http://localhost:8080/product/byCategoryId/${id}`)
   }


}
