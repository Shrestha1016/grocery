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

  // getProductByIdBackend(id) {
  //   return this.http.get<userInfo>(`http://localhost:8080/show/category/${id}/products`)
  // }
}
