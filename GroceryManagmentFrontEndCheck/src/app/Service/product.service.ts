import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    constructor(private http: HttpClient) { }

   

    getallProductsFromBackend(): Observable<productInfo[]> {
        return this.http.get<productInfo[]>('http://localhost:8080/allProduct');
    }

    getProductByIdBackend(id) {
        return this.http.get<productInfo[]>(`http://localhost:8080/product/byCategoryId/${id}`)
    }

    getSingleProduct(id) {
        return this.http.get<productInfo>(`http://localhost:8080/product/${id}`)
    }

    addProduct(productData: productInfo) {
        return this.http.post('http://localhost:8080/product/addProduct', productData)
    }

    updateProduct(productData: any, id: number) {
        return this.http.put(`http://localhost:8080/product/update/${id}`, productData)
    }

    deleteProduct(id) {
        return this.http.delete<productInfo>(`http://localhost:8080/product/Delete/${id}`)
    }

    getByName(name : String) {
        return this.http.get<productInfo>(`http://localhost:8080/product/Name/${name}`)
    }
}
