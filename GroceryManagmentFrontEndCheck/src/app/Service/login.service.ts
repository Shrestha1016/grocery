import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customerInfo } from './customer.service';

export class userInfo {
  public id: number;
  public firstName: String;
  public lastName: String;
  public email: String;
  public contactNumber: String;
  public role: String;
  public password: String;
  public confirmPassword: String;
}



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) {
  }

  user: userInfo;

  getUserByEmail(email : String)  {
   return this.http.get<userInfo>(`http://localhost:8080/user/email/${email}`);
  }

  createCustomer(customer : customerInfo) {
    return this.http.post('http://localhost:8080/customer/addCustomer',customer)
  }

  getCustomerByEmail(email:String)  {
    return this.http.get<customerInfo>(`http://localhost:8080/customer/email/${email}`);
  }

}
