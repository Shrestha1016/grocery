import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class customerInfo   {
        public id : number;
        public firstName : String;
        public lastName : String;
        public email : String;
        public contactNumber : String;
        public password : String;
        public confirmPassword : String;
        public role : String;
}


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getcustomersFromBackend() {
    return this.http.get<customerInfo[]>('http://localhost:8080/getcustomers');
  }

  getcustomerByIdBackend(id) {
    return this.http.get<customerInfo>(`http://localhost:8080/show/customer/${id}`)
  }

  updatecustomer(customer : customerInfo, id : number)  {
    return this.http.put(`http://localhost:8080/customer/update/${id}`,customer)
  }


  addcustomer( customer : customerInfo) {
        return this.http.post('http://localhost:8080/product/addcustomer',customer)
   }

  

  deletecustomer(id)    {
       return this.http.delete<customerInfo>(`http://localhost:8080/customer/Delete/${id}`)
   }

   getCustomerByEmail(email : String) { 
     return this.http.get<customerInfo>(`http://localhost:8080/customer/email/${email}`)
   }
}
