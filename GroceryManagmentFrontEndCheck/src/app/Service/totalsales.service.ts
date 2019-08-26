import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class TotalSales {
  public int : Number;
  public date : Date;
  public Amount : Number;

}


@Injectable({
  providedIn: 'root'
})
export class TotalsalesService {

  constructor(private http : HttpClient) { }


  getDebtorlist() {
    return this.http.get<TotalSales[]>('http://localhost:8080/TotalSales/getSales')
  }
 
   addProduct( sales : TotalSales) {
        return this.http.post('http://localhost:8080/sales/addTotalSales',sales)
   }

  updateProduct( sales : TotalSales,id : number) {
        return this.http.put(`http://localhost:8080/TotalSales/updateTotalSales/${id}`,sales)
   }

 
}
