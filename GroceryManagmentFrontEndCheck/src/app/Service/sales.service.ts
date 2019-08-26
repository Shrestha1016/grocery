import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class  Sales {

  public id : number ;
  public prod_Name : String;
  public cat_id : number ;
  public Amount : number ;
  public price : number ;
  public quantity : number;
}


@Injectable({
  providedIn: 'root'
})
export class SalesService {

   constructor(private http : HttpClient) { }


  getSaleslist() {
    return this.http.get<Sales[]>('http://localhost:8080/Debtor/debtors')
  }


  getSalesByIdBackend(id)    {
       return this.http.get<Sales>(`http://localhost:8080/show/sales/${id}`)
   }

   addSales( sales : Sales) {
        return this.http.post('http://localhost:8080/sales/addDailySales',sales)
   }

  updateSales( sales : Sales,id : number) {
        return this.http.put(`http://localhost:8080/sales/updateDailySales/${id}`,sales)
   }

  deleteSales(id)    {
       return this.http.delete<Sales>(`http://localhost:8080/sales/Delete/${id}`)
   }

}
