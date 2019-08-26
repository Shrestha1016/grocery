import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class debtors {
    constructor(
      public id : number,
      public Name : String,
      public Contact : String,
      public Address : String,
      public Amount : number
    ) {

    }
}


@Injectable({
  providedIn: 'root'
})
export class DebtorService {

  constructor(private http : HttpClient) { }


  getDebtorlist() {
    return this.http.get<debtors[]>('http://localhost:8080/Debtor/debtors')
  }


  getProductByIdBackend(id)    {
       return this.http.get<debtors[]>(`http://localhost:8080/show/debtor/${id}`)
   }

   addProduct( debtorData : debtors) {
        return this.http.post('http://localhost:8080/debtor/addDebtor',debtorData)
   }

  updateProduct( debtorData : debtors,id : number) {
        return this.http.put(`http://localhost:8080/debtor/update/${id}`,debtorData)
   }

  deleteProduct(id)    {
       return this.http.delete<debtors>(`http://localhost:8080/debtor/Delete/${id}`)
   }



}
