import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetails, LoginResponse, Message, User, UserDetail } from './interface';
 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }

   private token = localStorage.getItem('token') as string
  
 AddUser(user:User):Observable<Message>{
    return this.http.post<Message>('http://localhost:4003/users/signup',user)
  }
  logUser(details:LoginDetails):Observable<LoginResponse>{
     return this.http.post<LoginResponse>('http://localhost:4003/users/login',details)
  }
 
}
