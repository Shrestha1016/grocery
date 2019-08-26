import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Supplier{
  public id : number;
  public Name : String;
  public Contact : String;
  public Address : String;
  public products : String[];
}


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http : HttpClient) {  }

  getallProductsFromBackend() : Observable<Supplier[]>   {
       return this.http.get<Supplier[]>('http://localhost:8080/Supplier/getSupplier');
   }

    getProductByIdBackend(id)    {
       return this.http.get<Supplier[]>(`http://localhost:8080/Supplier/getSupplierById/${id}`)
   }

   addProduct( supplierData : Supplier) {
        return this.http.post('http://localhost:8080/Supplier/addSupplier',supplierData)
   }

  updateProduct( supplierData : Supplier,id : number) {
        return this.http.put(`http://localhost:8080/Supplier/updateSupplier/${id}`,supplierData)
   }

  deleteProduct(id)    {
       return this.http.delete<Supplier[]>(`http://localhost:8080/Supplier/Delete/${id}`)
   }


  
}
