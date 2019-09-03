import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Debtors {

  public id: number;
  public name: String;
  public contact: String;
  public address: String;
  public remAmount: number;



}


@Injectable({
  providedIn: 'root'
})
export class Debtorservice {

  constructor(private http: HttpClient) { }


  getDebtorlist() {
    return this.http.get<Debtors[]>('http://localhost:8080/Debtor/debtors')
  }


  getDebtorByIdBackend(id) {
    return this.http.get<Debtors>(`http://localhost:8080/show/debtor/${id}`)
  }

  addDebtor(debtorData: Debtors) {
    console.log(debtorData);
    return this.http.post('http://localhost:8080/debtor/addDebtor', debtorData)
  }

  updateDebtor(debtorData: Debtors, id: number) {
    return this.http.put(`http://localhost:8080/debtor/update/${id}`, debtorData)
  }

  deleteDebtor(id) {
    return this.http.delete<Debtors>(`http://localhost:8080/debtor/Delete/${id}`)
  }



}
