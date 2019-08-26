import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class userInfo   {
        public id : number;
        public firstName : String;
        public lastName : String;
        public email : String;
        public contactNumber : String;
        public role : String;
        public password : String;
        public confirmPassword : String;
}



@Injectable({
  providedIn: 'root'
})
export class LoginService {

    private baseUrl = 'http://localhost:8080/user';

  constructor(
      private http : HttpClient
  ) {
   }

  createCustomer(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/addUser`, user);
  }


}
