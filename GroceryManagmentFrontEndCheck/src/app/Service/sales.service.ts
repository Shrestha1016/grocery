import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class  Sales {

  public id : number ;
  public customerName : String;
  public prod_Name : String;
  public cat_id : number ;
  public amount : number ;
  public price : number ;
  public quantity : number;
}


@Injectable({
  providedIn: 'root'
})
export class SalesService {

   constructor(private http : HttpClient) { }


  getSaleslist() {
    return this.http.get<Sales[]>('http://localhost:8080/sales/getDailySales')
  }


  getSalesByIdBackend(id)    {
       return this.http.get<Sales>(`http://localhost:8080/show/Sales/${id}`)
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
