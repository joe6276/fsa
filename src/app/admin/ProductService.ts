import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product, Product1 } from "../interface";



@Injectable({
    providedIn:'root'
})
export class ProductService{
constructor(private http:HttpClient){}
products$!:Observable<Product1[]> 

addProduct(product:Product):Observable<{message:string}>{
    return this.http.post<{message:string}>('http://localhost:4003/products',product)

}

getProducts(){
    const token = localStorage.getItem('token') as string
    return this.http.get<Product1[]>('http://localhost:4003/products',{
        headers:new HttpHeaders({token})
    })    
}

}