import { Injectable } from '@angular/core';

import { userInfo } from './login.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getUsersFromBackend() {
    return this.http.get<userInfo[]>('http://localhost:8080/getUsers');
  }

  getUserByIdBackend(id) {
    return this.http.get<userInfo>(`http://localhost:8080/show/User/${id}`)
  }

  updateUser(user : userInfo, id : number)  {
    return this.http.put(`http://localhost:8080/User/update/${id}`,user)
  }


  addProduct( user : userInfo) {
        return this.http.post('http://localhost:8080/product/addProduct',user)
   }

  

  deleteProduct(id)    {
       return this.http.delete<userInfo>(`http://localhost:8080/user/Delete/${id}`)
   }




}
