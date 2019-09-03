import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Supplier {
  public id: number;
  public name: String;
  public contact: String;
  public address: String;
  public products: String;
}


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  getSupplierlist(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>('http://localhost:8080/Supplier/getSupplier');
  }

  getSupplierByIdBackend(id) {
    return this.http.get<Supplier>(`http://localhost:8080/Supplier/getSupplierById/${id}`)
  }

  addSupplier(supplierData: Supplier) {
    return this.http.post('http://localhost:8080/Supplier/addSupplier', supplierData)
  }

  updateSupplier(supplierData: Supplier, id: number) {
    return this.http.put(`http://localhost:8080/Supplier/updateSupplier/${id}`, supplierData)
  }

  deleteSupplier(id) {
    return this.http.delete<Supplier>(`http://localhost:8080/Supplier/Delete/${id}`)
  }



}
