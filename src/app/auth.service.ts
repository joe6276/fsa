import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetails, Message, User, UserDetail } from './interface';
 


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }

   private token = localStorage.getItem('token') as string
  
  AddUser(user:User):Observable<Message>{
    return this.http.post<Message>('http://localhost:4003/users/signup',user)
  }
  logUser(details:LoginDetails):Observable<Message>{
     return this.http.post<Message>('http://localhost:4003/users/login',details)
  }
  checkUser():Observable<UserDetail>{
    return this.http.get<UserDetail>('http://localhost:4003/users/check',{headers:
  new HttpHeaders({token:this.token})})
  }
}
