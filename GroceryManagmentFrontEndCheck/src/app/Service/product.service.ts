import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class productInfo {
    constructor(
        public id: number,
        public code: String,
        public name: String,
        public brand: String,
        public description: String,
        public unitPrice: number,
        public quantity: number,
        public categoryId: number,
        public supplierId: number,
        public purchases: number,
        public views: number
    ) {

    }
}


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor( private http : HttpClient) { }

    getallProductsFromBackend()    {
       return this.http.get<productInfo[]>('http://localhost:8080/test');
   }

    getProductByIdBackend(id)    {
       return this.http.get<productInfo>(`http://localhost:8080/show/category/${id}/products`)
   }


}
